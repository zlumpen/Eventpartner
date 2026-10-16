import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

// Hidden quote-request page (public/requestaquote.html, served at /requestaquote
// via middleware rewrite). The page POSTs here.

// Lazy-init — avoid crash at build time when env var is missing
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

// Where quote requests land (comma-separated). Override with QUOTE_EMAIL in Vercel.
const TO_EMAILS = (process.env.QUOTE_EMAIL || 'malin@eventpartner.io')
  .split(',')
  .map((e) => e.trim());

const FROM_EMAIL = 'EventPartner <noreply@eventpartner.io>';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Honeypot: bots fill the hidden field. Pretend it worked.
    if (clean(body.website)) return NextResponse.json({ success: true });

    const f = {
      eventName: clean(body.eventName),
      cityVenue: clean(body.cityVenue),
      attendees: clean(body.attendees, 20),
      listAccess: clean(body.listAccess, 20),
      targets: clean(body.targets, 2000),
      markets: clean(body.markets),
      goal: clean(body.goal, 20),
      team: clean(body.team, 20),
      video: clean(body.video, 10),
      videoCount: clean(body.videoCount, 20),
      contact: clean(body.contact),
      company: clean(body.company),
      email: clean(body.email, 200),
      phone: clean(body.phone, 60),
      language: clean(body.language, 5),
    };

    if (!f.eventName || !f.contact || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) {
      return NextResponse.json({ error: 'Missing or invalid fields' }, { status: 400 });
    }

    const rows: [string, string][] = [
      ['01 Event name and dates', f.eventName],
      ['02 City and venue', f.cityVenue],
      ['03 Number of attendees', f.attendees],
      ['03 Can get attendee list', f.listAccess],
      ['04 Who they want to meet', f.targets],
      ['05 Markets and languages', f.markets],
      ['06 Meeting goal', f.goal],
      ['07 Team members going', f.team],
      ['08 Video card add-on', f.video === 'Yes' ? `Yes${f.videoCount ? ` (about ${f.videoCount})` : ''}` : f.video],
      ['09 Contact person', f.contact],
      ['09 Company', f.company],
      ['09 Email', f.email],
      ['09 Phone', f.phone],
      ['Page language', f.language],
    ];

    const tableRows = rows
      .map(
        ([k, v]) =>
          `<tr style="border-bottom: 1px solid #eee;"><td style="padding: 12px 0; color: #666; width: 200px; vertical-align: top;">${esc(k)}</td><td style="padding: 12px 0;">${esc(v || '-').replace(/\n/g, '<br>')}</td></tr>`
      )
      .join('');

    const { error } = await getResend().emails.send({
      from: FROM_EMAIL,
      to: TO_EMAILS,
      replyTo: f.email,
      subject: `Quote request — ${f.eventName}`,
      html: `
<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
<div style="background: linear-gradient(135deg, #111 0%, #1a1a1a 100%); border-radius: 16px; padding: 32px; margin-bottom: 24px;">
<h1 style="color: #6AD8D2; font-size: 20px; margin: 0 0 4px;">Quote Request</h1>
<p style="color: rgba(255,255,255,0.5); font-size: 13px; margin: 0;">Received via eventpartner.io/requestaquote</p>
</div>
<table style="width: 100%; border-collapse: collapse; font-size: 14px;">${tableRows}</table>
<div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #eee;">
<p style="color: #999; font-size: 12px; margin: 0;">Reply directly to this email to respond to ${esc(f.contact)} at ${esc(f.email)}</p>
</div>
</div>
`,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('requestaquote API error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
