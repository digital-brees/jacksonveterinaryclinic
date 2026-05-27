# Jackson Veterinary Clinic — Session Notes

**Status:** Setup complete. Awaiting Alie's homepage copy before page build begins.
**Created:** 2026-05-27
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

**Color palette:** TBD. Anchor on the navy from the existing logo + complementary dark-mode palette. Confirm with Brees once logo is converted to web format.

**Typography:** TBD. Should feel grounded, classic, with a touch of editorial warmth — fits the hometown/military legacy story. Avoid trendy/tech-y fonts. Avoid Wood Haven's Fraunces (project-specific, see MEMORY.md note about logo-complementary fonts).

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
- `assets/logo/` — EMPTY, logo .ai still in Drive (needs conversion to SVG/PNG for web)
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

## Key Decisions / Rationale

- **Dark theme** — Per Andy. Differentiates from generic vet sites. Aligns with the "service and substance" tone (military discipline, family legacy).
- **Keep existing navy logo** — Heritage from 1981. Don't touch.
- **No online booking** — Practice preference. Appointment request form goes through staff for personal touch.
- **Transparent pricing** — Stated priority for Andy. This may be a USP vs. competitors.
- **Hometown narrative front and center** — Andy's military-to-vet-to-hometown arc is the strongest differentiator. Lead with it.

---

## Open Questions / Blockers

- ⏳ Alie's homepage copy doc — must land before page build
- ⏳ Logo .ai → web format conversion (or request SVG from Andy)
- ⏳ Sitemap confirmation
- ⏳ Final brand color palette (anchored on navy from logo)
- ⏳ Typography pairing TBD
- ⏳ Real practice photos (Candid Practice Photos folder is empty)
- ⏳ Pricing data — Pricing Page doc is empty
- ⏳ Forms to digitize from Andy
- ⏳ Domain dispute resolution with Dr. Multimedia (separate ops track)

---

## Session Log

### 2026-05-27 — Project setup
- Pulled onboarding context from Granola MCP (May 15, 2026 onboarding call)
- Inventoried Drive folder, recorded all subfolder + doc IDs
- Saved Dr. Andy + Dr. Alan bios locally as markdown
- Created project folder, git repo, GitHub repo `digital-brees/jacksonveterinaryclinic`
- Scaffolded with `index.html` stub, `robots.txt` (block), `robots.production.txt` (allow), session-notes.md
- Confirmed `noindex` meta tag on index.html stub for preview safety
- HOLD on page build until Alie's homepage copy lands
