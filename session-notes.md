# Jackson Veterinary Clinic — Session Notes

**Status:** Brand foundation locked + Team page built (3 members). Homepage build still awaiting Alie's copy.
**Created:** 2026-05-27 | **Last worked:** 2026-06-01
**Designer:** Brees
**Repo:** `digital-brees/jacksonveterinaryclinic` (to be created)
**Local path:** `C:\Users\brees\Claude Projects\Jackson Veterinary Clinic`

---

## Client Snapshot

- **Practice:** Jackson Veterinary Clinic
- **Location:** 369 East 2nd Street, Jackson, GA (Butts County)
- **Owner:** Dr. Andy Burdette
- **Phone:** 770-775-5710
- **Hours:** Monday–Friday, 8am–6pm
- **Email:** andy@jacksonveterinaryclinic.net
- **New domain (active):** `jacksonveterinaryclinic.net` (via Google)
- **Old domain (in dispute):** `jackson-vet.net` — stuck with Dr. Multimedia, transfer delayed since March, extra fees being demanded. Brees to assist with transfer / CC Andy on emails.
- **Online pharmacy:** `jacksonveterinaryclinic.ourvet.com` (VetCove)

---

## The Story (this drives the whole design)

Three generations of community service in one small Georgia town:

1. **1981** — Dr. Alan Burdette moves his family from Macon to Jackson, opens Jackson Veterinary Clinic
2. **1997** — Son Andy leaves Jackson for West Point. Becomes an Army officer, deploys to Iraq in combat
3. **2018** — Andy returns home to Jackson after 20+ years away
4. **Nov 2023** — Andy purchases the practice from his dad. Dad still works Tue–Thu (surgery Tue/Thu, exams Wed).

His parents still live in the same house they bought in 1981. Some of his current clients were once his classmates and teachers.

**Themes to carry through the design (per Andy):**
- Hometown roots
- Military service & character
- The human-animal bond
- Family legacy / genuine return to give back

The tone should be warm, personal, community-oriented. **Never corporate.**

---

## Design Direction (from onboarding call 2026-05-15)

- **Dark theme** — Andy specifically asked for dark-themed, functional, non-generic. Not the typical bright/airy vet site.
- **Keep the navy logo** — Established 1981, there's real heritage in it. Don't redesign.
- **Functional, non-generic** — emphasis on substance over decoration.

