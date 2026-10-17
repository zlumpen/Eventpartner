import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

// Lead form on the digital business-card page (public/connect.html, served at /connect).
// The page POSTs here and the lead is emailed to the person whose QR code was scanned.

// Lazy-init: avoid crash at build time when the env var is missing
function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error('RESEND_API_KEY not configured');
  return new Resend(key);
}

function esc(str: unknown): string {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const clean = (v: unknown, max = 500) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

const RECIPIENTS: Record<string, string> = {
  pontus: 'pontus@eventpartner.io',
  malin: 'malin@eventpartner.io',
};

// Optional override in Vercel (comma-separated): CONNECT_LEAD_EMAIL
function getRecipients(person: string): string[] {
  const override = process.env.CONNECT_LEAD_EMAIL;
  if (override) return override.split(',').map((e) => e.trim()).filter(Boolean);
  return [RECIPIENTS[person] || RECIPIENTS.malin];
}

const FROM_EMAIL = 'EventPartner <noreply@eventpartner.io>';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Honeypot: bots fill the hidden field. Pretend it worked.
    if (clean(body.website)) return NextResponse.json({ success: true });

    const f = {
      name: clean(body.name, 200),
      company: clean(body.company, 200),
      email: clean(body.email, 200),
      phone: clean(body.phone, 60),
      person: clean(body.person, 20).toLowerCase(),
      source: clean(body.source, 200),
    };

    if (!f.name || !f.company || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email) || f.phone.replace(/\D/g, '').length < 6) {
      return NextResponse.json({ error: 'Missing or invalid fields' }, { status: 400 });
    }

    const rows: [string, string][] = [
      ['Name', f.name],
      ['Company', f.company],
      ['Email', f.email],
      ['Phone', f.phone],
      ['Met', f.person || '-'],
      ['Source', f.source],
    ];

    const tableRows = rows
      .map(
        ([k, v]) =>
          '<tr style="border-bottom: 1px solid #eee;"><td style="padding: 12px 0; color: #666; width: 200px; vertical-align: top;">' +
          esc(k) +
          '</td><td style="padding: 12px 0;">' +
          esc(v || '-') +
          '</td></tr>'
      )
      .join('');

    const html =
      '<div style="font-family: -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">' +
      '<div style="background: linear-gradient(135deg, #111 0%, #1a1a1a 100%); border-radius: 16px; padding: 32px; margin-bottom: 24px;">' +
      '<h1 style="color: #6AD8D2; font-size: 20px; margin: 0 0 4px;">Guide request</h1>' +
      '<p style="color: rgba(255,255,255,0.5); font-size: 13px; margin: 0;">Received via eventpartner.io/connect</p>' +
      '</div>' +
      '<table style="width: 100%; border-collapse: collapse; font-size: 14px;">' + tableRows + '</table>' +
      '<div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #eee;">' +
      '<p style="color: #999; font-size: 12px; margin: 0;">Reply directly to this email to respond to ' + esc(f.name) + ' at ' + esc(f.email) + '</p>' +
      '</div></div>';

    const { error } = await getResend().emails.send({
      from: FROM_EMAIL,
      to: getRecipients(f.person),
      replyTo: f.email,
      subject: 'Guide request - ' + f.company,
      html,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('connect-lead API error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
