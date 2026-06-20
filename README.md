# Rodinná farma Oto 🍯🐓

Statická prezentačná webstránka pre malú rodinnú farmu — bio med, domáce
vajíčka a sviečky z včelieho vosku. Postavené na [Astro](https://astro.build).

## Spustenie

```bash
npm install      # raz, nainštaluje závislosti
npm run dev      # spustí lokálne na http://localhost:4321
```

Ďalšie príkazy:

| Príkaz            | Čo robí                                        |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Vývojový server na `localhost:4321`            |
| `npm run build`   | Vygeneruje statickú stránku do `dist/`         |
| `npm run preview` | Náhľad vygenerovanej stránky                   |

## Ako upraviť obsah

Takmer všetok text je na jednom mieste — v hornej časti súboru
[`src/pages/index.astro`](src/pages/index.astro), v objektoch:

- `farma` — názov farmy a rok založenia
- `produkty` — zoznam produktov (názov, popis, detail)
- `kontakt` — telefón, e-mail, adresa, otváracie hodiny

**Zatiaľ ide o ukážkové údaje** (telefón `+421 900 000 000`, e-mail
`ahoj@farmaoto.sk`, adresa `Dolná 12…`). Pred zverejnením ich nahraďte
skutočnými.

### Farby a písma

Definované ako CSS premenné v [`src/styles/global.css`](src/styles/global.css)
(sekcia `:root`) — stačí zmeniť hex hodnoty.

### Obrázky

Ilustrácie (pohár medu, vajíčka, sliepka…) sú kreslené priamo v kóde ako SVG,
takže nie sú potrebné žiadne externé súbory. Ak budete chcieť pridať skutočné
fotky, vložte ich do priečinka `public/` a odkážte na ne cez `/nazov.jpg`.