**Color palette:** LOCKED — extracted directly from the 1981 logo. Tokens in `assets/css/tokens.css`.
- Ink Navy `#082838` (logo disc) — page base / anchor
- Sand `#C0B8A8` (logo inner circle) — warm neutral / secondary text
- Saddle Copper `#C88858` (shepherd's coat) — primary accent / CTA
- Tan Highlight `#E0C0A0` — warm detail / hover
- Warm White `#F2EEE6` — primary copy on dark
- Dark surface ramp (navy-tinted): `#04161F` / `#082838` / `#0A2E40` / `#0D3548` / `#123F54` / `#1A4E63`

**Typography:** LOCKED — logo-matched (revised 2026-06-01; supersedes the earlier Caslon "Heritage" pick).
- Display/headlines: **Barlow Semi Condensed** (700, 800) — bold condensed geometric grotesque that matches the logo wordmark ("JACKSON VETERINARY CLINIC" / "EST. 1981"). **Headlines are sentence case**; the header/footer wordmark is uppercase to echo the mark.
- Accent (pull-quotes, monograms): Barlow Semi Condensed (600, upright — no longer serif italic).
- Body/UI: **Public Sans** (unchanged — neutral American sans, pairs cleanly with the grotesque display).
- Vars in `assets/css/tokens.css`: `--font-display`, `--font-accent`, `--font-sans`.
- **Why the change:** Brees disliked the Caslon serif and wanted headlines to match the logo lettering. Compared 3 logo-matched grotesques (`type-compare.html`): Barlow Semi Condensed (chosen), Archivo, Anton.
- HISTORICAL: `brand-foundation.html` still documents the original Caslon "Heritage" exploration (Direction A vs B Zilla Slab) — kept as a record but NOT the current type system.

---

## Services

**To include:**
- General/preventive care (standard small animal)
- Surgery (Dr. Alan's specialty — surgery Tue/Thu)
- **Echocardiograms** ← NEW, explicitly add this
- Standard diagnostics
- Online pharmacy via VetCove

**To remove:**
- Health certificates (not offered)

**Booking model:**
- **No online booking.** Use an **appointment request form** instead.
- Forms to digitize: anesthesia consent, new client form

**Pricing:**
- **Transparent pricing page** is a priority for Andy. The `Pricing Page` doc in Drive is empty — pricing content to come from Andy. Pattern lifted from Helping Paws or PVS pricing pages may be a useful starting frame.

---

## Copy Mode

**Current:** WAITING on Alie. Homepage copy doc not yet in Alie's `Homepage Copy` folder.

**Already provided (verbatim — use as-is, do not alter):**
- ✓ Dr. Andy Burdette bio — `assets/copy/dr-andy-bio.md`
- ✓ Dr. Alan Burdette bio — `assets/copy/dr-alan-bio.md`

**Andy's outstanding action items:**
- Send extended bio (local roots + military background) — partially covered by Andy bio doc
- Review portfolio examples for design direction
- Provide forms for digitization (anesthesia consent, new client form)

**Brees' outstanding action items:**
- Send recap email + design milestones timeline
- Assist with domain transfer — CC Andy on Dr. Multimedia emails

---

## Sitemap

**Not yet confirmed.** Likely candidates based on onboarding:
- `index.html` — Homepage
- `about.html` or `our-story.html` — Hometown/legacy narrative (Andy's story is the gravitational center)
- `team.html` — Dr. Andy + Dr. Alan featured, room for techs/staff later
- `services.html` or service hub + individual service pages — TBD
- `pricing.html` — Transparent pricing (priority)
- `appointment-request.html` or contact form — Replaces traditional booking
- `contact.html` — Hours, address, phone, map, after-hours info
- `new-client.html` or new-client form

Confirm full sitemap with Brees + Andy before building.

---

## Assets

### Drive folder (master)
**ID:** `1St8IOSyVUf534cQr4rYjV6UaGWQi0RTv`
**URL:** https://drive.google.com/drive/folders/1St8IOSyVUf534cQr4rYjV6UaGWQi0RTv
**Owner:** onboarding@digitalempathyinc.com
**Parent:** Brees' Accounts folder (`1fs2EH4_pGgllIdld9HJQtqG3UJWLt4hg`)

### Subfolders

| Folder | ID | Contents |
|---|---|---|
| Logo | `1Owphj0DIKA-8jLrkcxKc5CS6lrCkLIyf` | `JVC_Primary_FullColor_Logo_CMYK.ai` (vector) |
| Dr Andy | `1XVk3TgUmfhAigDPu1l98v1pbpbaGyFZd` | Andy bio (.docx), `Andy_0010_Original.jpeg` portrait, `MAR 05 in Iraq 033.jpeg` military photo |
| Team Page Photos | `1YebAuoqGWhuUrbVsJZ4OUrhoRH655-4d` | `DRALANBURDETTE.JPG` (by Chris Moncus Photography), Dr. Alan bio (.pdf) |
| Candid Practice Photos | `1VpbnvWGWF_xtw6Lgeywz2lxMZmh6B-mk` | EMPTY — need to request from Andy |
| Forms | `1Y3tHI417-3AozgBRUhW7DcHlER-TzGQM` | EMPTY — Andy to provide anesthesia consent + new client form |

### Drive docs (master copies)

| Doc | ID | State |
|---|---|---|
| Pricing Page | `1cGJDUUsSk5qTthLWWUrtOr1IOdAJGEkIy_BG4StYGWI` | EMPTY |
| Team Page | `1ZG-j3M_tg25qnCWfjJ13aOK8Qh-8IFPmzjtGYVeMSxk` | Template example only (Willow Creek bio) — no real Jackson bios yet |

### Locally saved
- `assets/copy/dr-andy-bio.md` — full Andy narrative
- `assets/copy/dr-alan-bio.md` — full Alan bio
- `assets/logo/` — logo converted from Drive .ai (2026-06-01):
  - `JVC_Primary_FullColor_Logo_CMYK.ai` (original vector, downloaded)
  - `logo-full.png` (3200px transparent master) + `logo-full.svg` (vector)
  - `logo-badge.png` (tight-cropped transparent badge)
  - `logo-plate.png` (full-color badge on cream coaster — **use this on dark header/footer**)
  - `_make_plate.py` (Pillow script that built the plate)
- `assets/css/tokens.css` — design tokens (palette, dark ramp, type scale, radius, spacing)
- `assets/images/` — EMPTY, portraits still in Drive

---

## Forms Plan (per DE JotForm Standard)

Per `~/.claude/projects/C--Users-brees/memory/jotform-integration.md`, every form on this site goes through JotForm. Forms identified so far:

1. **Appointment Request Form** (replaces online booking)
2. **New Client Form**
3. **Anesthesia Consent Form**
4. **General Contact Form** (likely on contact.html)

**Title format:** `Jackson Veterinary Clinic - {Form Name}`
**Business email for notifications + reply-to:** TBD (likely `andy@jacksonveterinaryclinic.net` or a forms-specific address)
**Sender name on autoresponder:** `Jackson Veterinary Clinic`

Forms cannot be marked complete until manual JotForm dashboard steps are done (sender name + Attach PDF toggle + filing). See playbook for full checklist.

---

## Color System — Logo-Locked (audited 2026-06-01)

All color lives in `assets/css/tokens.css`, extracted from the 1981 logo. team.html references tokens; every gradient/overlay uses logo-derived rgba (navy 4,22,31 / 6,30,43 / 8,40,56 · copper 200,136,88 · sand 192,184,168). Only neutral `rgba(0,0,0,…)` drop-shadows are non-brand (shadows, not color). **Copper buttons use navy text (`--ink-900`)** — the logo's two signature colors paired, and AA-legible (white-on-copper fails contrast). Any new page MUST pull from tokens.css — no ad-hoc hex.

## Key Decisions / Rationale

- **Dark theme** — Per Andy. Differentiates from generic vet sites. Aligns with the "service and substance" tone (military discipline, family legacy).
- **Keep existing navy logo** — Heritage from 1981. Don't touch.
- **No online booking** — Practice preference. Appointment request form goes through staff for personal touch.
- **Transparent pricing** — Stated priority for Andy. This may be a USP vs. competitors.
- **Hometown narrative front and center** — Andy's military-to-vet-to-hometown arc is the strongest differentiator. Lead with it.

---

## Open Questions / Blockers

- ⏳ Alie's homepage copy doc — must land before page build
- ✅ Logo .ai → web format conversion (done 2026-06-01)
- ✅ Brand color palette (done — locked from logo)
- ✅ Typography pairing (done — Direction A Heritage)
- ⏳ Sitemap confirmation
- ⏳ True single-color white knockout logo — cream-plate solves dark-bg need; request a 1-color/white variant from Andy's brand kit if he has one
- ⏳ Real practice photos (Candid Practice Photos folder is empty)
- ⏳ Pricing data — Pricing Page doc is empty
- ⏳ Forms to digitize from Andy
- ⏳ Domain dispute resolution with Dr. Multimedia (separate ops track)

---

## Session Log

### 2026-06-01 — Team page built (Brees)
- Built `team.html` on the locked design system (dark navy, Caslon + Public Sans, copper CTA). Self-contained; establishes the site's sticky header + footer pattern (nav links to Home/Our Story/Services/Team/Pricing/Contact are placeholders `#` except Home/Team).
- Structure: hero ("The family behind the front door.") → legacy band → **two-up "Our Doctors" cards (Andy + Alan)** → team grid (Natalie card + "Room to grow" ghost/careers card) → request-appointment CTA band → footer (NAP, hours, VetCove pharmacy link, "Designed by Digital Empathy").
- **REVISED 2026-06-01:** Brees found the two full-bleed doctor profiles too large/top-heavy. Replaced them with compact two-up doctor cards (`.doctors`/`.dcard`): portrait + eyebrow + short intro + chips + "Read full bio" button. Full bios (Andy + Alan) moved into the bio modal (`BIOS.andy`, `BIOS.alan`); **Andy's Iraq photo now lives inside his modal** with the "redirected it" pull quote. Old `.feature`/`.f-*`/`.inset` CSS removed. Everyone on the page is now card-based + consistent.
- **Doctor bios** condensed/adapted for web from the verbatim source bios (Andy's bio doc explicitly permits adapting for flow/length). Pull quotes: Andy "He didn't leave service behind…", Alan "Retirement isn't really in Dr. Alan's vocabulary."
- **Andy portrait turned out to be his West Point cadet photo** — used as the main feature image; reinforces the military theme. Iraq photo used as a framed inset with caption "Overseas · Iraq, 2005".
- **Natalie** (Licensed Veterinary Technician): card + "Read full bio" modal. Bio saved to `assets/copy/natalie-bio.md`. ⚠️ Source bio said "Willow Creek Animal Hospital" (changed to Jackson on page) and "Cedar Falls / eastern Iowa" origin — FLAGGED for Brees to confirm with Natalie. No photo yet → styled sand monogram "N" placeholder.
- **Images** (`assets/images/`): `dr-andy.jpg` (684×984) + `dr-andy-iraq.jpg` (1600×1200) downloaded from Drive & optimized (q88). `dr-alan.jpg` (1067×1600, 367KB) — Brees provided it manually (MCP download choked on the 7.6MB original; metadata worked but the base64 payload exceeded the connector cap). Optimized from `~/Downloads/DRALANBURDETTE.JPG`. All three real photos now live on the page; monogram fallbacks (`onerror`) remain as a safety net.
- **Hero video added** (`assets/video/hero.mp4`, 3.9MB + `hero-poster.jpg`): full-bleed autoplay/muted/loop/playsinline background, navy left-weighted gradient overlay for text legibility, poster + prefers-reduced-motion fallback (shows poster still). Replaced the old gradient/"1981" watermark hero. **PLACEHOLDER footage** — Pexels clip #5323735 (German Shepherd heading up a golden-hour rural path; GSD ties to the logo, "path home" matches Andy's story). Swap for real Jackson footage when the Candid Practice Photos folder is populated. Runner-up: Pexels #5394632 (person walking a GSD).
- **CTA band background image** added (`assets/images/cta-bg.jpg`, 1600×1067, 281KB): Pexels #30452839 — golden-hour German Shepherd resting on a path (ties to logo dog + hero mood). Layered under a navy veil + copper top-glow for text legibility (`background-image` stack on `.cta`). PLACEHOLDER — swap for real Jackson imagery later. Runner-up: Pexels #969383 (K-9 Unit shepherd, service nod).
- Verified desktop + mobile via Playwright (screenshots in `assets/screenshots/`). Only console errors are benign 404s (favicon).
- **Committed & pushed 2026-06-01** to `digital-brees/jacksonveterinaryclinic` (main).
- **TODO next:** confirm Natalie's hometown (Willow Creek/Iowa flags) + get her photo; swap placeholder hero video + CTA image for real Jackson footage; add favicon; wire real nav/links as other pages get built.

### 2026-06-01 — Brand foundation (Brees)
- Confirmed Alie's homepage copy still NOT in Drive (master folder unchanged since setup) — homepage build remains blocked
- Downloaded logo `.ai` from Drive, converted via PyMuPDF → `logo-full.png` (3200px) + `logo-full.svg`
- Extracted real brand colors from the logo via Pillow → built `assets/css/tokens.css` (palette + navy-tinted dark surface ramp + fluid type scale + spacing/radius)
- Built `brand-foundation.html` brand board: logo, palette swatches, surface ramp, and 2 typography directions rendered in context
- **Brees locked Direction A "Heritage"**: Libre Caslon Display + Libre Caslon Text + Public Sans (federal typeface = subtle military nod)
- Generated `logo-plate.png` (full-color badge on cream coaster) for use on the dark header/footer

### 2026-05-27 — Project setup
- Pulled onboarding context from Granola MCP (May 15, 2026 onboarding call)
- Inventoried Drive folder, recorded all subfolder + doc IDs
- Saved Dr. Andy + Dr. Alan bios locally as markdown
- Created project folder, git repo, GitHub repo `digital-brees/jacksonveterinaryclinic`
- Scaffolded with `index.html` stub, `robots.txt` (block), `robots.production.txt` (allow), session-notes.md
- Confirmed `noindex` meta tag on index.html stub for preview safety
- HOLD on page build until Alie's homepage copy lands
