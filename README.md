# Primsa Storiesya — Website

A premium, editorial-style marketing website for **Primsa Storiesya**, a versatile event-space rental studio in Koramangala, Bangalore.

Built with **Next.js 14+ (App Router)**, **Tailwind CSS v4**, **Framer Motion**, **shadcn/ui**, and **React Hook Form + Zod**.

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## How to Swap Placeholder Images

All placeholder images are in `public/images/`. Each image has a `{/* TODO: Replace with... */}` comment in the component file.

| File | Space | Used In |
|---|---|---|
| `elite-hall.jpg` | Elite Hall | Hero, Offerings, Gallery |
| `podcast-studio.jpg` | Podcast Studio | Offerings, Gallery |
| `art-studio.jpg` | Art Studio | Offerings, Gallery |
| `seminar-room.jpg` | Seminar Room | Offerings, Gallery |
| `sound-healing.jpg` | Sound Healing | Offerings, Gallery |
| `cultural-concert.jpg` | Cultural Concert | Hero, Offerings, Gallery |
| `corporate-event.jpg` | Corporate Event | Hero, Offerings, Gallery |
| `special-talks.jpg` | Special Talks | Offerings, Gallery |
| `training-program.jpg` | Training Program | Offerings, Gallery |
| `about-space.jpg` | About Us foyer | AboutUs |

**To replace:** Overwrite the file in `public/images/` keeping the same filename. Or update the `src` prop in the component.

---

## How to Update Contact Information

Contact details appear in:
1. `components/sections/Contact.tsx` — phone, email, address, WhatsApp, Google Maps
2. `components/sections/Footer.tsx` — phone, email, address, Instagram

Search and replace:
- Phone: `9157373317`
- Email: `primsastoriesya@gmail.com`
- WhatsApp: `https://wa.me/919157373317`
- Address: `Koramangala, Bangalore - 560034`
- Instagram: `https://instagram.com/primsastoriesya`

For the Google Maps pin, update the `src` iframe URL in `Contact.tsx`.

---

## Wiring the Booking Form to Email / CRM

The form submits to `/api/booking` (`app/api/booking/route.ts`). Currently logs to console.

### Option A — Resend (recommended)
```bash
npm install resend
```
Uncomment the Resend block in `route.ts`, add to `.env.local`:
```
RESEND_API_KEY=re_xxxx
```

### Option B — Nodemailer (SMTP)
```bash
npm install nodemailer
```
Use SMTP credentials in `.env.local`.

### Option C — Webhook (Zapier / Make / n8n)
Replace `console.log` with a `fetch()` POST to your webhook URL.

---

## Deploy to Vercel

1. Push to GitHub.
2. Vercel → New Project → Import repo → Deploy.
3. Add env vars in Project Settings → Environment Variables.
4. Update `public/sitemap.xml` with your real domain.

---

## Replacing Testimonials

In `components/sections/Testimonials.tsx`:
- Replace `clientBadges` with real client names or logo images
- Replace the placeholder `<blockquote>` with a real client quote

---

## Brand Tokens

| Token | Hex | Use |
|---|---|---|
| ink | `#1C1A17` | Primary text |
| charcoal-navy | `#16232E` | Dark sections |
| ivory | `#FAF6EF` | Light backgrounds |
| gold | `#B7902F` | Accent / CTAs |
| gold-soft | `#D9C08A` | Hover states |
| stone | `#8A8478` | Muted body text |

**Fonts:** Fraunces (headings), Inter (body/UI), Cormorant Garamond (accent italic)
