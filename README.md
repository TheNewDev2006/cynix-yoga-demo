# Cynix Yoga/Wellness Demo Website

Professional yoga and wellness website template for Cynix Inc cold outreach.

## Quick Start

1. **Deploy to Vercel**
   ```bash
   npm i -g vercel
   vercel
   ```

2. **Add Custom Domain**
   - Go to Vercel Dashboard → Project → Settings → Domains
   - Add subdomain: `{studioname}.cynixinc.dev`

## URL Parameters

Personalize the demo using URL parameters:

```
https://your-demo-url.vercel.app?name=Zen%20Yoga%20Studio&phone=0712345678&address=Colombo%2005&owner=Priya
```

| Parameter | Description | Example |
|-----------|-------------|---------|
| `name` | Studio Business Name | Zen Yoga Studio |
| `phone` | Contact Number | 0712345678 |
| `address` | Location | Colombo 05 |
| `owner` | Owner Name | Priya |

**Fallback Values** (when no params):
- Name: Cynix Inc
- Phone: 0725582444
- Address: 237, Jampettah Street, Colombo 13
- Owner: Manisha Gurukanda

## Pricing (LKR)

| Plan | Price |
|------|-------|
| 3 Months | LKR 15,000 |
| 6 Months | LKR 25,000 |
| 12 Months | LKR 40,000 |

## Contact Form

Form submissions are sent to: **info.cynixinc@gmail.com**

## Analytics

Vercel Analytics is enabled. View analytics in your Vercel dashboard.

## Pages

- `index.html` - Homepage
- `about.html` - About Us
- `classes.html` - Class Listings
- `class-single.html` - Class Details
- `schedule.html` - Weekly Schedule
- `pricing.html` - Membership Plans
- `contact.html` - Contact Form
- `join.html` - Join/Registration Form
- `team.html` - Instructors
- `blog.html` - Blog
- `blog-single.html` - Blog Post

## Deployment

### Vercel CLI
```bash
vercel deploy
```

### GitHub + Vercel
1. Push to GitHub
2. Import project in Vercel
3. Enable Auto Deploy
4. Add custom domain

## Vercel Analytics

Analytics tracking is enabled via Splitbee. Configure your Splitbee project at https://splitbee.io
