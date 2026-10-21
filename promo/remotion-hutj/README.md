# HUTJ — 15-second Remotion Ad

Editable **1080 × 1920 / 60 fps / 900-frame** vertical promotional animation for HUTJ. Inspired by the supplied continuous-flow ad concept: **no hard cuts**, one continuous animated composition, kinetic cards, transitions, terminal, local network, and a final GitHub CTA.

## Render

Requirements: Node.js 20+ and a working local Chromium/Remotion environment.

```bash
cd promo/remotion-hutj
npm install
npm run studio
npm run render
```

Output: `out/HUTJ-Ad-15s.mp4`. `out/` is ignored by Git.

## Timeline

- 0–2.2s: TV/AI cards collapse toward HUTJ brand
- 2.2–4.2s: Eight TV ecosystems animate in
- 4.2–6.7s: Codex / Claude Code and HUTJ skills
- 6.7–9.3s: Local LAN discovery visualization
- 9.3–12s: Inspect, plan, approval safety gate
- 12–15s: HUTJ hero and GitHub URL

## Language and assets

Arabic primary on-screen messaging and English translated subtitles are embedded as editable React text. No external logos, unlicensed music, or proprietary UI footage are included. All TV interfaces are **illustrative**; no real device operations are claimed.

**Audio:** This project currently renders a **silent MP4**. Add a licensed voiceover and soundtrack using Remotion `<Audio>` after supplying/recording the assets. The text cues are not automatically spoken. 

**CTA:** GitHub URL is displayed visually; MP4 links are not interactive. For a clickable link, add it to the social platform post or landing page.

## Files

- `src/HUTJAd.tsx`: editable scene choreography, animation and bilingual copy
- `src/root.tsx`: composition dimensions and duration
- `src/index.ts`: Remotion entry point

This project is independent of the HUTJ local TV skills runtime.
