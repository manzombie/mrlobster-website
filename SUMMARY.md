# mrlobster.co.uk rebuild — summary

A complete rewrite of `index.html` turning the previous service/SaaS landing page into a character/world showcase for **Mr Lobster** — an interactive AI character and the star of the sitcom *What's Up Mr Lobster?*

The site is a static, single-page, zero-backend deploy. No databases, no APIs, no build step. The three live channels are plain outbound links to endpoints that already exist (a phone number, a WhatsApp number, and `meet.mrlobster.co.uk`). The page itself never fails, never depends on a runtime, and is fast enough to load on a phone over a holiday SIM.

## What changed

### Page structure

The old single column of service copy / pricing logos / lead form is gone. The new page reads:

1. **Sticky nav** — Mr Lobster logo + tagline + persistent Call / WhatsApp buttons (icon-only on mobile).
2. **Hero (`#top`)** — dark theatrical hero with circular Mr Lobster portrait, headline `Meet Mr Lobster.`, tagline `Always there. Never on holiday.`, and a character-led lead introducing him as an interactive AI character with three ways in.
3. **Talk to Mr Lobster (`#live`)** — the centrepiece: three equal cards (Call · Video chat · WhatsApp) in cream, video-chat tile centred so the portrait sits between the two glyph cards. Plain `target="_blank"` link to `meet.mrlobster.co.uk` with graceful degradation. Cards share size, weight, and visual prominence — no channel is featured over the others.
4. **The show (`#show`)** — dark section introducing *What's Up Mr Lobster?* with the pilot scene autoplaying muted/looped, the reality→fantasy premise in two short paragraphs (lifted from the bible), and a "one character, a whole universe" strip showing **set photos** for the five recurring fantasy formats (Holiday Mode, Lobster Late Night, Mr Lobster Enterprise, Jokes On Lobster, Lobster Time).
5. **The cast (`#cast`)** — five characters: Mr Lobster, Barry, Linda, Rupert, Lance Beaumont. Portrait + world chip (Reality / Fantasy / Reality + Fantasy gradient) + role + one bible-derived beat per card. **The Clam was deliberately dropped** at your request.
6. **How he's real (`#built`)** — non-salesy three-up capability strip: voice AI, WhatsApp agent, Runway character animation. Framed as "what went into making him real" — no pricing, no audience targeting, no "hire me" copy.
7. **Footer** — `Go on. Say hello.` closing CTA with all three channels repeated as buttons, in-page nav, privacy link, and a single subtle creator credit (`Built by Lukasz Bukowiecki` → `bukowiecki.co`).

### Brand / voice

- **UK English throughout.**
- Confident-but-weary 80s showman tone in headlines and quips; bible quotes used verbatim where they already carry the voice.
- **Brand rule applied:** the phrase "Red Lobster" never appears in customer-facing copy (avoids the US restaurant association).
- Palette: existing coral / navy / cream extended with neon accents (`#ff3aa0` pink, `#3ab5e0` blue, `#ffd23a` yellow) for the sitcom feel. Dark sections alternate with cream for rhythm. Subtle CRT-scanline overlay on dark sections.
- Fonts retained from the previous design: Fredoka One (logo / neon labels), DM Serif Display (headlines), Inter (body).

### SEO / OG

- New `<title>`, `<meta description>`, theme-color, JSON-LD `Person` for Mr Lobster.
- Open Graph + Twitter cards point at `assets/show/og-banner.png` — the neon `What's Up Mr Lobster?` X-banner with city skyline. Should preview strongly on LinkedIn / X / Slack.
- `lang="en-GB"`, `prefers-reduced-motion` respected (all animations disable cleanly), `loading="lazy"` on below-the-fold imagery.

### Repo housekeeping

- Folder is now a proper **git repository** (previously not versioned). Baseline of the old page captured as the first commit; the rebuild lives across five labelled steps (A through E) so you can `git log --oneline` to see the build sequence and `git show <hash>` to inspect any single step.
- Old draft variants left untouched in `archive/`. `privacy.html` left untouched. Lukasz's bio folder (`lukasz/`) left untouched.
- New asset folders under `assets/show/`:
  - `og-banner.png` — X banner (OG / Twitter card)
  - `titles/` — title cards (HD + 4K). HD versions referenced; 4K kept for future use.
  - `sets/` — set design stills used in the universe strip
  - `cast/` — character portraits (Barry, Linda, Rupert, Lance)
  - `video/scene1.mp4` + `scene1-poster.jpg` — pilot Scene 1, transcoded from the source `.mov` (12.9 MB → **1.6 MB**), audio stripped, H.264 + `+faststart` for fast browser start, poster frame for instant render before bytes arrive.

## Placeholders / asset items

