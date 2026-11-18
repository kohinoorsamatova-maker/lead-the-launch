# Lead the Launch — five-situation edition

A self-contained HKU CCGL9079 leadership decision simulator and reflection activity (approximately 4–5 minutes).

## Open locally
Keep `index.html`, `styles.css`, and `app.js` in the same directory. Double-click `index.html` in a browser. No installation, account, backend, external images, or internet required.

Optional local server: from this folder run `python3 -m http.server 8000`, then open `http://localhost:8000`.

## Publish to GitHub Pages
Upload the four site files (`index.html`, `styles.css`, `app.js`, `README.md`) to the root of a public GitHub repository. In Settings → Pages choose Deploy from a branch → main → /(root). Wait for the published URL.

## Experience
Introduction → five scenario choices → employee reaction and culture consequence after each → leadership reflection and team-culture dashboard → review or replay.

Dominant A/B/C choice produces Inclusive/Empowering/Authoritarian; a tie for most frequent choices produces All-Rounded. No style is inherently superior. Culture dimensions (team voice, ownership, clarity, wellbeing) are illustrative deterministic scores, not scientifically validated measures. They are hidden during play and translated into labels at the end.

## Edit
All scenario text, employee reactions, outcomes, labels, thresholds, and score effects are in `CONTENT` at the top of `app.js`. Preserve A/B/C keys.

## Testing
With Node.js installed: `node tests.js`. The tests exercise all 243 complete five-choice paths, all reactions, result types, culture labels, decision review, and reset. Browser visual checks should also be performed on target devices.

## Design assets
The supplied AI artwork from `CCGL9079 multi-media (1).pdf` is included locally in `assets/`: scenario illustrations for chapters 1–4 and four leadership profile illustrations. Chapter 5 retains the existing CSS chapter motif because no corresponding illustration was supplied. No external assets are loaded.
