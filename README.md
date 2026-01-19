# Shri Virbhadra Constructions - Website

A professional, fully responsive website for Shri Virbhadra Constructions, a leading civil engineering and construction company based in Pune, Maharashtra.

## Features

✅ **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
✅ **Professional Layout** - Clean, modern design with professional color scheme
✅ **Complete Pages** - Home, Products & Services, About Us, and Contact pages
✅ **Contact Form** - Functional inquiry form for client communication
✅ **SEO Optimized** - Meta tags, robots.txt, and sitemap for search engines
✅ **Company Credentials** - GST registration, project details, and certifications displayed
✅ **Project Gallery** - Showcase of construction projects with images
✅ **Mobile-First** - Optimized navigation and layout for mobile users

## Pages

1. **Home** - Hero section with company highlights, services overview, and featured projects
2. **Products & Services** - Detailed list of construction services and product categories
3. **About Us** - Company profile, mission, vision, and project achievements
4. **Contact Us** - Contact information and inquiry form for potential clients

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Database**: None (Static pages with client-side form handling)
- **Deployment**: Vercel

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository or download the project
2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

### Using the Vercel CLI

1. Install Vercel CLI (if not already installed):
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts and your site will be deployed!

### Using Git (Recommended)

1. Push your code to GitHub, GitLab, or Bitbucket
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New" → "Project"
4. Import your Git repository
5. Click "Deploy" - Vercel will auto-detect Next.js settings

### Environment Variables

No environment variables required for the basic setup. The contact form uses client-side submission.

To integrate with a backend service for form submissions, you would need to:
1. Create an API route in `/app/api/contact/route.ts`
2. Add backend service credentials as environment variables
3. Update the contact form submission logic

## Project Structure

```
├── app/
│   ├── page.tsx                 # Home page
│   ├── products/
│   │   └── page.tsx            # Products & Services
│   ├── about/
│   │   └── page.tsx            # About Us
│   ├── contact/
│   │   └── page.tsx            # Contact form
│   ├── layout.tsx              # Root layout with metadata
│   ├── globals.css             # Global styles and design tokens
│   └── sitemap.ts              # SEO sitemap
├── components/
│   ├── header.tsx              # Navigation header with mobile menu
│   └── footer.tsx              # Footer with company info
├── public/
│   ├── construction-*.jpg       # Project images
│   └── robots.txt              # SEO robots file
└── package.json
```

## Customization

### Update Company Information
Edit the following files:
- `/components/header.tsx` - Company name, phone number
- `/components/footer.tsx` - Contact details and address
- `/app/about/page.tsx` - Company profile and details
- `/app/layout.tsx` - Metadata and SEO

### Update Colors
Edit `/app/globals.css`:
- `--primary` - Main brand color (currently dark blue)
- `--accent` - Highlight color (currently orange)
- `--secondary` - Dark background color

### Add/Update Projects
- Replace images in `/public/construction-*.jpg`
- Update project details in `/app/about/page.tsx` and `/app/page.tsx`

### Update Phone Number & Email
Search for placeholder contact information:
- Phone: `+91 98765 43210`
- Email: `info@shrivirbhadra.com`
- Address: `Flat No 17, Jijai Plaza, Behind Eklavya College, Kothrud, Pune-411038`

## Form Integration

The contact form currently logs submissions to the console. To integrate with a backend:

1. Create `/app/api/contact/route.ts`:
```typescript
export async function POST(request: Request) {
  const data = await request.json()
  // Send to email service or database
  return Response.json({ success: true })
}
```

2. Update `/app/contact/page.tsx` to send to the API endpoint

## Performance Optimization

- Images are automatically optimized by Next.js Image component
- CSS is scoped and only loaded when needed
- Static pages are pre-rendered at build time
- Mobile navigation uses efficient state management

## SEO Features

- ✅ Meta tags for all pages
- ✅ Descriptive titles and descriptions
- ✅ Semantic HTML structure
- ✅ Mobile-responsive design
- ✅ sitemap.xml for search engines
- ✅ robots.txt for crawler guidance
- ✅ Open Graph tags ready to implement

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Support & Maintenance

For updates or changes:
1. Edit the relevant files
2. Test locally with `npm run dev`
3. Build with `npm run build`
4. Deploy to Vercel with `vercel` command or git push

## License

All content is proprietary to Shri Virbhadra Constructions.

## Contact

**Shri Virbhadra Constructions**
📍 Pune, Maharashtra, India
📞 +91 98765 43210
📧 info@shrivirbhadra.com
🌐 https://shrivirbhadra.com