The build is complete, but the following should be confirmed or filled in:

- [ ] **`meet.mrlobster.co.uk` behaviour.** The button is wired as a plain `target="_blank" rel="noopener"` external link. I deliberately did **not** add a JS health check — that would either need a backend (forbidden by the brief) or attempt a CORS-restricted fetch that would lie about the endpoint's real state. **Please confirm** that the meet subdomain currently serves something reasonable (a live video-chat session, a holding page, a "coming soon" card — anything that doesn't break or 404). If it 404s today, a one-page static placeholder there would close the loop without changing this site.
- [ ] **The 5 fantasy format cards in `#show`** currently link to `href="#"`. They're presented as a tease, not navigation. If you'd like them to point somewhere real (a YouTube playlist, individual format pages, the show's social handle), say where. If you want them de-linked entirely, swap `<a class="format">` for `<figure class="format">`.
- [ ] **Pruning 4K title cards** — only the HD versions are referenced. The 4K copies sit in `assets/show/titles/` adding ~weight to the deploy. Confirm before I delete them (saves a few MB, no downside if you don't need 4K on the public site).
- [ ] **Render/deploy wiring.** The site folder isn't itself a Render-configured repo — there's no `render.yaml`, no `package.json`. Whatever currently deploys to `mrlobster.co.uk` is pointing at this folder externally. If you'd like me to add a minimal `render.yaml` (static site, publish path = repo root, no build command) so the deploy is self-describing and reproducible, I can do that as a small follow-up.

## Decisions I made that you should sanity-check

1. **Cut the Clam from the public cast.** You said "no clam at all" — I removed the card *and* pruned the unused CSS, and saved a memory so future site work doesn't reintroduce it. The Clam still exists in the show bible; this is a public-site rule only.
2. **Universe strip uses set photos, not title cards.** Per your last instruction — replaces five neon title cards with the actual set renders so the world feels physically real, not just branded.
3. **Pilot scene autoplays muted with no unmute control.** Modern browsers block autoplay-with-sound; the encode strips audio entirely so there's no accidental sound regardless. The clip is ambient motion, not playback you interact with. Easy to add an unmute toggle if you want it.
4. **The Clam emoji approach was rejected** and the card removed entirely (see #1) — noted in case anyone proposes it again.
5. **`meet.mrlobster.co.uk` opens in a new tab.** Keeps the landing page intact while the video-chat experience runs separately. Also means if the endpoint is unreachable, the visitor still has the call / WhatsApp options on this tab.
6. **Page is fully UK-English** (`lang="en-GB"`, "WhatsApp", "fictional", phone formatting `+44 20 4572 7888`, etc.).
7. **No analytics / no cookies / no tracking scripts.** Nothing was on the old page either; I deliberately did not add any. If you want Plausible or similar, that's a one-line addition.
8. **The Clam's old image file in `/CHARACTERS/`** — there isn't one, which is consistent. No orphaned asset.
9. **Section anchor IDs** — `#live`, `#show`, `#cast`, `#built`. Footer in-page nav uses these. Stable for any future deep links you share on socials.
10. **The lead text now reads** *"An interactive AI character with a beige office job, a flat in town, and a fantasy life he keeps escaping into. He answers his own phone. He replies on WhatsApp. You can even have a video chat with him. Three ways in — he picks up."* — that's the elevator pitch for the whole site. Confirm it's what you want strangers to read first.

## Commit log

```
Step A     a9a287e  rebuild shell, nav, hero, minimal footer
Step A.1   ef19234  shrink hero portrait, rebalance grid, drop "red lobster" phrasing
Step B     12b6d29  live channels section (call / WhatsApp / video chat)
Step C     75aa3e0  "What's Up Mr Lobster?" show section + reorder channels
Step D     eeee5a0  cast section + swap universe strip from title cards to set photos
Step D.1   dd34179  drop the Clam from the cast lineup
Step E     <this>   capability strip + final footer + SUMMARY.md
```

Each step is a coherent, deployable state — you can roll back to any of them with `git checkout <hash>` if you want to compare.

## Hard constraints — checklist

- ✅ No services, packages, pricing, "who it's for," or sign-up/lead forms anywhere on the page.
- ✅ Static, no backend dependency. Three live channels are outbound `tel:` / `wa.me` / `https://meet.…` links.
- ✅ Mobile-first; semantic HTML; keyboard-focusable; good contrast; `prefers-reduced-motion`.
- ✅ Used only the brand/story facts in the show bible — no invented characters, plot, credits, or claims.
- ✅ OG + Twitter cards set up around the neon X banner for strong link previews.
- ✅ Existing tagline retained verbatim everywhere it appears.

— Built with [Claude Code](https://claude.com/claude-code).
