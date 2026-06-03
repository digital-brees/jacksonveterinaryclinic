# Jackson Veterinary Clinic — Session Notes

**Status:** Brand foundation locked + Team page built + Services hub (image-led cards) + Dental spoke fully redesigned (tight palette, beige band, distinct icons, depth pass, 2026 motion layer, warm hero). Palette corrected to the TRUE logo navy `#0F283D` + copper `#C88C5F`. **Social icons (FB + IG) now in header + footer on all 3 pages; nav button text fixed to navy; team hero + CTA imagery refreshed.** Homepage build still awaiting Alie's copy.
**Created:** 2026-05-27 | **Last worked:** 2026-06-03
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

**Color palette:** LOCKED — extracted directly from the 1981 logo. Tokens in `assets/css/tokens.css`. (Navy + ramp + copper CORRECTED 2026-06-02 — sampled the logo art; old `#082838`/`#C88858` were slightly off.)
- Ink Navy `#0F283D` (logo disc, sampled) — page base / anchor
- Sand `#C0B8A8` (logo inner circle) — warm neutral / secondary text
- Saddle Copper `#C88C5F` (shepherd's coat) — primary accent / CTA
- Tan Highlight `#E0C0A0` — warm detail / hover
- Warm White `#F2EEE6` — primary copy on dark
- Dark surface ramp (re-anchored on the true navy): `#0A1E2E` / `#0F283D` / `#143447` / `#193C50` / `#21485C` / `#2B5468`

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

### Earmarked media (not yet downloaded — pull when the page is built)
- **Surgery spoke hero video** → Pexels `https://www.pexels.com/download/video/7584599/` (Brees-chosen, 2026-06-03). Download + ffmpeg-compress to 1920px/faststart/no-audio like the other heroes when building `surgery.html`.

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

### 2026-06-03 — Feedbucket widget added to preview (Brees)
- Added the **Feedbucket** client-feedback script to `<head>` on all 5 pages (index, team, services, dental-care, wellness-preventive-care). Key: `WVqHB42r4QIPaLzRa5k1`. Marked "preview only" in a comment.
- ⚠️ **Launch checklist:** remove the Feedbucket script before going live (staging/review tool, not for the public site).

### 2026-06-03 — Vercel preview: Team is the temp index (Brees)
- **Issue:** Vercel link showed a blank page — root `/` serves `index.html`, which was the empty placeholder stub (real homepage not built, awaiting Alie's copy).
- **Fix:** **`index.html` is now a copy of `team.html`** (Team page serves at the root) per Brees. First tried a redirect → /services.html, then switched to Team-as-index. `noindex` retained.
  - ⚠️ **Duplication:** `index.html` and `team.html` are now identical. Edits to the team page must be mirrored to `index.html` (or re-copy) until the real homepage replaces `index.html`.
- **Deploy mechanism = Git push** (repo is GitHub-connected to Vercel — the stub deployed on push, proving auto-deploy). NOT CLI-linked locally (no `.vercel/`); do not `vercel` from the folder or it'll spawn a separate project.
- Built pages also directly reachable: `/services.html`, `/team.html`, `/dental-care.html`, `/wellness-preventive-care.html`.

### 2026-06-03 — Wellness spoke built + nav/footer demo-gating (Brees)
- **Built `wellness-preventive-care.html`** — 2nd spoke on the dental mold. Sections: hero ("A lifetime of healthy years.") → overview ("Care that looks ahead." — verbatim Wellness Exams copy) → quote moment (verbatim Preventative Care line) → beige feature band (Wellness Exams · Vaccinations · Parasite Prevention · Nutritional Counseling, distinct icons) → lower section (Microchipping + "how often to visit", verbatim) → CTA. Updated title/meta/Service JSON-LD. Hub "Learn more" already pointed here.
- **Copy fidelity:** body paragraphs verbatim from jacksonvet.net; headlines/subheads ours (same convention as dental).
- **Unique media (no duplicates anywhere on site):** `wellness-hero.mp4` (slow-mo cat being petted, hflipped so the head clears the left-aligned headline, 2.1MB) + poster; `wellness-overview.jpg` (calm dog at home); `wellness-cat.jpg` (woman petting cat by window); `wellness-cta-bg.jpg` (Border Collie, golden field). Earlier drafts reused services-hero/svc-wellness/svc-cta-bg — all replaced per Brees ("no duplicate images").
- **Services nav → dropdown (all 4 pages):** Services label still links to `services.html`, with a hover submenu: **Wellness & Preventive Care** + **Dental Care**. Current spoke highlights copper in the submenu.
- **Demo-gating — only Team / Services / Dental Care / Wellness navigate.** Everything unbuilt is dimmed + non-clickable via `a.soon` (pointer-events:none, opacity .45): **Home** (nav + footer), **Resources → Forms/FAQs**, **Contact**, **FAQs** (footer), **Our Story**.
  - **Home fully disabled** (per Brees — index.html is still a stub): nav link dimmed, **logo href removed** (logo no longer navigates), footer Home removed.
  - **Request Appointment buttons no longer navigate** (per Brees — appointment form not built): nav button, hero button, and bottom-CTA button on every page converted to `role="button" aria-disabled onclick="return false"`. Kept full copper styling (still read as primary CTA), just unwired — ready for JotForm later.
- **Footer Explore rebuilt (all 4):** Team · Services · FAQs (dimmed) · **Online Store** (renamed from "Online Pharmacy", external VetCove). (A separate in-content "Online Pharmacy" link on services.html remains functional.)
- **Services CTA image** added earlier this session (`svc-cta-bg.jpg`, owner+dog rural dusk) + **Instagram icon** bumped to 30px/18px in the utility bar for legibility.
- **Spokes built: 2 of 11** (dental-care, wellness-preventive-care). 9 remain. Surgery hero earmarked: Pexels #7584599.
- **STILL the top cleanup:** header/footer/utility-bar/motion/soon CSS now duplicated across 4 pages — extract shared `assets/css/site.css` before the next spokes.

### 2026-06-03 — Two-tier header + finish pass + card depth (Brees)
- **Header rebuilt as a two-tier system** (all 3 pages) — the single overloaded row was too tight. Now: a **slim utility bar** (phone · hours on the left; Online Store + FB/IG on the right) above the **main nav** (logo + Home/Team/Services/Resources▾/Contact + Request Appointment). Online Store + phone + social all moved OUT of the main row into the utility bar.
  - Mobile: utility bar keeps phone (left) + social (right); hours/dividers/store hidden; **Online Store added to the slide-in menu** via a `.m-only` link so no link is lost.
- **Utility bar is sticky** — removed the collapse-on-scroll; since `header` is `position: fixed`, the bar now stays pinned at the top. (Earlier draft collapsed it on scroll — reverted per Brees.)
- **Flush to top** — dropped the header's top padding (`18px → 0`, now `padding: 0 0 18px`; scrolled `0 0 10px`) so the utility bar sits flush against the viewport top. Logo breathing room preserved via `.nav { padding-top: 18px }` (12px scrolled).
- **Full finish pass** (so it reads as a designed system, not floating text):
  - Utility bar = defined strip: translucent `rgba(10,30,46,.55)` over the hero, solid `--ink-950` on scroll (distinct from the `--ink-900` nav tier).
  - **Copper hairline** divider under the bar (`rgba(200,140,95,.30)`).
  - Thin **vertical dividers** (`.util-divider`) between phone│hours and Store│social (replaced the old `·` dot).
  - "ONLINE STORE" uppercase + letter-spacing; wider nav gap (30px).
  - **CTA button finish:** soft drop shadow + an **arrow (→)** that nudges on hover; navy text retained.
- **Depth / anti-blend fix** (Brees: "at certain points it all blends together"):
  - Team cards (`.card`) + doctor cards (`.dcard`) were on a gradient that **faded into the page-base `--ink-900`** with a faint border → lower edges dissolved. Moved both onto the proper elevated **`--ink-800`** surface, added a **resting drop shadow**, and switched to `--line-strong` border (copper on hover).
  - **Scrolled header** now casts a real drop shadow (`0 16px 36px -18px rgba(0,0,0,.6)` + hairline) instead of a 1px line, so content separates from it on scroll. (All 3 pages.)
- **Still duplicated across 3 pages** (header markup + utility-bar CSS + finish + depth) — the shared `assets/css/site.css` extraction is now well overdue and is the recommended next step before building the remaining 9 service spokes.

### 2026-06-03 — Social icons + nav button fix + media refresh + dental badge (Brees)
- **Social icons (Facebook + Instagram) added to header + footer on all 3 pages** (team / services / dental-care). Links: FB `https://www.facebook.com/JVCGeorgia`, IG `https://www.instagram.com/jacksonvetclinic/`. Header = bare circular icon links beside the phone/CTA (warm-white `--text`, 19px, subtle sand hover disc, copper-bright on hover, underline suppressed). Footer = bordered `.fsocial` circles under the brand blurb (sand icon → fills copper w/ navy glyph on hover). Both use solid glyphs (FB 'f', Simple-Icons IG).
- **Instagram icon visibility fix:** header icons were `--text-soft` (sand) at 16px and the IG glyph read faint vs the FB 'f'. Bumped to `--text` (warm white) at 19px + hover disc — both now read clearly.
- **Header CTA button text fixed to navy:** root cause was a cascade bug — `.menu a` (sand, specificity 0,1,1) was out-specifying `.btn { color: var(--ink-900) }` (0,1,0), so the nav "Request Appointment" button rendered sand/light while the in-page CTA buttons stayed navy. Added `.menu a.btn { color: var(--ink-900); }` on all 3 pages.
- **Team hero video swapped** → Pexels #20337634, ffmpeg-compressed to 1920px / 30fps / no-audio / faststart = **2.0MB** `assets/video/hero.mp4` + regenerated `hero-poster.jpg`. (Replaced the earlier #6568960 swap from the same day.) Paths unchanged so no HTML edit.
- **Team CTA background → cat:** replaced the golden-hour GSD (`cta-bg.jpg`) with a warm golden-hour tabby profile (Pexels #11767263, 1600px, 126KB) to balance the dog hero (logo = dog + cat). Repositioned the image layer to `40% 46%` (was `center 32%`) so the face/lit-whiskers sit in the band instead of cropping at the ears. Navy veil + copper top-glow overlay unchanged.
- **Modal bio scroll fixed (team):** bios already had `overflow-y:auto` but Lenis was hijacking the wheel. Added `data-lenis-prevent` to `.modal-card` (canonical Lenis fix) — modal scrolls natively, page stays locked.
- **Removed the "Room to grow" ghost/careers card** from the team grid. `.card.ghost` / `.btn-ghost` CSS left in place but now unused (strip during the shared-CSS extraction).
- **Dental badge redesign:** the flat copper rectangle "Healthy mouth, happy pet" → copper **gradient** badge w/ inner top highlight, softer layered shadow, and a **tooth icon** in a tinted navy disc (`.b-ico`). Markup gained the icon span; copy unchanged.
- **Earmarked media:** surgery spoke hero → Pexels #7584599 (download + compress when `surgery.html` is built; noted under Assets ▸ Earmarked media).
- **Reminder:** header/footer/nav/social/motion are now duplicated across all 3 pages — the shared `assets/css/site.css` extraction is increasingly overdue before building the remaining 9 spokes.

### 2026-06-03 — Motion propagated to services+team + new nav (all pages) (Brees)
- **2026 motion layer propagated to `services.html` + `team.html`** (was dental-only): Lenis smooth scroll (CDN) + in-page anchor easing, hero parallax (video scale / hero copy drift+fade via `.hero .wrap`), refined blur-rise reveals, magnetic buttons, animated nav underlines. Team's bio modal pauses Lenis via a MutationObserver on `#modal.open`. NO custom cursor (Brees removed it). All gated behind `prefers-reduced-motion` + touch. (Image scroll-parallax / `.media-frame` is still dental-only — services cards already have hover zoom; team has flip cards.)
- **New nav (all 3 pages):** Home · Team · Services · **Resources ▾** (Forms / FAQs dropdown) · Online Store · Contact · **phone 770-775-5710** (copper icon) · [Request Appointment]. Dropped "Our Story" + "Pricing" from nav. Resources dropdown = CSS hover/`:focus-within` panel on desktop, expands inline-indented on mobile. Online Store → VetCove `https://jacksonveterinaryclinic.ourvet.com` (new tab). **Forms/FAQs/Contact = `#` placeholders** (pages not built yet — wire when built). Active link uses the animated copper underline. Underline suppressed on submenu links + phone.
- Nav fits one line at 1440 (menu gap tightened to 24px). Burger breakpoint still 860px.
- **Still TODO:** extract shared `assets/css/site.css` (header/footer/nav/motion now duplicated across 3 pages — getting heavy); build Forms/FAQs/Contact pages + wire nav; remaining 9 service spokes; real Jackson photos/video; JotForm.

### 2026-06-02 — Services image cards + dental full redesign + palette correction + 2026 motion (Brees)
- **Palette corrected to the TRUE logo colors (`tokens.css`, affects ALL pages):** sampled the 1981 logo disc — real navy is `#0F283D` (old `#082838` was too dark/green). Updated `--ink-900` and re-anchored the dark ramp: `--ink-950 #0A1E2E` · `--ink-850 #143447` · `--ink-800 #193C50` · `--ink-700 #21485C` · `--ink-600 #2B5468`. Copper → **`#C88C5F`** per Brees. copper-bright/deep unchanged. NOTE: a few hardcoded `rgba(200,136,88,…)` tint/`rgba(4,22,31,…)` scrim values in page CSS were NOT mass-updated (subtle, low-alpha) — fine for now.
- **Sticky header → solid logo navy:** `header.scrolled` now `background: var(--ink-900)` opaque (dropped frosted blur). Applied to dental, services, team.
- **Services hub (`services.html`) — image-led cards:** killed the flat gradient+border "glass boxes" (AI tell). Each card now leads with a real photo (3:2) on a solid `--ink-800` card, soft shadow, hover lift + image zoom. Removed the 01–11 numbers (read as a finite list). Balanced cat/dog imagery (logo = dog+cat): cats on Senior/Diagnostics/Echo/Dermatology/End-of-Life; dogs on Wellness/Puppy&Kitten/Dental/Laser/Emergency; Surgery = instruments. Pexels placeholders `assets/images/svc-*.jpg` (+ reused `dental-dog.jpg`). Swap for real Jackson photos later.
- **Dental spoke (`dental-care.html`) — major redesign:**
  - Removed ALL glass boxes + the copper `border-left` AI tell (feat + callout cards → solid, no border).
  - **Beige band:** "Complete dental care" feature section uses `--sand` bg + `--paper` cards + navy text = the reusable light-section pattern. Distinct icons per card (sparkle / magnifier / tooth / gift) — were all identical checkmarks.
  - **Tightened colors:** one dark (`--ink-900`) everywhere, ONE beige band, `--ink-950` only in footer; removed copper radial glows.
  - **Hero text left-aligned** (fixed `.wrap` content-width centering bug, same as team).
  - **"Planning the visit"** = cat photo (layered: deep shadow + offset copper panel) + "What to expect" + When/Before items. Added a cat (tabby yawn `dental-cat.jpg`) → page balances dog-top / cat-bottom.
  - **Quote moment** moved UP to right after the intro; centered compact pull-quote (copper mark + centered quote + copper-accent parenthetical + centered rule). Copy verbatim.
  - **CTA** = full-bleed bg image (`dental-cta-bg.jpg`, rural dusk) under a navy veil.
  - **Depth pass (anti-"google slide"):** film-grain overlay on the navy, deep image shadows, elevated cards.
  - **2026 motion:** Lenis smooth scroll (CDN) + anchor easing, hero parallax (video scale / copy drift+fade), native scroll-timeline image parallax, blur-rise reveals, magnetic buttons, animated nav underlines. Custom cursor built then REMOVED per Brees. All gated behind `prefers-reduced-motion` + touch.
  - **Hero video** → warm golden-hour dog (`dental-hero.mp4` + poster); replaced the cold-blue close-up. (ffmpeg `hflip` used earlier; ffmpeg at `…/WinGet/Links/ffmpeg.exe`.)
- **Screenshot gotcha:** headless blows up the `min-height:72vh` hero — temporarily `sed` it to `620px` for full-page captures, then revert. Playwright global install present but lib not resolvable; Edge `--headless=new` (+ `--force-prefers-reduced-motion` to show reveals) works.
- **TODO next:** propagate 2026 motion + corrected palette to services + team; extract shared `assets/css/site.css` (header/footer/base still duplicated across pages); build remaining 9 spokes on the dental mold; real Jackson photos/video; JotForm wiring.

### 2026-06-01 — Services hub + spoke template + media (Brees)
- **SEO strategy — hub-and-spoke (decided with Brees).** Pulled the live `/services/` page (https://www.jacksonvet.net/services/, scraped to `assets/copy/services-source.md`). KEY INSIGHT: the old site is ONE `/services/` page with 26 in-page anchor sections, so Google indexes a single URL — there is no per-service ranking to "lose." Priority is (1) keep a strong Services hub + 301 the old `/services/` → new `/services/`, and (2) add standalone spoke pages as pure upside (rank for "[service] + Jackson GA"). To avoid thin content, CONSOLIDATE the 26 topics into ~11 substantial grouped pages. Rejected: one-page-only (misses upside) and page-per-service (24 thin pages).
- **11 spokes:** wellness-preventive-care · puppy-kitten-care · senior-care · surgery · dental-care · diagnostics-imaging · echocardiography (NEW) · laser-therapy-pain · dermatology · emergency-urgent-care · end-of-life-care. (Health Certificates DROPPED per onboarding; Echocardiography ADDED — no source copy yet, needs Andy. Grooming/"Jackson Day Spa" left off pending Andy confirm.)
- **Built `services.html` (hub):** video hero + 4 category bands (Wellness & Prevention / Surgery & Dentistry / Diagnostics & Advanced Care / When You Need Us Most), 11 cards. Each card has a short summary PLUS a sub-services line so long-tail keywords (digital X-rays, ultrasound, spay & neuter, etc.) stay on the hub. Whole cards clickable. Echocardiography carries a "New" tag. `VeterinaryCare` + OfferCatalog JSON-LD embedded.
- **Built `dental-care.html` (spoke template).** FIRST pass was article/blog-style (breadcrumb + narrow prose + sidebar) — Brees: "this shouldn't be a blog." REDESIGNED into a real service-landing layout: video hero + CTA → split (text + image w/ copper badge) → feature grid (4 check cards) → full-width statement band (copper glow) → two callout cards (When to come in / Before the procedure + anesthesia-form button) → CTA. THIS is the mold for the other 10 spokes.
- **Copy fidelity:** spoke *body paragraphs* are VERBATIM from jacksonvet.net (tightened the dental ones back to exact wording after minor drift). Page *scaffolding* (hero headlines, section subheads, CTAs) is ours — the live site has no per-service headlines. Hub card summaries are intentionally paraphrased (SEO: avoids duplicate content vs. the spoke).
- **Media — Pexels placeholders, "video on every page" (Brees' choices).** Followed media rules (no vet/tech faces, no gloves except surgery). Downloaded + ffmpeg-compressed: `assets/video/services-hero.mp4` (690KB, three dogs + a cat on a sofa — echoes the logo dog+cat), `assets/video/dental-hero.mp4` (263KB, dog close-up/mouth) + posters; `assets/images/dental-dog.jpg` (smiling dog, optimized 1600px). ffmpeg available at WinGet path. All PLACEHOLDER — swap for real Jackson footage when Candid Practice Photos folder is populated.
- **Local preview:** `py -3 -m http.server 8780` from project root (the server exits between sessions — restart as needed). Headless screenshots via Edge: `msedge --headless=new --screenshot=<abs path> <url>`.
- **TODO next:** (1) extract shared CSS (`assets/css/site.css`) before batching — header/footer/base currently duplicated across team/services/dental; (2) source Pexels video+image per spoke and BUILD the remaining 10 on the dental template; (3) get echocardiography copy + grooming decision from Andy; (4) wire anesthesia consent + appointment request via JotForm; (5) plan 301 redirects for the jacksonvet.net → jacksonveterinaryclinic.net migration (domain dispute still open).

### 2026-06-01 — Team page polish + verbatim bios (Brees)
- **Hero alignment fix:** hero text was being centered as an 880px column (the `.hero-inner` `max-width:880` fought the `.wrap` `margin:0 auto`, and flexbox shrank it to content width). Removed the inner max-width, added `width:100%` so `.hero-inner` fills the shared 1200px `.wrap` container — hero copy now sits flush-left, aligned with the logo. Headline keeps its own `max-width:820px` to wrap nicely.
- **Header logo:** removed the redundant HTML wordmark text (the badge already contains "JACKSON VETERINARY CLINIC · EST. 1981"). Header is now image-only with the name moved to `aria-label`. Swapped `logo-plate.png` → **`logo-badge.png`** (transparent, no cream coaster) per Brees, and sized it **+50%** (90px, 72px scrolled). Footer logo switched to the badge too for consistency.
- **Beige hints from the logo:** wove the logo's sand/beige into the dark theme — warm sand divider line under each card photo (`.dcard-body` / `.card-body` `border-top`), and (briefly) sand chip pills. NOTE: the chip pills were then **removed** from the doctor teaser cards at Brees' request — teaser is now portrait + name + intro + "Read full bio" only. (`.chip`/`.chips` CSS left in place but unused/dead.)
- **Verbatim bios:** Brees wanted the modal bios to match the source docs word-for-word.
  - **Dr. Andy** — pulled his Google Doc (`1p5jMyyqb-n10InVTYj9lsjaE937qWBr5`) and replaced the paraphrased modal copy with his exact text under his five section headers (A Hometown Story / A Life of Service / Coming Home / Why Veterinary Medicine / Jackson Veterinary Clinic Today). Restored dropped details: 95% stat, June 1997 / June 2018 dates, owns practice + property. Iraq photo kept under "A Life of Service"; caption "Overseas · Iraq, 2005" comes from the photo filename (`MAR 05 in Iraq 033.jpeg`), not the bio text — Brees approved keeping it.
  - **Dr. Alan** — same treatment from the verbatim local copy (`assets/copy/dr-alan-bio.md`, sourced from `Meet_Dr_Alan_Burdette_Bio.pdf`): sections Where It All Started / Four Decades of Service / Still in the Clinic / Family / Outside the Clinic, with all details (Macon, UGA College of Vet Medicine, wife Judy, four kids, Dr. Erin in CA, golf/lake).
  - Added `.mc-sec` style (copper uppercase section labels) for the new in-modal headers. Removed the old paraphrased `.mc-quote` pull-quotes.
  - The short **card teasers** remain summaries (not verbatim) by design — Brees approved.
- **Clickable teaser cards:** the whole doctor/Natalie card (photo + body) now opens the bio modal, not just the link. Added `role="button"`, `tabindex`, `aria-label`, Enter/Space keyboard support, pointer cursor, and a hover cue (card hover advances + brightens the "Read full bio" arrow). Explicit button still works and `stopPropagation` prevents double-fire.
- **Hero meta row trimmed:** removed "Father & son on the door" and "Butts County born & raised"; only the "Since 1981" marker remains.
- Verified hero alignment + logo via headless Edge screenshots.

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
