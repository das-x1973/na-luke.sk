// ── Slovenský obsah stránky ──────────────────────────────────────────────
// Jediné miesto, kde sa upravujú slovenské texty. Anglická verzia žije
// v `en.ts` a TypeScript stráži, že má rovnakú štruktúru (typ Obsah).
// Markup a CSS sú spoločné v `src/components/Stranka.astro`.

export const sk = {
  lang: 'sk',
  locale: 'sk_SK',
  prepinac: { url: '/en/', label: 'EN', aria: 'English version' },

  farma: {
    nazov: 'Na Lúke',
    zalozene: '2009',
  },

  // „Apiterapia" žije v title/description/JSON-LD + jednej vete v texte pri
  // úľoch — nikdy ako názov programu či nadpis (nesľubujeme liečbu).
  seo: {
    // Kým rodina nerozhodne o viditeľnosti: false = vyhľadávače stránku
    // neindexujú (noindex). Po rozhodnutí prepnúť na true (v oboch jazykoch)
    // a vrátiť Sitemap riadok do public/robots.txt.
    indexovat: false,
    url: 'https://na-luke.sk/',
    titul: 'Na Lúke — apiterapia, lesný kúpeľ a meditácia na Hornom Gemeri',
    popis:
      'Deň na lúke a v lese s bývalým budhistickým mníchom: pomalá prechádzka lesom, meditácia a oddych pri úľoch (apiterapia). Horný Gemer, soboty a nedele, malé skupiny. Domov si odnesiete pokoj — a pohár medu.',
  },
  ldSluzbaPopis:
    'Poldenný program v malej skupine: lesná prechádzka (lesný kúpeľ), meditácia s bývalým budhistickým mníchom a oddych pri úľoch (apiterapia). Deti od 10 rokov.',

  nav: {
    odkazy: [
      { href: '#program', text: 'Program' },
      { href: '#o-nas', text: 'O Otovi' },
      { href: '#med', text: 'Med' },
    ],
    cta: { href: '#rezervacia', text: 'Rezervovať' },
    domovAria: 'Domov',
    menuAria: 'Menu',
    hlavneMenuAria: 'Hlavné menu',
  },

  hero: {
    eyebrowPred: 'Horný Gemer · Soboty a nedele · Od',
    titulRiadok1: 'Ticho, včely',
    titulSpojka: 'a ',
    titulAkcent: 'les.',
    lead:
      'Deň na lúke a v lese: pomalá prechádzka starým lesom, meditácia pod holým nebom a oddych pri úľoch. Domov si odnesiete pokoj — a možno aj pohár medu.',
    btnPrimarny: { href: '#program', text: 'Ako vyzerá deň' },
    btnSekundarny: { href: '#rezervacia', text: 'Rezervovať termín' },
    scrollText: 'Vojdite',
    scrollAria: 'Prejsť na program',
  },

  program: {
    eyebrow: 'Program',
    sub: 'Poldenný program v malej skupine — bez zhonu, bez mobilov, bez výkonov. Tri veci, ktoré spolu tvoria jeden pomalý deň.',
  },

  den: {
    nazov: 'Deň na lúke a v lese',
    zazitky: [
      {
        id: 'les',
        nazov: 'Lesná prechádzka',
        tag: 'Les',
        popis:
          'Pomalá chôdza starým lesom — bez ponáhľania a bez rečí. Les robí svoju prácu sám; niekde sa tomu hovorí lesný kúpeľ.',
        ilustracia: 'les',
      },
      {
        id: 'meditacia',
        nazov: 'Meditácia s Otom',
        tag: 'Ticho',
        popis:
          'Jednoduché sedenie a dych pod holým nebom. Vedie Oto, ktorý šesť rokov žil ako budhistický mních. Žiadna ezoterika — len ticho.',
        ilustracia: 'meditacia',
      },
      {
        id: 'ule',
        nazov: 'Oddych pri úľoch',
        tag: 'Včely',
        popis:
          'Vôňa úľa, teplo, bzukot — telo si oddýchne samo. K úľom sa nechodí povinne; dobre je aj z diaľky. Oddychu pri úľoch sa niekedy hovorí aj apiterapia.',
        ilustracia: 'ule',
      },
    ],
    priebeh: [
      { nazov: 'Prechádzka lesom', text: 'Začíname pomaly — cesta lesom, ktorá z hlavy vyvetrá týždeň.' },
      { nazov: 'Meditácia na lúke', text: 'Sadneme si do trávy. Oto vás prevedie jednoduchým sedením a dychom.' },
      { nazov: 'Oddych pri úľoch', text: 'Kto chce, príde bližšie k včelám. Kto nechce, počúva ich z deky.' },
      { nazov: 'Čaj, med a rozlúčka', text: 'Na záver čaj, chlieb s medom a rozhovor — ak naň bude chuť.' },
    ],
    info: [
      { kod: 'Kedy', nazov: 'Soboty a nedele', text: 'Doobedie, približne tri hodiny. Iný deň? Napíšte, dohodneme sa.', cena: 'od jari do jesene' },
      { kod: '2–6', nazov: 'Malá skupina', text: 'Chodíme v tichu a v malom počte — rezervácia vopred je nutná.', cena: 'súkromný termín pre vašu skupinu' },
      { kod: '10 €', nazov: 'Cena za osobu', text: 'Deti od 10 do 15 rokov za 5 €. Program je tichý a pomalý — deti od 10 rokov, v sprievode dospelého.', cena: 'platba v hotovosti na mieste' },
    ],
    dobreVediet: [
      'Sme na lúke, pri včelách a v lese — v živej prírode. Počas celej návštevy zodpovedáte za seba aj za svoje deti.',
      'Ak máte alergiu na včelie bodnutie, napíšte nám to vopred — k úľom sa nechodí povinne a program si užijete aj bez nich. Svoje lieky si nosíte so sebou; na mieste neposkytujeme zdravotnú pomoc.',
      'Presné miesto stretnutia pošleme po potvrdení termínu — sme v Hornom Gemeri, kúsok od hlavnej cesty.',
      'Pevné topánky a oblečenie do prírody sa hodia. Dážď program neruší — les je pekný aj mokrý.',
    ],
  },

  fotoLes: {
    aria: 'Les za lúkou',
    alt: 'Starý ihličnatý les vo večernom svetle',
    caption: 'Starý les za lúkou — tadiaľto vedie prechádzka.',
  },
  fotoMiestnost: {
    aria: 'Otova miestnosť ticha',
    alt: 'Drevená miestnosť s oltárom, obrazom Budhu a ručne maľovanými panelmi s kvetmi',
    caption: 'Otova miestnosť ticha.',
  },

  rezervacia: {
    eyebrow: 'Rezervácia',
    titul: 'Dohodnite si svoj deň',
    sub: 'Žiadny rezervačný systém — jeden e-mail stačí. Chodíme v malých skupinách, preto je termín vždy len váš.',
    kroky: [
      { nazov: 'Napíšte', text: 'Pošlite e-mail: koľko vás je, aký víkend by vám sedel a či má niekto alergiu na včelie bodnutie.' },
      { nazov: 'Dohodneme termín', text: 'Ozveme sa, doladíme deň a pošleme presné miesto stretnutia.' },
      { nazov: 'Prídete', text: 'Pevné topánky, pokoj v duši. Všetko ostatné je na nás.' },
    ],
    noticeTitul: 'Dobré vedieť',
    platbaLabel: 'Platba',
    platbaPred: 'V hotovosti na mieste — ',
    platbaStrong: '10 € dospelý',
    platbaPo: ', 5 € dieťa od 10 do 15 rokov.',
    platbaPozn: 'Žiadna záloha vopred. Ak vám do termínu niečo príde, jednoducho napíšte.',
    mailSubject: 'Rezervácia — Deň na lúke a v lese',
    btn: 'Rezervovať e-mailom',
  },

  oOtovi: {
    eyebrow: 'O Otovi',
    titul: 'Kým som postavil prvý úľ, prešiel som pešo pol sveta.',
    odseky: [
      'Pred vyše dvadsiatimi rokmi som vyšiel z Gemera a šiel som pešo — cez krajiny a hranice — až do Kórey. Šesť rokov som tam žil ako budhistický mních. Naučilo ma to jednu vec: keď sa neponáhľaš, všetko dôležité príde samo.',
      'Dnes žijem so ženou a synom na lúke pod lesom — a so včelami. Deň, ktorý u nás strávite, je kus tejto cesty: ticho, pomalá chôdza a úcta k niečomu väčšiemu, ako si ty sám.',
    ],
    fakty: [
      { v: 'Pešo', popis: 'z Gemera do Kórey' },
      { v: '6 rokov', popis: 'budhistickým mníchom' },
      { v: 'Od 2009', popis: 'so včelami na lúke' },
    ],
    fotoTitul: 'Fotografia Ota',
    fotoPozn: 'doplníme čoskoro',
  },

  medSekcia: {
    eyebrow: 'Z našej lúky',
    titul: 'Med si odnesiete domov',
    sub: 'Na konci dňa ochutnáte med rovno z našich úľov — a čo vám zachutí, kúpite na mieste. Med a peľ posielame aj poštou cez Packetu, po Slovensku a do Česka.',
    postouLabel: 'Objednávka poštou',
    postouText: 'Napíšte, čo a koľko — ozveme sa s poštovným podľa Packety. Platba prevodom alebo na dobierku.',
    qrIbanPred: 'Bankový prevod — IBAN',
    qrUcet: 'Účet:',
    qrSken: 'Alebo naskenujte QR kód v aplikácii svojej banky — údaje sa predvyplnia samy. Sumu doplňte podľa potvrdzujúceho e-mailu.',
    qrFallback: 'Platobné údaje pošleme v potvrdzujúcom e-maile.',
    mailSubject: 'Objednávka medu — Na Lúke',
    btn: 'Objednať e-mailom',
  },

  // Ceny a hmotnosti podľa telefonického zadania od farmy (jún 2026).
  produkty: [
    {
      id: 'lesny-med',
      nazov: 'Miešaný lesný med',
      tag: 'Med',
      popis:
        'Tmavý, hustý a plný chuti lesa. Stáčame ho do pohárov aj do väčších nádob — koľko potrebujete do špajze.',
      ceny: [
        { suma: '11 €', za: 'pohár 950 g (7 dcl)' },
        { suma: '50 €', za: '5 kg (3,5 l)' },
      ],
      ilustracia: 'med-tmavy',
    },
    {
      id: 'vceli-pel',
      nazov: 'Včelí peľ',
      tag: 'Z úľa',
      popis:
        'Čerstvý kvetový peľ priamo z úľa. Lyžička denne — malé zrnká plné energie z lúk.',
      ceny: [{ suma: '4 €', za: '100 g' }],
      ilustracia: 'pel',
    },
    // Vajíčka sú (zatiaľ) z webu dole — web je o včelách; na opätovné
    // zapnutie stačí odkomentovať (aj v en.ts).
    // {
    //   id: 'vajicka',
    //   nazov: 'Domáce vajíčka',
    //   tag: 'Z dvora',
    //   popis:
    //     'Od sliepok z voľného výbehu. Sýto oranžové žĺtka a škrupina, ktorá pozná len trávu, slnko a čerstvý vzduch.',
    //   ceny: [{ suma: '3,50 €', za: '10 ks' }],
    //   ilustracia: 'vajicka',
    // },
    // Mäso (hydina) je zatiaľ vypnuté — Oto ho na webe (zatiaľ) nechce.
    // Ilustrácie 'sliepka'/'kohut' aj ich štýly ostávajú pripravené v kóde.
  ],

  // Žiadne predávanie zájazdov — len poctivá geografia, prečo sa sem oplatí
  // prísť na celý víkend. (A semienka pre budúcu „Cestu na Lúku".)
  okolieSekcia: {
    eyebrow: 'Okolie',
    titul: 'Deň u nás, víkend v kraji zázrakov',
    sub: 'Lúka je tichý stred kraja, ktorý sa oplatí precestovať — vápencové jaskyne, hradné bralá a hory sú od nás na skok. Spravte si z jedného dňa celý víkend.',
    dlazdice: [
      {
        kod: 'UNESCO',
        nazov: 'Jaskyne',
        text: 'Dobšinská ľadová, Ochtinská aragonitová, Gombasek či Domica — vápencové zázraky svetového dedičstva, každá úplne iná a všetky na skok.',
        cena: 'kras zapísaný v UNESCO',
      },
      {
        kod: 'História',
        nazov: 'Betliar a Krásna Hôrka',
        text: 'Kaštieľ so slávnou knižnicou a hrad na brale — gemerská história na dve popoludnia.',
        cena: 'kaštieľ · hrad · banícky kraj',
      },
      {
        kod: 'Hory',
        nazov: 'Slovenský raj',
        text: 'Rokliny, rebríky, vyhliadky a modré kopce národného parku začínajú hneď za našimi lesmi.',
        cena: 'národný park',
      },
    ],
    pozn: 'Od letísk v Košiciach aj Poprade sme približne hodinu a pol autom. Radi poradíme, čo sa dá stihnúť za víkend — napíšte nám.',
  },

  kontakt: {
    email: 'lucnydedko@gmail.com',
    adresa: ['Horný Gemer', 'Slovensko'],
    hodiny: [
      ['Víkend', 'Deň na lúke a v lese (rezervácia vopred)'],
      ['Iné dni', 'Po dohode e-mailom'],
    ],
  },
  kontaktSekcia: {
    eyebrow: 'Ozvite sa',
    titul: 'Napíšte nám',
    sub: 'Najlepšie je napísať vopred — ozveme sa, dohodneme.',
    kartaEmailLabel: 'Napíšte nám',
    kartaEmailHint: 'Odpovedáme zvyčajne do dňa–dvoch →',
    kartaKdeLabel: 'Kde sme',
    kartaKdeHint: 'Presné miesto pošleme po potvrdení termínu',
    kartaTerminyLabel: 'Termíny',
  },

  paticka: {
    note: 'Vyrobené s láskou na vidieku',
  },
};

export type Obsah = typeof sk;
