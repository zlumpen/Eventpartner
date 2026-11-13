// Europe — 41 countries
import type { Country } from './types';

export const EUROPE: Country[] = [
  {
    slug: "belgium", code: "be", name: "Belgium", nameSv: "Belgien", venues: "4,800+",
    topVenues: [
      { name: "SQUARE Brussels Meeting Centre", city: "Brussels", capacity: "2 200", type: "Convention center", image: "/Images/venues/belgium/venue-1.jpg" },
      { name: "Flanders Expo", city: "Ghent", capacity: "19 000+", type: "Exhibition center", image: "/Images/venues/belgium/venue-2.jpg" },
      { name: "Brussels Expo", city: "Brussels", capacity: "15 000", type: "Exhibition center", image: "/Images/venues/belgium/venue-3.jpg" },
      { name: "Skyhall", city: "Brussels/Zaventem", capacity: "1 200", type: "Convention center", image: "/Images/venues/belgium/venue-4.jpg" },
      { name: "The EGG Brussel", city: "Brussels", capacity: "5 000", type: "Event Venue", image: "/Images/venues/belgium/venue-5.jpg" },
    ],
  },
  {
    slug: "bosnia-herzegovina", code: "ba", name: "Bosnia and Herzegovina", nameSv: "Bosnien och Hercegovina", venues: "1,075+",
    topVenues: [
      { name: "Sarajevo Fair & Congress Center", city: "Sarajevo", capacity: "10 000+", type: "Exhibition center", image: "/Images/venues/bosnia-herzegovina/venue-1.jpg" },
      { name: "Hills Hotel Sarajevo Congress Centre", city: "Sarajevo", capacity: "3 500", type: "Hotel & Conference", image: "/Images/venues/bosnia-herzegovina/venue-10.jpg" },
      { name: "Hotel Europe Congress Centre", city: "Sarajevo", capacity: "1 500", type: "Hotel & Conference", image: "/Images/venues/bosnia-herzegovina/venue-13.jpg" },
      { name: "Mostar Fair", city: "Mostar", capacity: "5 000+", type: "Exhibition center", image: "/Images/venues/bosnia-herzegovina/venue-2.jpg" },
      { name: "Swissôtel Sarajevo Conference Centre", city: "Sarajevo", capacity: "1 000", type: "Convention center", image: "/Images/venues/bosnia-herzegovina/venue-5.jpg" },
    ],
  },
  {
    slug: "croatia", code: "hr", name: "Croatia", nameSv: "Kroatien", venues: "1,075+",
    topVenues: [
      { name: "Zagreb Fair Congress Center", city: "Zagreb", capacity: "20 000+", type: "Exhibition center", image: "/Images/venues/croatia/venue-1.jpg" },
      { name: "Dubrovnik Valamar Lacroma Conference Centre", city: "Dubrovnik", capacity: "1 200", type: "Convention center", image: "/Images/venues/croatia/venue-4.jpg" },
      { name: "Spaladium Arena & Conference Centre", city: "Split", capacity: "12 000", type: "Hotel & Conference", image: "/Images/venues/croatia/venue-7.jpg" },
      { name: "Amadria Park Convention Centre Šibenik", city: "Šibenik", capacity: "4 000", type: "Convention center", image: "/Images/venues/croatia/venue-10.jpg" },
      { name: "Westin Zagreb Conference Center", city: "Zagreb", capacity: "1 500", type: "Convention center", image: "/Images/venues/croatia/venue-13.jpg" },
    ],
  },
  {
    slug: "czech-republic", code: "cz", name: "Czech Republic", nameSv: "Tjeckien", venues: "5,625+",
    topVenues: [
      { name: "O2 universum Prague", city: "Prague", capacity: "10 000", type: "Event Venue", image: "/Images/venues/czech-republic/venue-1.jpg" },
      { name: "PVA EXPO PRAHA", city: "Prague", capacity: "5 000", type: "Exhibition center", image: "/Images/venues/czech-republic/venue-4.jpg" },
      { name: "Prague Congress Centre", city: "Prague", capacity: "9 300", type: "Convention center", image: "/Images/venues/czech-republic/venue-7.jpg" },
      { name: "Clarion Congress Hotel Prague", city: "Prague", capacity: "3 000", type: "Hotel & Conference", image: "/Images/venues/czech-republic/venue-10.jpg" },
      { name: "Brno Exhibition Centre", city: "Brno", capacity: "4 000", type: "Exhibition center", image: "/Images/venues/czech-republic/venue-13.jpg" },
    ],
  },
  {
    slug: "estonia", code: "ee", name: "Estonia", nameSv: "Estland", venues: "220+",
    topVenues: [
      { name: "Tallinn Creative Hub", city: "Tallinn", capacity: "6 000", type: "Event Venue", image: "/Images/venues/estonia/venue-1.jpg" },
      { name: "Eesti Näituste Fair Centre", city: "Tallinn", capacity: "10 000+", type: "Exhibition center", image: "/Images/venues/estonia/venue-4.jpg" },
      { name: "Hilton Tallinn Park Conference Centre", city: "Tallinn", capacity: "1 800", type: "Hotel & Conference", image: "/Images/venues/estonia/venue-7.jpg" },
      { name: "Swissôtel Tallinn Conference Centre", city: "Tallinn", capacity: "1 000", type: "Convention center", image: "/Images/venues/estonia/venue-10.jpg" },
      { name: "Tartu National Museum Conference Centre", city: "Tartu", capacity: "1 500", type: "Convention center", image: "/Images/venues/estonia/venue-13.jpg" },
    ],
  },
  {
    slug: "france", code: "fr", name: "France", nameSv: "Frankrike", venues: "8,525+",
    topVenues: [
      { name: "Paris Expo Porte de Versailles", city: "Paris", capacity: "200 000+", type: "Exhibition center", image: "/Images/venues/france/venue-1.jpg" },
      { name: "Palais des Congrès de Paris", city: "Paris", capacity: "3 700", type: "Event Venue", image: "/Images/venues/france/venue-4.jpg" },
      { name: "Cannes Palais des Festivals et des Congrès", city: "Cannes", capacity: "35 000", type: "Event Venue", image: "/Images/venues/france/venue-7.jpg" },
      { name: "Lyon Convention Centre", city: "Lyon", capacity: "19 000", type: "Convention center", image: "/Images/venues/france/venue-10.jpg" },
      { name: "Marseille Chanot Exhibition and Convention Centre", city: "Marseille", capacity: "30 000+", type: "Exhibition center", image: "/Images/venues/france/venue-13.jpg" },
    ],
  },
  {
    slug: "greece", code: "gr", name: "Greece", nameSv: "Grekland", venues: "5,025+",
    topVenues: [
      { name: "Metropolitan Expo Athens", city: "Athens", capacity: "50 000+", type: "Exhibition center", image: "/Images/venues/greece/venue-1.jpg" },
      { name: "Megaron Athens International Conference Centre", city: "Athens", capacity: "6 000", type: "Convention center", image: "/Images/venues/greece/venue-4.jpg" },
      { name: "Thessaloniki International Exhibition & Congress Center", city: "Thessaloniki", capacity: "20 000+", type: "Exhibition center", image: "/Images/venues/greece/venue-7.jpg" },
      { name: "Stavros Niarchos Foundation Cultural Center", city: "Athens", capacity: "5 000", type: "Convention center", image: "/Images/venues/greece/venue-10.jpg" },
      { name: "Creta Maris Convention Center", city: "Kreta", capacity: "5 500", type: "Convention center", image: "/Images/venues/greece/venue-13.jpg" },
    ],
  },
  {
    slug: "hungary", code: "hu", name: "Hungary", nameSv: "Ungern", venues: "5,625+",
    topVenues: [
      { name: "Hungexpo Budapest Congress and Exhibition Center", city: "Budapest", capacity: "36 000+", type: "Exhibition center", image: "/Images/venues/hungary/venue-1.jpg" },
      { name: "Budapest Congress Center", city: "Budapest", capacity: "3 000", type: "Convention center", image: "/Images/venues/hungary/venue-4.jpg" },
      { name: "Bálna Budapest", city: "Budapest", capacity: "3 000+", type: "Event Venue", image: "/Images/venues/hungary/venue-7.jpg" },
      { name: "Groupama Arena Conference & Event Center", city: "Budapest", capacity: "5 000", type: "Convention center", image: "/Images/venues/hungary/venue-10.jpg" },
      { name: "Corinthia Budapest Conference Center", city: "Budapest", capacity: "2 200", type: "Convention center", image: "/Images/venues/hungary/venue-13.jpg" },
    ],
  },
  {
    slug: "iceland", code: "is", name: "Iceland", nameSv: "Island", venues: "45+",
    topVenues: [
      { name: "Harpa Concert Hall & Conference Centre", city: "Reykjavik", capacity: "3 500+", type: "Convention center", image: "/Images/venues/iceland/venue-1.jpg" },
      { name: "Hilton Reykjavik Nordica Conference Centre", city: "Reykjavik", capacity: "2 000", type: "Hotel & Conference", image: "/Images/venues/iceland/venue-4.jpg" },
      { name: "Laugardalshöll Arena & Conference Centre", city: "Reykjavik", capacity: "5 500", type: "Convention center", image: "/Images/venues/iceland/venue-7.jpg" },
      { name: "Reykjavík Natura Conference Centre", city: "Reykjavik", capacity: "1 000", type: "Convention center", image: "/Images/venues/iceland/venue-10.jpg" },
      { name: "Hof Cultural and Conference Centre", city: "Akureyri", capacity: "1 500", type: "Convention center", image: "/Images/venues/iceland/venue-13.jpg" },
    ],
  },
  {
    slug: "ireland", code: "ie", name: "Ireland", nameSv: "Irland", venues: "4,800+",
    topVenues: [
      { name: "Convention Centre Dublin", city: "Dublin", capacity: "8 000", type: "Convention center", image: "/Images/venues/ireland/venue-1.jpg" },
      { name: "RDS Dublin", city: "Dublin", capacity: "15 000+", type: "Event Venue", image: "/Images/venues/ireland/venue-4.jpg" },
      { name: "Croke Park Conference Centre", city: "Dublin", capacity: "2 000", type: "Convention center", image: "/Images/venues/ireland/venue-7.jpg" },
      { name: "Killarney Convention Centre", city: "Killarney", capacity: "2 500", type: "Convention center", image: "/Images/venues/ireland/venue-10.jpg" },
      { name: "INEC Killarney", city: "Killarney", capacity: "4 000", type: "Event Venue", image: "/Images/venues/ireland/venue-13.jpg" },
    ],
  },
  {
    slug: "italy", code: "it", name: "Italy", nameSv: "Italien", venues: "8,950+",
    topVenues: [
      { name: "Fiera Milano", city: "Milano", capacity: "100 000+", type: "Exhibition center", image: "/Images/venues/italy/venue-1.jpg" },
      { name: "Rome Convention Center La Nuvola", city: "Rome", capacity: "8 000", type: "Convention center", image: "/Images/venues/italy/venue-4.jpg" },
      { name: "BolognaFiere", city: "Bologna", capacity: "50 000+", type: "Event Venue", image: "/Images/venues/italy/venue-7.jpg" },
      { name: "Rimini Palacongressi", city: "Rimini", capacity: "9 000", type: "Convention center", image: "/Images/venues/italy/venue-10.jpg" },
      { name: "Fortezza da Basso", city: "Florence", capacity: "20 000", type: "Event Venue", image: "/Images/venues/italy/venue-13.jpg" },
    ],
  },
  {
    slug: "latvia", code: "lv", name: "Latvia", nameSv: "Lettland", venues: "185+",
    topVenues: [
      { name: "Kipsala International Exhibition Centre", city: "Riga", capacity: "15 000+", type: "Exhibition center", image: "/Images/venues/latvia/venue-1.jpg" },
      { name: "ATTA Centre Riga", city: "Riga", capacity: "5 500", type: "Convention center", image: "/Images/venues/latvia/venue-4.jpg" },
      { name: "Radisson Blu Latvija Conference Centre", city: "Riga", capacity: "2 500", type: "Hotel & Conference", image: "/Images/venues/latvia/venue-7.jpg" },
      { name: "Hanzas Perons", city: "Riga", capacity: "2 000", type: "Event Venue", image: "/Images/venues/latvia/venue-10.jpg" },
      { name: "Jurmala Conference Centre", city: "Jūrmala", capacity: "1 000", type: "Convention center", image: "/Images/venues/latvia/venue-13.jpg" },
    ],
  },
  {
    slug: "lithuania", code: "lt", name: "Lithuania", nameSv: "Litauen", venues: "245+",
    topVenues: [
      { name: "Litexpo – Lithuanian Exhibition and Congress Centre", city: "Vilnius", capacity: "15 000+", type: "Exhibition center", image: "/Images/venues/lithuania/venue-1.jpg" },
      { name: "LITEXPO Congress Centre", city: "Vilnius", capacity: "5 000", type: "Exhibition center", image: "/Images/venues/lithuania/venue-4.jpg" },
      { name: "Radisson Blu Hotel Lietuva Conference Centre", city: "Vilnius", capacity: "1 200", type: "Hotel & Conference", image: "/Images/venues/lithuania/venue-7.jpg" },
      { name: "Žalgiris Arena Conference Centre", city: "Kaunas", capacity: "15 000", type: "Convention center", image: "/Images/venues/lithuania/venue-10.jpg" },
      { name: "Vilnius Grand Resort Conference Centre", city: "Vilnius", capacity: "1 000", type: "Hotel & Conference", image: "/Images/venues/lithuania/venue-13.jpg" },
    ],
  },
  {
    slug: "luxembourg", code: "lu", name: "Luxembourg", nameSv: "Luxemburg", venues: "550+",
    topVenues: [
      { name: "Luxexpo The Box", city: "Luxemburg City", capacity: "20 000+", type: "Exhibition center", image: "/Images/venues/luxembourg/venue-1.jpg" },
      { name: "European Convention Center Luxembourg", city: "Luxemburg City", capacity: "2 500", type: "Convention center", image: "/Images/venues/luxembourg/venue-4.jpg" },
      { name: "Neumünster Abbey Conference Centre", city: "Luxemburg City", capacity: "1 000", type: "Convention center", image: "/Images/venues/luxembourg/venue-7.jpg" },
      { name: "Cercle Cité Conference Centre", city: "Luxemburg City", capacity: "1 500", type: "Convention center", image: "/Images/venues/luxembourg/venue-10.jpg" },
      { name: "Luxembourg Chamber of Commerce Conference Center", city: "Luxemburg City", capacity: "800", type: "Convention center", image: "/Images/venues/luxembourg/venue-13.jpg" },
    ],
  },
  {
    slug: "malta", code: "mt", name: "Malta", nameSv: "Malta", venues: "550+",
    topVenues: [
      { name: "Malta Fairs & Conventions Centre", city: "Ta’ Qali", capacity: "10 000+", type: "Exhibition center", image: "/Images/venues/malta/venue-1.jpg" },
      { name: "Mediterranean Conference Centre", city: "Valletta", capacity: "1 400", type: "Convention center", image: "/Images/venues/malta/venue-4.jpg" },
      { name: "InterContinental Malta Conference Centre", city: "St. Julian’s", capacity: "1 700", type: "Convention center", image: "/Images/venues/malta/venue-7.jpg" },
      { name: "Hilton Malta Conference Centre", city: "St. Julian’s", capacity: "1 500", type: "Hotel & Conference", image: "/Images/venues/malta/venue-10.jpg" },
      { name: "Radisson Blu Golden Sands Conference Centre", city: "Mellieħa", capacity: "1 000", type: "Hotel & Conference", image: "/Images/venues/malta/venue-13.jpg" },
    ],
  },
  {
    slug: "montenegro", code: "me", name: "Montenegro", nameSv: "Montenegro", venues: "450+",
    topVenues: [
      { name: "Porto Montenegro Conference & Event Centre", city: "Tivat", capacity: "3 000+", type: "Convention center", image: "/Images/venues/montenegro/venue-1.jpg" },
      { name: "Hilton Podgorica Conference Centre", city: "Podgorica", capacity: "1 500", type: "Hotel & Conference", image: "/Images/venues/montenegro/venue-4.jpg" },
      { name: "Splendid Conference & Spa Resort", city: "Budva", capacity: "2 000", type: "Hotel & Conference", image: "/Images/venues/montenegro/venue-7.jpg" },
      { name: "Hotel Mediteran Conference Centre", city: "Bečići", capacity: "1 000+", type: "Hotel & Conference", image: "/Images/venues/montenegro/venue-10.jpg" },
      { name: "Regent Porto Montenegro Conference Venue", city: "Tivat", capacity: "800", type: "Convention center", image: "/Images/venues/montenegro/venue-13.jpg" },
    ],
  },
  {
    slug: "netherlands", code: "nl", name: "Netherlands", nameSv: "Nederländerna", venues: "4,800+",
    topVenues: [
      { name: "RAI Amsterdam", city: "Amsterdam", capacity: "50 000+", type: "Event Venue", image: "/Images/venues/netherlands/venue-1.jpg" },
      { name: "Jaarbeurs Utrecht", city: "Utrecht", capacity: "30 000+", type: "Event Venue", image: "/Images/venues/netherlands/venue-4.jpg" },
      { name: "Rotterdam Ahoy", city: "Rotterdam", capacity: "20 000+", type: "Event Venue", image: "/Images/venues/netherlands/venue-7.jpg" },
      { name: "World Forum The Hague", city: "Haag", capacity: "5 000", type: "Event Venue", image: "/Images/venues/netherlands/venue-10.jpg" },
      { name: "MECC Maastricht", city: "Maastricht", capacity: "10 000+", type: "Event Venue", image: "/Images/venues/netherlands/venue-13.jpg" },
    ],
  },
  {
    slug: "north-macedonia", code: "mk", name: "North Macedonia", nameSv: "Nordmakedonien", venues: "1,075+",
    topVenues: [
      { name: "Boris Trajkovski Sports Center & Congress Hall", city: "Skopje", capacity: "10 000+", type: "Convention center", image: "/Images/venues/north-macedonia/venue-1.jpg" },
      { name: "Aleksandar Palace Congress Center", city: "Skopje", capacity: "1 500", type: "Hotel & Conference", image: "/Images/venues/north-macedonia/venue-4.jpg" },
      { name: "Skopje Fair / Skopje Event Center", city: "Skopje", capacity: "5 000+", type: "Exhibition center", image: "/Images/venues/north-macedonia/venue-7.jpg" },
      { name: "DoubleTree by Hilton Skopje Conference Centre", city: "Skopje", capacity: "1 000", type: "Hotel & Conference", image: "/Images/venues/north-macedonia/venue-10.jpg" },
      { name: "Ohrid Congress & Event Centre", city: "Ohrid", capacity: "1 200", type: "Convention center", image: "/Images/venues/north-macedonia/venue-13.jpg" },
    ],
  },
  {
    slug: "norway", code: "no", name: "Norway", nameSv: "Norge", venues: "1,125+",
    topVenues: [
      { name: "Oslofjord Convention Center", city: "Melsomvik", capacity: "9 000+", type: "Convention center", image: "/Images/venues/norway/venue-1.jpg" },
      { name: "NOVA Spektrum", city: "Lillestrøm", capacity: "20 000+", type: "Event Venue", image: "/Images/venues/norway/venue-4.jpg" },
      { name: "The Qube Conference Centre", city: "Gardermoen/Oslo Airport", capacity: "8 000", type: "Convention center", image: "/Images/venues/norway/venue-7.jpg" },
      { name: "Grieghallen Conference Centre", city: "Bergen", capacity: "3 500", type: "Convention center", image: "/Images/venues/norway/venue-10.jpg" },
      { name: "Trondheim Spektrum", city: "Trondheim", capacity: "8 500", type: "Event Venue", image: "/Images/venues/norway/venue-13.jpg" },
    ],
  },
  {
    slug: "poland", code: "pl", name: "Poland", nameSv: "Polen", venues: "5,625+",
    topVenues: [
      { name: "Katowice International Conference Centre", city: "Katowice", capacity: "15 000", type: "Convention center", image: "/Images/venues/poland/venue-1.jpg" },
      { name: "Expo (EXPO Kraków)", city: "Kraków", capacity: "5 000", type: "Exhibition center", image: "/Images/venues/poland/venue-2.jpg" },
      { name: "Poznań International Fair", city: "Poznań", capacity: "150 000", type: "Exhibition center", image: "/Images/venues/poland/venue-3.jpg" },
      { name: "WARSAW EXPO XXI", city: "Warsaw", capacity: "10 000+", type: "Exhibition center", image: "/Images/venues/poland/venue-4.jpg" },
      { name: "ICE Kraków Congress Centre", city: "Kraków", capacity: "3 200", type: "Convention center", image: "/Images/venues/poland/venue-5.jpg" },
    ],
  },
  {
    slug: "portugal", code: "pt", name: "Portugal", nameSv: "Portugal", venues: "5,025+",
    topVenues: [
      { name: "FIL – Feira Internacional de Lisboa", city: "Lisbon", capacity: "20 000+", type: "Event Venue", image: "/Images/venues/portugal/venue-1.jpg" },
      { name: "Lisbon Congress Centre", city: "Lisbon", capacity: "8 000", type: "Convention center", image: "/Images/venues/portugal/venue-4.jpg" },
      { name: "Altice Forum Braga", city: "Braga", capacity: "12 000", type: "Event Venue", image: "/Images/venues/portugal/venue-7.jpg" },
      { name: "Super Bock Arena & Congress Centre", city: "Porto", capacity: "8 000", type: "Convention center", image: "/Images/venues/portugal/venue-10.jpg" },
      { name: "Centro de Congressos do Estoril", city: "Estoril", capacity: "1 500", type: "Convention center", image: "/Images/venues/portugal/venue-13.jpg" },
    ],
  },
  {
    slug: "romania", code: "ro", name: "Romania", nameSv: "Rumänien", venues: "3,975+",
    topVenues: [
      { name: "Romexpo Exhibition Centre", city: "Bucharest", capacity: "40 000+", type: "Exhibition center", image: "/Images/venues/romania/venue-doc-1.jpg" },
      { name: "Palace of the Parliament – International Conference Center", city: "Bucharest", capacity: "5 000+", type: "Hotel & Conference", image: "/Images/venues/romania/venue-doc-2.jpg" },
      { name: "Radisson Blu Hotel Bucharest Conference Center", city: "Bucharest", capacity: "2 000+", type: "Hotel & Conference", image: "/Images/venues/romania/venue-doc-3.jpg" },
      { name: "Cluj Arena & BT Arena Conference Facilities", city: "Cluj-Napoca", capacity: "10 000+", type: "Convention center", image: "/Images/venues/romania/venue-doc-4.jpg" },
      { name: "Iulius Congress Hall", city: "Timișoara", capacity: "1 500+", type: "Convention center", image: "/Images/venues/romania/venue-13.jpg" },
    ],
  },
  {
    slug: "serbia", code: "rs", name: "Serbia", nameSv: "Serbien", venues: "1,075+",
    topVenues: [
      { name: "Sava Center", city: "Belgrad", capacity: "7 000+", type: "Convention center", image: "/Images/venues/serbia/venue-1.jpg" },
      { name: "Belgrade Fair", city: "Belgrad", capacity: "30 000+", type: "Exhibition center", image: "/Images/venues/serbia/venue-4.jpg" },
      { name: "Crowne Plaza Belgrade Conference Centre", city: "Belgrad", capacity: "4 000", type: "Convention center", image: "/Images/venues/serbia/venue-7.jpg" },
      { name: "Kombank Arena / Stark Arena Event Center", city: "Belgrad", capacity: "20 000", type: "Convention center", image: "/Images/venues/serbia/venue-10.jpg" },
      { name: "Metropol Palace Conference Centre", city: "Belgrad", capacity: "1 500", type: "Hotel & Conference", image: "/Images/venues/serbia/venue-13.jpg" },
    ],
  },
  {
    slug: "slovakia", code: "sk", name: "Slovakia", nameSv: "Slovakien", venues: "1,500+",
    topVenues: [
      { name: "Incheba Expo Bratislava", city: "Bratislava", capacity: "15 000+", type: "Exhibition center", image: "/Images/venues/slovakia/venue-1.jpg" },
      { name: "x-bionic sphere", city: "Šamorín", capacity: "10 000", type: "Event Venue", image: "/Images/venues/slovakia/venue-4.jpg" },
      { name: "DoubleTree by Hilton Bratislava Conference Centre", city: "Bratislava", capacity: "2 500", type: "Hotel & Conference", image: "/Images/venues/slovakia/venue-7.jpg" },
      { name: "Bratislava Castle Conference Venue", city: "Bratislava", capacity: "1 000+", type: "Convention center", image: "/Images/venues/slovakia/venue-10.jpg" },
      { name: "Crowne Plaza Bratislava Conference Center", city: "Bratislava", capacity: "1 200", type: "Convention center", image: "/Images/venues/slovakia/venue-13.jpg" },
    ],
  },
  {
    slug: "slovenia", code: "si", name: "Slovenia", nameSv: "Slovenien", venues: "1,075+",
    topVenues: [
      { name: "Ljubljana Exhibition and Convention Centre", city: "Ljubljana", capacity: "12 000+", type: "Exhibition center", image: "/Images/venues/slovenia/venue-1.jpg" },
      { name: "Cankarjev dom", city: "Ljubljana", capacity: "2 000+", type: "Event Venue", image: "/Images/venues/slovenia/venue-4.jpg" },
      { name: "Hotel Slovenija Congress Centre", city: "Portorož", capacity: "1 100", type: "Hotel & Conference", image: "/Images/venues/slovenia/venue-7.jpg" },
      { name: "Bled Convention Centre", city: "Bled", capacity: "500", type: "Convention center", image: "/Images/venues/slovenia/venue-10.jpg" },
      { name: "Stožice Arena & Event Center", city: "Ljubljana", capacity: "14 000", type: "Convention center", image: "/Images/venues/slovenia/venue-13.jpg" },
    ],
  },
  {
    slug: "spain", code: "es", name: "Spain", nameSv: "Spanien", venues: "8,950+",
    topVenues: [
      { name: "IFEMA Madrid", city: "Madrid", capacity: "100 000+", type: "Event Venue", image: "/Images/venues/spain/venue-1.jpg" },
      { name: "Fira Barcelona", city: "Barcelona", capacity: "120 000+", type: "Event Venue", image: "/Images/venues/spain/venue-4.jpg" },
      { name: "Palacio Municipal IFEMA Madrid", city: "Madrid", capacity: "3 000", type: "Event Venue", image: "/Images/venues/spain/venue-7.jpg" },
      { name: "Palacio de Congresos de Valencia", city: "Valencia", capacity: "2 300", type: "Event Venue", image: "/Images/venues/spain/venue-10.jpg" },
      { name: "Málaga Trade Fair and Congress Center", city: "Málaga", capacity: "6 000+", type: "Exhibition center", image: "/Images/venues/spain/venue-13.jpg" },
    ],
  },
  {
    slug: "sweden", code: "se", name: "Sweden", nameSv: "Sverige", venues: "2,475+",
    topVenues: [
      { name: "Stockholmsmässan", city: "Stockholm", capacity: "30 000+", type: "Event Venue", image: "/Images/venues/sweden/venue-1.jpg" },
      { name: "Svenska Mässan Gothia Towers", city: "Gothenburg", capacity: "18 000+", type: "Event Venue", image: "/Images/venues/sweden/venue-6.jpg" },
      { name: "Stockholm Waterfront Congress Centre", city: "Stockholm", capacity: "3 000", type: "Event Venue", image: "/Images/venues/sweden/venue-7.jpg" },
      { name: "Malmömässan", city: "Malmö", capacity: "10 000+", type: "Event Venue", image: "/Images/venues/sweden/venue-10.jpg" },
      { name: "Scandinavian XPO", city: "Stockholm/Arlanda", capacity: "8 000", type: "Event Venue", image: "/Images/venues/sweden/venue-13.jpg" },
    ],
  },
  {
    slug: "switzerland", code: "ch", name: "Switzerland", nameSv: "Schweiz", venues: "5,625+",
    topVenues: [
      { name: "Palexpo Geneva", city: "Geneva", capacity: "50 000+", type: "Exhibition center", image: "/Images/venues/switzerland/venue-1.jpg" },
      { name: "Messe Zürich", city: "Zurich", capacity: "20 000+", type: "Exhibition center", image: "/Images/venues/switzerland/venue-4.jpg" },
      { name: "SwissTech Convention Center", city: "Lausanne", capacity: "3 000", type: "Convention center", image: "/Images/venues/switzerland/venue-7.jpg" },
      { name: "Congress Center Basel", city: "Basel", capacity: "5 000", type: "Convention center", image: "/Images/venues/switzerland/venue-10.jpg" },
      { name: "KKL Luzern", city: "Luzern", capacity: "2 500", type: "Event Venue", image: "/Images/venues/switzerland/venue-13.jpg" },
    ],
  },
  {
    slug: "uk", code: "gb", name: "United Kingdom", nameSv: "Storbritannien", venues: "8,525+",
    topVenues: [
      { name: "ExCeL London", city: "London", capacity: "68 000+", type: "Event Venue", image: "/Images/venues/uk/venue-1.jpg" },
      { name: "ICC Birmingham", city: "Birmingham", capacity: "10 000", type: "Event Venue", image: "/Images/venues/uk/venue-10.jpg" },
      { name: "Manchester Central Convention Complex", city: "Manchester", capacity: "10 000+", type: "Convention center", image: "/Images/venues/uk/venue-13.jpg" },
      { name: "SEC Glasgow", city: "Glasgow", capacity: "13 000+", type: "Event Venue", image: "/Images/venues/uk/venue-2.jpg" },
      { name: "QEII Centre London", city: "London", capacity: "2 500", type: "Convention center", image: "/Images/venues/uk/venue-5.jpg" },
    ],
  },
  {
    slug: "albania", code: "al", name: "Albania", nameSv: "Albanien", venues: "1,075+",
    topVenues: [
      { name: "Palace of Congresses", city: "Tirana", capacity: "4 000+", type: "Hotel & Conference", image: "/Images/venues/albania/venue-1.jpg" },
      { name: "Tirana International Hotel & Conference Centre", city: "Tirana", capacity: "1 500+", type: "Hotel & Conference", image: "/Images/venues/albania/venue-10.jpg" },
      { name: "Expo City Albania", city: "Tirana", capacity: "10 000+", type: "Exhibition center", image: "/Images/venues/albania/venue-13.jpg" },
      { name: "Rogner Hotel Conference Centre", city: "Tirana", capacity: "800+", type: "Hotel & Conference", image: "/Images/venues/albania/venue-2.jpg" },
      { name: "Palace Hotel & Spa Durres Conference Center", city: "Durrës", capacity: "1 000+", type: "Hotel & Conference", image: "/Images/venues/albania/venue-5.jpg" },
    ],
  },
  {
    slug: "andorra", code: "ad", name: "Andorra", nameSv: "Andorra", venues: "450+",
    topVenues: [
      { name: "Andorra la Vella Congress Centre", city: "Andorra la Vella", capacity: "1 000+", type: "Convention center", image: "/Images/venues/andorra/venue-1.jpg" },
      { name: "Centre de Congressos d’Escaldes-Engordany", city: "Escaldes-Engordany", capacity: "700+", type: "Convention center", image: "/Images/venues/andorra/venue-7.jpg" },
      { name: "Sport Hotel Hermitage & Spa Conference Centre", city: "Soldeu", capacity: "500+", type: "Hotel & Conference", image: "/Images/venues/andorra/venue-10.jpg" },
      { name: "Andorra Park Hotel Conference Facilities", city: "Andorra la Vella", capacity: "300+", type: "Hotel & Conference", image: "/Images/venues/andorra/venue-12.jpg" },
      { name: "Roc Blanc Hotel & Spa Conference Center", city: "Escaldes-Engordany", capacity: "400+", type: "Hotel & Conference", image: "/Images/venues/andorra/venue-4.jpg" },
    ],
  },
  {
    slug: "bulgaria", code: "bg", name: "Bulgaria", nameSv: "Bulgarien", venues: "1,450+",
    topVenues: [
      { name: "Inter Expo Center Sofia", city: "Sofia", capacity: "20 000+", type: "Exhibition center", image: "/Images/venues/bulgaria/venue-1.jpg" },
      { name: "National Palace of Culture", city: "Sofia", capacity: "15 000+", type: "Hotel & Conference", image: "/Images/venues/bulgaria/venue-10.jpg" },
      { name: "Sofia Tech Park – John Atanasoff Innovation Forum", city: "Sofia", capacity: "1 000+", type: "Event Venue", image: "/Images/venues/bulgaria/venue-13.jpg" },
      { name: "International Fair Plovdiv", city: "Plovdiv", capacity: "30 000+", type: "Exhibition center", image: "/Images/venues/bulgaria/venue-2.jpg" },
      { name: "Burgas International Congress Center", city: "Burgas", capacity: "2 000+", type: "Convention center", image: "/Images/venues/bulgaria/venue-5.jpg" },
    ],
  },
  {
    slug: "denmark", code: "dk", name: "Denmark", nameSv: "Danmark", venues: "224+",
    topVenues: [
      { name: "Bella Center Copenhagen", city: "Copenhagen", capacity: "30 000+", type: "Convention center", image: "/Images/venues/denmark/venue-1.jpg" },
      { name: "Tivoli Congress Center", city: "Copenhagen", capacity: "4 000+", type: "Convention center", image: "/Images/venues/denmark/venue-10.jpg" },
      { name: "Øksnehallen", city: "Copenhagen", capacity: "3 500+", type: "Convention center", image: "/Images/venues/denmark/venue-13.jpg" },
      { name: "Messe C / Fredericia Conference Center", city: "Fredericia", capacity: "8 000+", type: "Exhibition center", image: "/Images/venues/denmark/venue-2.jpg" },
      { name: "Aalborg Kongres & Kultur Center", city: "Aalborg", capacity: "4 000+", type: "Convention center", image: "/Images/venues/denmark/venue-5.jpg" },
    ],
  },
  {
    slug: "finland", code: "fi", name: "Finland", nameSv: "Finland", venues: "325+",
    topVenues: [
      { name: "Messukeskus Helsinki", city: "Helsinki", capacity: "50 000+", type: "Event Venue", image: "/Images/venues/finland/venue-1.jpg" },
      { name: "Finlandia Hall", city: "Helsinki", capacity: "3 400+", type: "Convention center", image: "/Images/venues/finland/venue-10.jpg" },
      { name: "Helsinki Congress Paasitorni", city: "Helsinki", capacity: "2 500+", type: "Convention center", image: "/Images/venues/finland/venue-13.jpg" },
      { name: "Tampere Hall", city: "Tampere", capacity: "5 000+", type: "Convention center", image: "/Images/venues/finland/venue-2.jpg" },
      { name: "Logomo Turku", city: "Turku", capacity: "3 500+", type: "Event Venue", image: "/Images/venues/finland/venue-5.jpg" },
    ],
  },
  {
    slug: "germany", code: "de", name: "Germany", nameSv: "Tyskland", venues: "9,650+",
    topVenues: [
      { name: "Messe Frankfurt", city: "Frankfurt", capacity: "100 000+", type: "Exhibition center", image: "/Images/venues/germany/venue-1.jpg" },
      { name: "Hannover Messe / Deutsche Messe", city: "Hannover", capacity: "250 000+", type: "Exhibition center", image: "/Images/venues/germany/venue-10.jpg" },
      { name: "Messe München", city: "Munich", capacity: "50 000+", type: "Exhibition center", image: "/Images/venues/germany/venue-13.jpg" },
      { name: "CityCube Berlin / Messe Berlin", city: "Berlin", capacity: "11 000", type: "Exhibition center", image: "/Images/venues/germany/venue-2.jpg" },
      { name: "Koelnmesse", city: "Cologne", capacity: "150 000+", type: "Exhibition center", image: "/Images/venues/germany/venue-5.jpg" },
    ],
  },
  {
    slug: "gibraltar", code: "gi", name: "Gibraltar", nameSv: "Gibraltar", venues: "1,075+",
    topVenues: [
      { name: "Sunborn Gibraltar Yacht Hotel Conference Center", city: "Gibraltar", capacity: "700+", type: "Hotel & Conference", image: "/Images/venues/gibraltar/venue-1.jpg" },
      { name: "The Caleta Hotel Conference Centre", city: "Gibraltar", capacity: "400+", type: "Hotel & Conference", image: "/Images/venues/gibraltar/venue-10.jpg" },
      { name: "Gibraltar University Conference Facilities", city: "Gibraltar", capacity: "300+", type: "Convention center", image: "/Images/venues/gibraltar/venue-13.jpg" },
      { name: "Rock Hotel Conference Center", city: "Gibraltar", capacity: "250+", type: "Hotel & Conference", image: "/Images/venues/gibraltar/venue-2.jpg" },
      { name: "Eliott Hotel Conference Facilities", city: "Gibraltar", capacity: "200+", type: "Hotel & Conference", image: "/Images/venues/gibraltar/venue-5.jpg" },
    ],
  },
  {
    slug: "moldova", code: "md", name: "Moldova", nameSv: "Moldavien", venues: "1,450+",
    topVenues: [
      { name: "Moldexpo International Exhibition Centre", city: "Chișinău", capacity: "15 000+", type: "Exhibition center", image: "/Images/venues/moldova/venue-1.jpg" },
      { name: "Palatul Republicii", city: "Chișinău", capacity: "2 500+", type: "Event Venue", image: "/Images/venues/moldova/venue-10.jpg" },
      { name: "Radisson Blu Leogrand Hotel Conference Center", city: "Chișinău", capacity: "1 200+", type: "Hotel & Conference", image: "/Images/venues/moldova/venue-13.jpg" },
      { name: "Tekwill Conference Center", city: "Chișinău", capacity: "800+", type: "Convention center", image: "/Images/venues/moldova/venue-2.jpg" },
      { name: "Digital Park Conference Hall", city: "Chișinău", capacity: "500+", type: "Convention center", image: "/Images/venues/moldova/venue-5.jpg" },
    ],
  },
  {
    slug: "monaco", code: "mc", name: "Monaco", nameSv: "Monaco", venues: "450+",
    topVenues: [
      { name: "Grimaldi Forum Monaco", city: "Monaco", capacity: "3 000+", type: "Event Venue", image: "/Images/venues/monaco/venue-1.jpg" },
      { name: "One Monte-Carlo Conference Center", city: "Monaco", capacity: "1 200+", type: "Convention center", image: "/Images/venues/monaco/venue-10.jpg" },
      { name: "Fairmont Monte Carlo Conference Center", city: "Monaco", capacity: "1 500+", type: "Exhibition center", image: "/Images/venues/monaco/venue-13.jpg" },
      { name: "Hôtel Hermitage Monte-Carlo Conference Facilities", city: "Monaco", capacity: "600+", type: "Convention center", image: "/Images/venues/monaco/venue-2.jpg" },
      { name: "Le Méridien Beach Plaza Conference Center", city: "Monaco", capacity: "800+", type: "Convention center", image: "/Images/venues/monaco/venue-5.jpg" },
    ],
  },
  {
    slug: "ukraine", code: "ua", name: "Ukraine", nameSv: "Ukraina", venues: "1,450+",
    topVenues: [
      { name: "International Exhibition Centre", city: "Kyiv", capacity: "30 000+", type: "Exhibition center", image: "/Images/venues/ukraine/venue-1.jpg" },
      { name: "Parkovy Convention and Exhibition Center", city: "Kyiv", capacity: "3 000+", type: "Exhibition center", image: "/Images/venues/ukraine/venue-9.jpg" },
      { name: "ACCO International Exhibition Center", city: "Kyiv", capacity: "10 000+", type: "Exhibition center", image: "/Images/venues/ukraine/venue-9.jpg" },
      { name: "Lviv Arena Conference & Event Facilities", city: "Lviv", capacity: "8 000+", type: "Convention center", image: "/Images/venues/ukraine/venue-14.jpg" },
      { name: "Odessa Expo & Convention Center", city: "Odessa", capacity: "5 000+", type: "Exhibition center", image: "/Images/venues/ukraine/venue-4.jpg" },
    ],
  },
  {
    slug: "austria", code: "at", name: "Austria", nameSv: "Österrike", venues: "4,200+",
    topVenues: [
      { name: "Austria Center Vienna", city: "Vienna", capacity: "22 000+", type: "Convention center", image: "/Images/venues/austria/venue-1.jpg" },
      { name: "Messe Wien Exhibition & Congress Center", city: "Vienna", capacity: "30 000+", type: "Exhibition center", image: "/Images/venues/austria/venue-10.jpg" },
      { name: "Hofburg Vienna Congress Center", city: "Vienna", capacity: "4 900+", type: "Convention center", image: "/Images/venues/austria/venue-13.jpg" },
      { name: "Salzburg Congress", city: "Salzburg", capacity: "2 500+", type: "Convention center", image: "/Images/venues/austria/venue-2.jpg" },
      { name: "Congress Innsbruck", city: "Innsbruck", capacity: "3 500+", type: "Convention center", image: "/Images/venues/austria/venue-5.jpg" },
    ],
  },
  {
    slug: "cyprus", code: "cy", name: "Cyprus", nameSv: "Cypern", venues: "850+",
    topVenues: [
      { name: "Filoxenia Conference Centre", city: "Nicosia", capacity: "1 200", type: "Convention center" },
      { name: "Parklane Resort & Spa Convention Centre", city: "Limassol", capacity: "2 000", type: "Hotel & Conference" },
      { name: "Elias Beach Hotel Conference Centre", city: "Limassol", capacity: "1 000", type: "Hotel & Conference" },
      { name: "Amathus Beach Hotel Conference Centre", city: "Limassol", capacity: "800", type: "Hotel & Conference" },
      { name: "Hilton Nicosia Conference Centre", city: "Nicosia", capacity: "1 500", type: "Hotel & Conference" },
    ],
  },
];
