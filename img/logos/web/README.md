# Related-site display assets

The three files in the parent directory are original artwork and remain unchanged.

- `nexta.svg`: embeds the original PNG unchanged; its SVG viewBox (`960 800 1590 1910`) removes the surrounding whitespace without resampling or redrawing the logo.
- `nexus.svg`: retains the original vector paths, with a presentation viewBox of `195 220 700 665` to remove surrounding whitespace.
- `roots.png`: byte-for-byte copy of the original 129 × 129 PNG. Displayed at no more than 100 CSS pixels to limit enlargement of the low-resolution source.

The page uses white logo panels so opaque and transparent artwork share the same background. Individual sizes in `css/style.css` balance their visual weight. No generated replacement artwork is used.
