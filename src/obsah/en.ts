// ── English content ──────────────────────────────────────────────────────
// Translation of `sk.ts`; TypeScript enforces the same structure (Obsah).
// Edit texts here; markup and CSS are shared in `src/components/Stranka.astro`.

import type { Obsah } from './sk';

export const en: Obsah = {
  lang: 'en',
  locale: 'en_GB',
  prepinac: { url: '/', label: 'SK', aria: 'Slovenská verzia' },

  farma: {
    nazov: 'Na Lúke',
    zalozene: '2009',
  },

  seo: {
    indexovat: false,
    url: 'https://na-luke.sk/en/',
    titul: 'Na Lúke — apitherapy, forest bathing & meditation in Gemer, Slovakia',
    popis:
      'A day on the meadow and in the woods with a former Buddhist monk: a slow forest walk, open-sky meditation and resting by the beehives (apitherapy). Upper Gemer, Slovakia — weekends, small groups. You take home calm, and a jar of honey.',
  },
  ldSluzbaPopis:
    'A half-day programme in a small group: a forest walk (forest bathing), meditation with a former Buddhist monk and resting by the hives (apitherapy). Children from age 10.',

  nav: {
    odkazy: [
      { href: '#program', text: 'The Day' },
      { href: '#o-nas', text: 'About Oto' },
      { href: '#med', text: 'Honey' },
    ],
    cta: { href: '#rezervacia', text: 'Book' },
    domovAria: 'Home',
    menuAria: 'Menu',
    hlavneMenuAria: 'Main menu',
  },

  hero: {
    eyebrowPred: 'Upper Gemer, Slovakia · Saturdays & Sundays · Since',
    titulRiadok1: 'Silence, bees',
    titulSpojka: 'and the ',
    titulAkcent: 'forest.',
    lead:
      'A day on the meadow and in the woods: a slow walk through old forest, meditation under the open sky, and rest beside the hives. You take home calm — and maybe a jar of honey.',
    btnPrimarny: { href: '#program', text: 'What the day looks like' },
    btnSekundarny: { href: '#rezervacia', text: 'Book a date' },
    scrollText: 'Come in',
    scrollAria: 'Go to the programme',
  },

  program: {
    eyebrow: 'The Day',
    sub: 'A half-day programme in a small group — no rush, no phones, no performance. Three things that together make one slow day.',
  },

  den: {
    nazov: 'A Day on the Meadow and in the Woods',
    zazitky: [
      {
        id: 'les',
        nazov: 'Forest walk',
        tag: 'Forest',
        popis:
          'A slow walk through old woods — no hurry and no talking. The forest does its work by itself; some call it forest bathing.',
        ilustracia: 'les',
      },
      {
        id: 'meditacia',
        nazov: 'Meditation with Oto',
        tag: 'Silence',
        popis:
          'Simple sitting and breathing under the open sky. Led by Oto, who lived six years as a Buddhist monk. No esoterics — just quiet.',
        ilustracia: 'meditacia',
      },
      {
        id: 'ule',
        nazov: 'Resting by the hives',
        tag: 'Bees',
        popis:
          'The scent of the hive, its warmth, the hum — the body rests all by itself. Going close is never required; it works from a distance too. Resting by the hives is sometimes called apitherapy.',
        ilustracia: 'ule',
      },
    ],
    priebeh: [
      { nazov: 'Walk through the woods', text: 'We start slowly — a forest path that airs a whole week out of your head.' },
      { nazov: 'Meditation on the meadow', text: 'We sit down in the grass. Oto guides you through simple sitting and breath.' },
      { nazov: 'Rest by the hives', text: 'Whoever wants comes closer to the bees. Whoever doesn’t, listens from a blanket.' },
      { nazov: 'Tea, honey, farewell', text: 'To finish: tea, bread with honey, and conversation — if you feel like one.' },
    ],
    info: [
      { kod: 'When', nazov: 'Saturdays & Sundays', text: 'Mornings, about three hours. Another day? Write to us and we’ll arrange it.', cena: 'spring to autumn' },
      { kod: '2–6', nazov: 'A small group', text: 'We walk in silence and in small numbers — booking ahead is required.', cena: 'a private date for your group' },
      { kod: '€10', nazov: 'Price per person', text: 'Children aged 10–15 for €5. The programme is quiet and slow — children from age 10, accompanied by an adult.', cena: 'cash on site' },
    ],
    dobreVediet: [
      'We are on a meadow, near bees and in a forest — in living nature. Throughout the visit you are responsible for yourself and for your children.',
      'If you are allergic to bee stings, tell us in advance — going near the hives is never required and the day is just as good without them. Bring your own medication; we provide no medical care on site.',
      'The exact meeting place comes after your date is confirmed — we are in Upper Gemer, just off the main road.',
      'Sturdy shoes and outdoor clothes are a good idea. Rain doesn’t cancel the day — the forest is beautiful wet, too.',
    ],
  },

  fotoLes: {
    aria: 'The forest behind the meadow',
    alt: 'Old coniferous forest in evening light',
    caption: 'The old forest behind the meadow — the walk goes through here.',
  },
  fotoMiestnost: {
    aria: 'Oto’s room of silence',
    alt: 'A wooden room with an altar, a painting of the Buddha and hand-painted flower panels',
    caption: 'Oto’s room of silence.',
  },

  rezervacia: {
    eyebrow: 'Booking',
    titul: 'Arrange your day',
    sub: 'No booking system — one e-mail is enough. We walk in small groups, so the date is always yours alone.',
    kroky: [
      { nazov: 'Write', text: 'Send an e-mail: how many of you there are, which weekend suits you, and whether anyone is allergic to bee stings.' },
      { nazov: 'We agree on a date', text: 'We reply, settle the day and send you the exact meeting place.' },
      { nazov: 'You come', text: 'Sturdy shoes, a calm mind. Everything else is on us.' },
    ],
    noticeTitul: 'Good to know',
    platbaLabel: 'Payment',
    platbaPred: 'Cash on site — ',
    platbaStrong: '€10 per adult',
    platbaPo: ', €5 per child aged 10 to 15.',
    platbaPozn: 'No deposit. If something comes up before your date, simply write.',
    mailSubject: 'Booking — A Day on the Meadow and in the Woods',
    btn: 'Book by e-mail',
  },

  oOtovi: {
    eyebrow: 'About Oto',
    titul: 'Before I built my first hive, I walked half the world.',
    odseky: [
      'More than twenty years ago I set out from Gemer on foot — across countries and borders — all the way to Korea. I lived there for six years as a Buddhist monk. It taught me one thing: when you don’t hurry, everything important comes by itself.',
      'Today I live with my wife and son on a meadow below the forest — and with the bees. A day spent with us is a piece of that same road: silence, slow walking, and respect for something greater than yourself.',
    ],
    fakty: [
      { v: 'On foot', popis: 'from Gemer to Korea' },
      { v: '6 years', popis: 'a Buddhist monk' },
      { v: 'Since 2009', popis: 'with bees on the meadow' },
    ],
    fotoTitul: 'A photograph of Oto',
    fotoPozn: 'coming soon',
  },

  medSekcia: {
    eyebrow: 'From our meadow',
    titul: 'You’ll take honey home',
    sub: 'At the end of the day you taste honey straight from our hives — and whatever you fall for, you buy on the spot. We also post honey and bee pollen via Packeta, across Slovakia and to the Czech Republic.',
    postouLabel: 'Postal orders',
    postouText: 'Write what you’d like and how much — we reply with the postage via Packeta. Payment by bank transfer or cash on delivery.',
    qrIbanPred: 'Bank transfer — IBAN',
    qrUcet: 'Account:',
    qrSken: 'Or scan the QR code in your banking app — the details fill in by themselves. Add the amount from the confirmation e-mail.',
    qrFallback: 'Payment details come in the confirmation e-mail.',
    mailSubject: 'Honey order — Na Lúke',
    btn: 'Order by e-mail',
  },

  produkty: [
    {
      id: 'lesny-med',
      nazov: 'Mixed forest honey',
      tag: 'Honey',
      popis:
        'Dark, thick and full of the taste of the forest. We jar it small and large — as much as your pantry needs.',
      ceny: [
        { suma: '€11', za: '950 g jar (0.7 l)' },
        { suma: '€50', za: '5 kg (3.5 l)' },
      ],
      ilustracia: 'med-tmavy',
    },
    {
      id: 'vceli-pel',
      nazov: 'Bee pollen',
      tag: 'From the hive',
      popis:
        'Fresh flower pollen straight from the hive. A spoonful a day — tiny grains full of meadow energy.',
      ceny: [{ suma: '€4', za: '100 g' }],
      ilustracia: 'pel',
    },
  ],

  okolieSekcia: {
    eyebrow: 'The region',
    titul: 'A day with us, a weekend in a land of wonders',
    sub: 'The meadow is the quiet centre of a region worth travelling: limestone caves, castle crags and mountains are all a short drive away. Turn one day into a whole weekend.',
    dlazdice: [
      {
        kod: 'UNESCO',
        nazov: 'Caves',
        text: 'The Dobšiná Ice Cave, the Ochtiná Aragonite Cave, Gombasek and Domica — World Heritage limestone wonders, each one different, all close by.',
        cena: 'UNESCO World Heritage karst',
      },
      {
        kod: 'History',
        nazov: 'Betliar & Krásna Hôrka',
        text: 'A manor house with a famous library and a castle on a crag — two afternoons of Gemer history.',
        cena: 'manor · castle · mining country',
      },
      {
        kod: 'Mountains',
        nazov: 'Slovak Paradise',
        text: 'The gorges, ladders and lookouts of the national park begin just beyond our woods.',
        cena: 'national park',
      },
    ],
    pozn: 'Košice and Poprad airports are both about an hour and a half away by car. We’re happy to advise what fits into a weekend — just write.',
  },

  kontakt: {
    email: 'lucnydedko@gmail.com',
    adresa: ['Upper Gemer', 'Slovakia'],
    hodiny: [
      ['Weekends', 'A Day on the Meadow and in the Woods (book ahead)'],
      ['Other days', 'By e-mail arrangement'],
    ],
  },
  kontaktSekcia: {
    eyebrow: 'Get in touch',
    titul: 'Write to us',
    sub: 'Best to write ahead — we’ll reply and arrange everything.',
    kartaEmailLabel: 'Write to us',
    kartaEmailHint: 'We usually reply within a day or two →',
    kartaKdeLabel: 'Where we are',
    kartaKdeHint: 'Exact meeting place after your date is confirmed',
    kartaTerminyLabel: 'Dates',
  },

  paticka: {
    note: 'Made with love in the countryside',
  },
};
