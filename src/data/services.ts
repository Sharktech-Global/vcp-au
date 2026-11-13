import type { ImageMetadata } from 'astro';
import websitePhoto from '../assets/web-services/services/website-design-development.jpg';
import webAppsPhoto from '../assets/web-services/services/web-applications.jpg';
import ecommercePhoto from '../assets/web-services/services/ecommerce.jpg';
import automationPhoto from '../assets/web-services/services/integrations-ai-automation.jpg';
import seoPhoto from '../assets/web-services/services/seo-performance.jpg';
import hostingPhoto from '../assets/web-services/services/hosting-care-support.jpg';
import teamPhoto from '../assets/web-services/team.jpg';
import codePhoto from '../assets/web-services/code.jpg';
import officePhoto from '../assets/home/industries/accounting.jpg';

/* Web Services content: one entry per service.
   The /web-services list uses title, summary and tags; each service's own page
   at /web-services/<slug> uses the rest.
   Photos are CC0 (public domain) from StockSnap.io: no licence fee or credit required. */

export interface Service {
	slug: string;
	title: string;
	/** One or two sentences for the services list */
	summary: string;
	tags: string[];
	/** Page headline, split into the lines it reveals in */
	headline: [string, string];
	lead: string;
	/** Search result title and description; fall back to the page title and lead */
	seoTitle?: string;
	seoDescription?: string;
	/** Optional external link shown beside the main button, e.g. a Sharktech Global service page */
	partner?: { label: string; href: string };
	/** Search terms this page targets */
	keywords?: string;
	/** Short facts under the hero */
	facts: { label: string; value: string }[];
	/** Opening statement for the overview section */
	overview: string;
	/** Wide photo under the overview; position is its CSS object-position */
	image: { src: ImageMetadata; alt: string; label: string; caption: string; position?: string };
	included: { title: string; desc: string }[];
	steps: { title: string; desc: string }[];
	stack: string[];
	faqs: { q: string; a: string }[];
}

export const services: Service[] = [
	{
		slug: 'website-design-development',
		title: 'Website Design & Development',
		summary:
			'Custom marketing sites designed around how your customers decide. Fast, accessible, built to rank and easy for your team to update.',
		tags: ['UX & UI design', 'Responsive build', 'CMS'],
		headline: ['Websites that win', 'the enquiry.'],
		lead: 'A custom website designed around how your customers decide, built to load fast, rank well and turn visitors into enquiries. Easy for your team to update once we hand it over.',
		seoTitle: 'Custom Website Design and Development Sydney | VCPility',
		seoDescription: 'Custom business websites designed and built by an Australian-led team in Sydney and Melbourne. Fast, mobile-first and wired into your CRM.',
		keywords: 'custom website design Sydney, corporate website developer, website development Australia, business website builder, web designer Melbourne',
		facts: [
			{ label: 'Best for', value: 'Businesses that need more enquiries' },
			{ label: 'You get', value: 'Strategy, design, build & training' },
			{ label: 'Built with', value: 'Astro · WordPress · Webflow' },
		],
		overview:
			'Your website is often the first conversation a customer has with you. We design it to answer their questions in the right order, then make the next step obvious.',
		image: { src: websitePhoto, alt: 'Hand-drawn website wireframes in an open notebook beside a phone', label: 'Design', caption: 'Wireframes before pixels', position: '50% 45%' },
		included: [
			{
				title: 'Discovery & strategy',
				desc: 'We map your customers, competitors and goals, then plan the pages and messages that move people to act.',
			},
			{
				title: 'UX & UI design',
				desc: 'Wireframes and full visual designs you can click through and comment on before anything is built.',
			},
			{
				title: 'Content & copy support',
				desc: 'Page structure, headlines and calls to action shaped with you, so every page has a clear job.',
			},
			{
				title: 'Responsive development',
				desc: 'Hand-built, fast-loading pages that look and work properly on every screen size and browser.',
			},
			{
				title: 'Easy-to-use CMS',
				desc: 'Edit text, images, blog posts and pages yourself, without calling a developer for every change.',
			},
			{
				title: 'Launch & training',
				desc: 'Redirects, analytics and search setup at launch, plus a walkthrough so your team is confident from day one.',
			},
		],
		steps: [
			{ title: 'Discover', desc: 'A workshop on your customers, goals and competitors, ending in an agreed site map and scope.' },
			{ title: 'Design', desc: 'Wireframes first, then visual designs for key pages, refined with your feedback.' },
			{ title: 'Build', desc: 'Development, content entry and testing across devices, browsers and connection speeds.' },
			{ title: 'Launch', desc: 'Go-live with redirects, analytics and search console set up, then a handover session.' },
		],
		stack: ['Astro', 'WordPress', 'Webflow', 'Tailwind CSS', 'Headless CMS', 'Google Analytics'],
		faqs: [
			{
				q: 'Can I update the website myself?',
				a: 'Yes. Every site comes with a content management system set up for your team, and we show you how to use it before handover.',
			},
			{
				q: 'Do you write the content?',
				a: "We plan the structure and help shape headlines and calls to action. If you'd like full copywriting, we can include it in your scope.",
			},
			{
				q: 'Will my site work on mobile?',
				a: 'Yes. Every page is designed and tested for phones, tablets and desktops, and we build to accessibility standards as part of the job.',
			},
			{
				q: 'Can you redesign my existing site?',
				a: 'Yes. We review what is working today, keep your search rankings safe with proper redirects, and rebuild around what your customers need.',
			},
		],
	},
	{
		slug: 'web-applications',
		title: 'Web Applications',
		summary:
			'Client portals, dashboards and internal tools, engineered by the same team that builds and runs the Sharktech platforms.',
		tags: ['Portals', 'Dashboards', 'APIs'],
		headline: ['Software built around', 'how you work.'],
		lead: 'Client portals, dashboards and internal tools that replace spreadsheets and manual work. Engineered by the same team that builds and runs the Sharktech platforms.',
		seoTitle: 'Custom Web Application Development Australia | VCPility',
		seoDescription: 'Client portals, dashboards and internal tools built by an Australian-led team. Replace spreadsheets and manual work with secure web applications.',
		keywords: 'custom web application development Australia, client portal development, business dashboard development, web app developer Sydney',
		facts: [
			{ label: 'Best for', value: 'Teams outgrowing spreadsheets' },
			{ label: 'You get', value: 'Product planning, build & support' },
			{ label: 'Built with', value: 'React · Next.js · Laravel' },
		],
		overview:
			'Off-the-shelf software makes you work its way. A custom web app works your way, and grows with you instead of holding you back.',
		image: { src: webAppsPhoto, alt: 'Developer typing code on a laptop', label: 'Build', caption: 'Engineered in-house, tested at every step', position: '50% 40%' },
		included: [
			{
				title: 'Product discovery',
				desc: 'We work through your processes and users to define exactly what the app needs to do, and what it does not.',
			},
			{
				title: 'UX for complex workflows',
				desc: 'Clear screens for forms, tables and multi-step tasks, tested with the people who will use them every day.',
			},
			{
				title: 'Front-end engineering',
				desc: 'Fast, responsive interfaces in React or Vue that feel like a modern product, on desktop and mobile.',
			},
			{
				title: 'Back end & APIs',
				desc: 'Secure servers, databases and APIs that keep your data safe and connect to the tools you already use.',
			},
			{
				title: 'Users, roles & security',
				desc: 'Logins, permissions and audit trails, so the right people see the right information.',
			},
			{
				title: 'Ongoing improvement',
				desc: 'Releases in small, regular steps after launch, guided by real usage and your team’s feedback.',
			},
		],
		steps: [
			{ title: 'Define', desc: 'Map users, workflows and data, then agree the first version and what success looks like.' },
			{ title: 'Prototype', desc: 'Clickable prototypes of the key screens, tested with real users before development starts.' },
			{ title: 'Build', desc: 'Development in short cycles, with a working version for you to review at every step.' },
			{ title: 'Launch & evolve', desc: 'A staged rollout, training and monitoring, then a roadmap of improvements.' },
		],
		stack: ['React', 'Next.js', 'Vue', 'Node.js', 'Laravel', 'PostgreSQL', 'MySQL', 'REST & GraphQL APIs'],
		faqs: [
			{
				q: 'How is a web app different from a website?',
				a: 'A website mostly shares information. A web app lets people do things: log in, manage data, complete tasks and see reports.',
			},
			{
				q: 'Who owns the code?',
				a: 'You do. We agree ownership and handover in your contract, and document the app so it can be maintained long term.',
			},
			{
				q: 'Can it connect to our existing systems?',
				a: 'Usually, yes. We integrate with CRMs, accounting tools, payment providers and most services that offer an API.',
			},
			{
				q: 'Do you support the app after launch?',
				a: 'Yes. We offer ongoing support and improvement plans, with hosting, monitoring and security updates included.',
			},
		],
	},
	{
		slug: 'ecommerce',
		title: 'E-commerce',
		summary:
			'Online stores that load quickly and check out cleanly, connected to your stock, payments and shipping.',
		tags: ['Storefronts', 'Payments', 'Inventory sync'],
		headline: ['Online stores that', 'sell more.'],
		lead: 'Storefronts that load quickly, check out cleanly and connect to your stock, payments and shipping, so selling online takes less of your time.',
		seoTitle: 'E-commerce Website Development Australia | VCPility',
		seoDescription: 'Online stores built by an Australian-led team, with fast product pages, clean checkout and stock, payment and shipping integrations.',
		keywords: 'e-commerce website development Australia, online store developer Sydney, Shopify developer Australia, e-commerce website design',
		facts: [
			{ label: 'Best for', value: 'Retailers and product brands' },
			{ label: 'You get', value: 'Store design, build & integrations' },
			{ label: 'Built with', value: 'Shopify · WooCommerce · Stripe' },
		],
		overview:
			'Every extra second and every extra step costs sales. We build stores that get out of the customer’s way, from the first product page to the confirmation email.',
		image: { src: ecommercePhoto, alt: 'Customer paying online with a credit card at a laptop', label: 'Checkout', caption: 'Every step to purchase, made shorter', position: '50% 55%' },
		included: [
			{
				title: 'Platform selection',
				desc: 'Honest advice on Shopify, WooCommerce or a custom build, based on your products, budget and plans.',
			},
			{
				title: 'Store design',
				desc: 'Product, category and cart pages designed to build trust and make buying easy on any device.',
			},
			{
				title: 'Checkout & payments',
				desc: 'A short, secure checkout with the payment options your customers expect, including Stripe and PayPal.',
			},
			{
				title: 'Stock & shipping',
				desc: 'Inventory, shipping rates and fulfilment connected, so orders flow through without double handling.',
			},
			{
				title: 'Product migration',
				desc: 'Your products, customers and order history moved across carefully, with redirects to protect rankings.',
			},
			{
				title: 'Marketing setup',
				desc: 'Analytics, email capture, abandoned cart flows and product feeds ready from launch day.',
			},
		],
		steps: [
			{ title: 'Plan', desc: 'Review your range, operations and customers, then choose the platform and agree the scope.' },
			{ title: 'Design', desc: 'Designs for the home, category, product and checkout pages, refined with you.' },
			{ title: 'Build & connect', desc: 'Build the store, connect payments, stock and shipping, then load your products.' },
			{ title: 'Launch & grow', desc: 'Test orders end to end, go live, then tune conversion with real sales data.' },
		],
		stack: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal', 'Afterpay', 'Klaviyo', 'Google Merchant Center'],
		faqs: [
			{
				q: 'Should I use Shopify or WooCommerce?',
				a: 'It depends on your products, budget and how much control you need. We recommend the best fit after looking at your business, not before.',
			},
			{
				q: 'Can you move my existing store?',
				a: 'Yes. We migrate products, customers and orders, and set up redirects so you keep your search traffic.',
			},
			{
				q: 'Can it connect to my inventory or accounting system?',
				a: 'In most cases, yes. We connect stores to stock, shipping and accounting tools so data stays in sync.',
			},
			{
				q: 'Do you help after launch?',
				a: 'Yes. We offer care plans for updates and support, and can keep improving conversion as sales data comes in.',
			},
		],
	},
	{
		slug: 'integrations-ai-automation',
		title: 'Integrations & AI Automation',
		summary:
			'Your site wired into your CRM, bookings and inbox, with AI agents answering and qualifying every enquiry around the clock.',
		tags: ['CRM', 'AI chatbots', 'Workflows'],
		headline: ['Every enquiry answered,', 'day or night.'],
		lead: 'We connect your website to your CRM, bookings and inbox, then put AI agents to work answering, qualifying and following up every enquiry, around the clock.',
		seoTitle: 'CRM Integration and AI Automation Australia | VCPility',
		seoDescription: 'CRM integration and AI automation for Australian businesses: website, bookings and inbox connected, with AI chat and follow-up on every enquiry.',
		keywords: 'CRM integration Australia, business automation, AI voice agent, AI chatbot for business, business automation NSW, AI automation Victoria',
		facts: [
			{ label: 'Best for', value: 'Teams losing leads to slow replies' },
			{ label: 'You get', value: 'Connected tools & AI agents' },
			{ label: 'Built on', value: 'VCPility · APIs · Webhooks' },
		],
		overview:
			'Most lost leads are not lost to competitors. They are lost to slow replies and forgotten follow-ups. Automation makes sure nothing slips through.',
		image: { src: automationPhoto, alt: 'Woman smiling as she reads a message on her phone', label: 'Response', caption: 'Answers in seconds, any hour of the day', position: '50% 28%' },
		included: [
			{
				title: 'CRM integration',
				desc: 'Website forms, calls and chats flow straight into your CRM, tagged and assigned with no copy and paste.',
			},
			{
				title: 'AI chat assistant',
				desc: 'A chatbot trained on your business that answers questions, qualifies leads and books appointments 24/7.',
			},
			{
				title: 'Booking automation',
				desc: 'Online booking connected to your calendar, with confirmations and reminders sent automatically.',
			},
			{
				title: 'Follow-up workflows',
				desc: 'Automatic emails and SMS that nurture enquiries and win back past customers at the right moment.',
			},
			{
				title: 'Review requests',
				desc: 'Happy customers asked for a review at the right time, helping your reputation grow on autopilot.',
			},
			{
				title: 'Custom integrations',
				desc: 'Connections between your other tools, from accounting to job management, using APIs and webhooks.',
			},
		],
		steps: [
			{ title: 'Audit', desc: 'Map how enquiries arrive today and where they stall, slow down or get lost.' },
			{ title: 'Design', desc: 'Plan the workflows, chatbot knowledge and the systems each step connects to.' },
			{ title: 'Connect & train', desc: 'Build the integrations, train the AI on your business and test every path.' },
			{ title: 'Launch & refine', desc: 'Go live, watch real conversations and keep improving the responses and flows.' },
		],
		stack: ['VCPility', 'AI chatbots', 'REST APIs', 'Webhooks', 'Google Workspace', 'Microsoft 365', 'Zapier'],
		faqs: [
			{
				q: 'Will the AI say the wrong thing to customers?',
				a: 'We train it only on your approved information and set clear limits. When it is unsure, it hands the conversation to your team.',
			},
			{
				q: 'Do we need to change CRMs?',
				a: 'Not necessarily. We can integrate with many existing CRMs, or set you up on VCPility if you want everything in one place.',
			},
			{
				q: 'Can customers still reach a real person?',
				a: 'Always. Automation handles the routine work, and anyone can ask to speak with your team at any point.',
			},
			{
				q: 'How quickly can this be running?',
				a: 'It depends on the number of tools and workflows involved. We agree a clear timeline once we have mapped your setup.',
			},
		],
	},
	{
		slug: 'seo-performance',
		title: 'SEO & Performance',
		summary:
			'Technical SEO, Core Web Vitals and analytics set up from day one, so every improvement shows up in the numbers.',
		tags: ['Technical SEO', 'Core Web Vitals', 'Analytics'],
		headline: ['Found faster.', 'Loaded faster.'],
		lead: 'Technical SEO, speed optimisation and analytics that help the right customers find you, then make sure your site is quick enough to keep them.',
		seoTitle: 'Technical SEO and Website Speed Optimisation | VCPility',
		seoDescription: 'Technical SEO, answer engine optimisation, structured data and speed work from an Australian-led team, so customers find you in Google and AI search.',
		keywords: 'technical SEO Australia, website speed optimisation, AEO, answer engine optimisation, local SEO Sydney, SEO services NSW',
		facts: [
			{ label: 'Best for', value: 'Sites that should rank higher' },
			{ label: 'You get', value: 'Audit, fixes & clear reporting' },
			{ label: 'Measured with', value: 'Search Console · GA4 · Lighthouse' },
		],
		overview:
			'Search engines reward sites that are fast, clear and useful. We fix what holds yours back, then report on the numbers that matter to your business.',
		image: { src: seoPhoto, alt: 'Laptop showing analytics charts on a desk', label: 'Insight', caption: 'Progress you can see in the numbers', position: '50% 50%' },
		included: [
			{
				title: 'Technical SEO audit',
				desc: 'A full review of crawling, indexing, site structure and errors, with fixes ranked by impact.',
			},
			{
				title: 'Core Web Vitals',
				desc: 'Faster loading, smoother interaction and stable layouts, measured against Google’s Core Web Vitals.',
			},
			{
				title: 'On-page optimisation',
				desc: 'Titles, headings, internal links and content structure tuned for the searches your customers make.',
			},
			{
				title: 'Local SEO',
				desc: 'Your Google Business Profile, location pages and listings set up to win nearby searches.',
			},
			{
				title: 'Structured data',
				desc: 'Schema markup that helps search engines understand your business, services and reviews.',
			},
			{
				title: 'Analytics & reporting',
				desc: 'GA4 and Search Console set up properly, with plain-English reports on traffic, rankings and enquiries.',
			},
		],
		steps: [
			{ title: 'Audit', desc: 'Benchmark speed, rankings and technical health, and agree the goals we will track.' },
			{ title: 'Prioritise', desc: 'Turn the findings into a ranked plan, starting with the fixes that matter most.' },
			{ title: 'Fix & optimise', desc: 'Make the technical, speed and on-page changes, testing each one as we go.' },
			{ title: 'Measure', desc: 'Report on progress regularly and keep refining as search and your site evolve.' },
		],
		stack: ['Google Search Console', 'GA4', 'Lighthouse', 'PageSpeed Insights', 'Schema.org', 'Google Business Profile'],
		faqs: [
			{
				q: 'How long does SEO take to work?',
				a: 'Technical and speed fixes can help within weeks. Ranking gains usually build over months, depending on your market and competition.',
			},
			{
				q: 'Can you guarantee first place on Google?',
				a: 'No one honestly can. We focus on the things that reliably improve visibility and report openly on the results.',
			},
			{
				q: 'Do you work on sites you did not build?',
				a: 'Yes. We can audit and improve most websites, whichever platform they run on.',
			},
			{
				q: 'What will I see in reports?',
				a: 'Clear numbers on traffic, rankings, speed and enquiries, with notes on what changed and what we are doing next.',
			},
		],
	},
	{
		slug: 'hosting-care-support',
		title: 'Hosting, Care & Support',
		summary:
			'Secure managed hosting, updates and backups, with a team in Sydney and Melbourne on call during business hours.',
		tags: ['Managed hosting', 'Security', 'Maintenance'],
		headline: ['Always on.', 'Always looked after.'],
		lead: 'Secure managed hosting, updates, backups and monitoring, with a local team in Sydney and Melbourne on call during business hours when you need a hand.',
		seoTitle: 'Managed Website Hosting and Care Plans Australia | VCPility',
		seoDescription: 'Secure managed website hosting with updates, backups and monitoring, supported by an Australian-led team in Sydney and Melbourne during business hours.',
		keywords: 'managed website hosting Australia, website care plan, website maintenance Sydney, WordPress hosting Australia',
		facts: [
			{ label: 'Best for', value: 'Any site that needs to stay online' },
			{ label: 'You get', value: 'Hosting, updates & real support' },
			{ label: 'Support hours', value: 'Mon–Fri, 9 AM – 6 PM AEST' },
		],
		overview:
			'A website is never finished on launch day. We keep yours fast, secure and up to date, so you can get on with running your business.',
		image: { src: hostingPhoto, alt: 'Two people with tablets in a server room', label: 'Care', caption: 'Monitored, updated and backed up', position: '50% 35%' },
		included: [
			{
				title: 'Managed hosting',
				desc: 'Fast, secure hosting set up and managed for you, with SSL certificates and a global CDN.',
			},
			{
				title: 'Updates & patches',
				desc: 'Platform, plugin and dependency updates applied and tested, so security holes are closed quickly.',
			},
			{
				title: 'Backups',
				desc: 'Regular automated backups stored safely offsite, ready to restore if anything ever goes wrong.',
			},
			{
				title: 'Monitoring',
				desc: 'Uptime, speed and security monitoring that alerts us to problems, often before you notice them.',
			},
			{
				title: 'Content changes',
				desc: 'Small edits and updates handled by our team, so your site stays current without the hassle.',
			},
			{
				title: 'Local support',
				desc: 'A team in Sydney and Melbourne you can reach during AEST business hours, by email or phone.',
			},
		],
		steps: [
			{ title: 'Review', desc: 'Check your current site, hosting and risks, and agree the right level of care.' },
			{ title: 'Migrate', desc: 'Move your site to managed hosting carefully, with no surprises and minimal downtime.' },
			{ title: 'Protect', desc: 'Set up backups, monitoring and security, then keep everything updated.' },
			{ title: 'Support', desc: 'Handle requests and changes as they come up, with a regular report on site health.' },
		],
		stack: ['Vercel', 'Cloudflare', 'AWS', 'Managed WordPress hosting', 'SSL & CDN', 'Uptime monitoring'],
		faqs: [
			{
				q: 'Can you look after a site you did not build?',
				a: 'Yes. We start with a review, fix anything urgent, then bring it onto a care plan.',
			},
			{
				q: 'What happens if my site goes down?',
				a: 'Monitoring alerts us, and we work to restore it as quickly as possible, using backups if needed.',
			},
			{
				q: 'Will moving hosts affect my site?',
				a: 'We plan migrations carefully, test everything on the new host first and switch over at a quiet time.',
			},
			{
				q: 'How do I request changes?',
				a: 'Email or call our team during business hours. Small changes are handled as part of your care plan.',
			},
		],
	},
	{
		slug: 'managed-growth',
		title: 'Managed Growth Service',
		summary:
			'A done-for-you growth team for professional services firms: CRM, AI agents, website, SEO, reviews and follow-up, set up and run for you each month.',
		tags: ['Done for you', 'CRM & AI agents', 'Monthly reporting'],
		headline: ['Your growth team,', 'managed for you.'],
		lead: 'VCPility is the web services division of Sharktech Global. Our managed growth service sets up and runs your CRM, AI agents, website, search presence, reviews and follow-up, so your firm wins more clients without hiring a marketing team.',
		seoTitle: 'Managed Growth Service for Professional Firms | VCPility',
		seoDescription: 'A done-for-you managed growth service for Australian accountants, planners, brokers and start-ups: CRM, AI agents, SEO and follow-up run for you.',
		keywords: 'managed growth service Australia, done for you marketing for accountants, managed marketing for professional services, growth partner for financial planners, done for you CRM Australia',
		facts: [
			{ label: 'Best for', value: 'Firms with no marketing team' },
			{ label: 'You get', value: 'Set-up, running & monthly reports' },
			{ label: 'Plans from', value: '$50 + GST a month' },
		],
		overview:
			'Most professional services firms do not need more software. They need someone to run it. A managed growth service means one Australian-led team sets up your systems, answers every enquiry, follows up every prospect and reports what turned into clients.',
		image: { src: teamPhoto, alt: 'Four people working together at a wooden table with notebooks, drinks and a laptop', label: 'Growth', caption: 'One team running your growth system', position: '50% 50%' },
		included: [
			{
				title: 'CRM set up and run for you',
				desc: 'Every call, form, chat and referral lands in one pipeline, from first enquiry to signed engagement, kept tidy by our team.',
			},
			{
				title: 'AI agents on every channel',
				desc: 'An AI chatbot and, from the Elevate plan, an AI voice agent that answer in minutes, qualify the enquiry and book a first meeting with your team.',
			},
			{
				title: 'Website and landing pages',
				desc: 'A website built to convert, plus new landing pages on the higher plans, so every campaign has somewhere clear to send people.',
			},
			{
				title: 'SEO and AEO',
				desc: 'Search work that helps your firm show up in Google and in answers from AI assistants, with a monthly SEO and AEO report on the Dominate plan.',
			},
			{
				title: 'Reviews and reputation',
				desc: 'Automatic Google review requests after each engagement and monitoring of what clients say about you.',
			},
			{
				title: 'Follow-up and referral campaigns',
				desc: 'Email and SMS sequences that chase proposals, nurture slow decisions and keep referral partners engaged.',
			},
		],
		steps: [
			{ title: 'Strategy call', desc: 'We map where your enquiries come from, where they are lost and which clients you want more of.' },
			{ title: 'Set up', desc: 'We build your CRM pipeline, AI agents, booking, review requests and follow-up around how your firm works.' },
			{ title: 'Run', desc: 'Our team runs the system each month: campaigns, pages, reviews and fixes, with no extra hires on your side.' },
			{ title: 'Report & improve', desc: 'Each month you see enquiries, bookings and new clients, and we tune what converts.' },
		],
		stack: ['VCPility CRM', 'AI chatbot', 'AI voice agent', 'Google Business Profile', 'Email & SMS', 'Google Analytics'],
		faqs: [
			{
				q: 'What is a managed growth service?',
				a: 'It is a done-for-you service where one team sets up and runs the systems that win clients: CRM, AI agents, website, search, reviews and follow-up. You approve the strategy and take the meetings. We do the rest and report results each month.',
			},
			{
				q: 'How much does managed growth cost?',
				a: 'Plans start at $50 + GST a month for Starter. Launch is $70 + GST a month billed annually, or $85 month to month. Elevate is $300 + GST a month billed annually, or $360 month to month. Dominate is $490 + GST a month billed annually, or $590 month to month. Ads management is an optional add-on.',
			},
			{
				q: 'How is this different from a marketing agency?',
				a: 'An agency usually runs campaigns and hands leads to you. A managed growth service also runs what happens after the click: the reply, the booking, the follow-up and the review request, in one system you can see.',
			},
			{
				q: 'Who is it for?',
				a: 'Accountants, bookkeepers, financial planners, mortgage brokers, other finance firms, entrepreneurs and start-ups that want more clients but have no in-house marketing team.',
			},
			{
				q: 'Does the AI give financial, credit or tax advice?',
				a: 'No. The AI answers general questions about your firm, collects details and books a call with your licensed or registered team.',
			},
			{
				q: 'Who is behind VCPility?',
				a: 'VCPility is the web services division of Sharktech Global, an Australian-led technology company based in Liverpool, New South Wales.',
			},
		],
	},
	{
		slug: 'agentic-ai-deployment',
		title: 'Managed Agentic AI Deployment',
		summary:
			'AI agents that take real actions in your business, deployed, monitored and improved for you by an Australian-led team, with clear limits and human handover.',
		tags: ['AI agents', 'Managed for you', 'Governance'],
		headline: ['AI agents that do the work,', 'managed for you.'],
		lead: 'We design, deploy and manage AI agents that answer, qualify, book, follow up and update your systems. Built and supported by Sharktech Global, with clear limits, logs and a person to hand over to.',
		seoTitle: 'Managed AI Agent Deployment for Australian Firms | VCPility',
		seoDescription: 'Managed agentic AI deployment for Australian professional services: AI agents that answer, book and follow up, set up and monitored for you.',
		keywords: 'managed AI agents Australia, agentic AI deployment, AI agent deployment for small business, AI agents for accounting firms, done for you AI agents Australia',
		facts: [
			{ label: 'Best for', value: 'Firms buried in admin and missed enquiries' },
			{ label: 'You get', value: 'Design, deployment & ongoing management' },
			{ label: 'Pricing', value: 'Quoted in writing after discovery' },
		],
		overview:
			'An AI chatbot answers questions. An AI agent takes the next step: it books the meeting, updates the CRM, sends the follow-up and flags what needs a person. Agents only help when someone owns them, so we deploy and manage them for you.',
		image: { src: codePhoto, alt: 'Close-up of programming code on a dark screen', label: 'Agents', caption: 'Engineered, tested and monitored', position: '50% 50%' },
		included: [
			{
				title: 'Use case discovery',
				desc: 'We find the repetitive work worth automating first, such as enquiry handling, booking, document chasing and follow-up.',
			},
			{
				title: 'AI voice and chat agents',
				desc: 'Agents that answer calls, website chat and social messages, qualify the enquiry and book time with your team.',
			},
			{
				title: 'Workflow agents',
				desc: 'Agents that update your CRM, create tasks, send reminders and move work along between your existing tools.',
			},
			{
				title: 'Guardrails and handover',
				desc: 'Agents work only from your approved information, stay inside agreed limits and hand the conversation to a person when unsure.',
			},
			{
				title: 'Monitoring and logs',
				desc: 'Every conversation and action is logged, reviewed and used to improve the agent, so you can see what it did and why.',
			},
			{
				title: 'Ongoing management',
				desc: 'We keep agents current as your services, prices and processes change, and report results each month.',
			},
		],
		steps: [
			{ title: 'Discover', desc: 'A free discovery call to map your admin, enquiry flow and the tools you already use.' },
			{ title: 'Design', desc: 'We agree what each agent may and may not do, the information it uses and when it hands over.' },
			{ title: 'Deploy', desc: 'We build, connect and test each agent against real scenarios before it speaks to a client.' },
			{ title: 'Manage', desc: 'We monitor, review and improve the agents every month, and report what they handled.' },
		],
		stack: ['VCPility AI agents', 'AI voice agent', 'CRM workflows', 'REST APIs', 'Webhooks', 'Microsoft 365', 'Google Workspace'],
		faqs: [
			{
				q: 'What is agentic AI?',
				a: 'Agentic AI is software that does not just reply but completes steps for you, such as booking a meeting, updating a record or sending a reminder, within limits you set.',
			},
			{
				q: 'What does managed agentic AI deployment include?',
				a: 'Discovery, design, build, testing, go-live and ongoing monitoring and improvement of your AI agents, by one Australian-led team.',
			},
			{
				q: 'How much does it cost?',
				a: 'The AI voice agent is included from the Elevate plan, at $300 + GST a month billed annually, or $360 month to month. Custom AI agents and workflows are quoted in writing after a free discovery call.',
			},
			{
				q: 'Will an AI agent give advice to our clients?',
				a: 'No. Agents do not give financial, credit or tax advice. They answer general questions, collect details and book a call with your licensed or registered team.',
			},
			{
				q: 'How do you keep client information safe?',
				a: 'Agents use only the information you approve, access is limited to what each task needs, and every action is logged. We agree data handling with you before go-live.',
			},
			{
				q: 'Can clients still reach a person?',
				a: 'Always. Any client can ask for a person at any point, and agents hand over when they are unsure.',
			},
		],
	},
	{
		slug: 'managed-it-partner',
		title: 'Managed IT Partner',
		summary:
			'Managed IT for professional services firms, delivered by Sharktech Global: helpdesk, Microsoft 365, security and backups, connected to your growth systems.',
		tags: ['Managed IT', 'Cybersecurity', 'Microsoft 365'],
		headline: ['IT that just works,', 'from one partner.'],
		lead: 'VCPility runs your growth systems. Our parent company, Sharktech Global, runs your IT. One Australian-led team looks after your helpdesk, Microsoft 365, security, backups and AI agents as one environment.',
		seoTitle: 'Managed IT Partner for Professional Services | VCPility',
		seoDescription: 'Managed IT for Australian accountants, planners and brokers from Sharktech Global: helpdesk, Microsoft 365, security and backups with your growth tools.',
		keywords: 'managed IT for professional services firms, IT partner for accountants, managed IT for financial planners, IT support for mortgage brokers, managed IT Sydney',
		partner: { label: 'See Sharktech managed IT', href: 'https://www.sharktech.com.au/services/managed-it-services' },
		facts: [
			{ label: 'Best for', value: 'Firms of 5 to 50 staff without in-house IT' },
			{ label: 'Delivered by', value: 'Sharktech Global' },
			{ label: 'Managed IT from', value: '$120 per user a month' },
		],
		overview:
			'When your CRM, phones, email and AI agents are run by different providers, nobody owns the problem. One technology partner means one number to call and one team accountable for the whole environment.',
		image: { src: officePhoto, alt: 'Two colleagues talking at a desk with a laptop and printed documents', label: 'Support', caption: 'One team accountable for your technology', position: '50% 40%' },
		included: [
			{
				title: 'Business-hours helpdesk',
				desc: 'A helpdesk that logs every ticket, so issues are owned, tracked and closed.',
			},
			{
				title: 'Microsoft 365 and email',
				desc: 'Accounts, licences, email and file sharing set up properly and kept tidy as staff join and leave.',
			},
			{
				title: 'Monitoring, patching and backups',
				desc: 'Devices and systems monitored and patched, with backups that are tested, not assumed.',
			},
			{
				title: 'Cybersecurity',
				desc: 'Security basics for client data, from account protection to security health checks, delivered by Sharktech Global.',
			},
			{
				title: 'Growth systems in the same environment',
				desc: 'Your VCPility CRM, AI agents, website and phones managed alongside your IT, not in a separate silo.',
			},
			{
				title: 'On-site support when needed',
				desc: 'Sharktech Global provides on-site IT support for the times a remote fix is not enough.',
			},
		],
		steps: [
			{ title: 'Discovery call', desc: 'A free call to understand your team, devices, software and the problems you want fixed.' },
			{ title: 'Assess', desc: 'We review accounts, security, backups and support gaps, and agree a written scope.' },
			{ title: 'Onboard', desc: 'Sharktech Global takes over helpdesk, monitoring and backups, with a planned cut-over.' },
			{ title: 'Manage', desc: 'Ongoing support, patching and reporting, with growth and IT reviewed together.' },
		],
		stack: ['Microsoft 365', 'Google Workspace', 'Endpoint monitoring', 'Tested backups', 'VCPility CRM', 'AI agents'],
		faqs: [
			{
				q: 'Does VCPility provide managed IT?',
				a: 'Yes, through Sharktech Global. VCPility is the web services division of Sharktech Global, and Sharktech Global delivers managed IT, cybersecurity and on-site support.',
			},
			{
				q: 'How much does managed IT cost?',
				a: 'Sharktech Global managed IT starts from $120 per user a month. Your exact price is confirmed in writing after a free discovery call.',
			},
			{
				q: 'Is managed IT included in a VCPility plan?',
				a: 'Managed IT and essential business IT are included in the VCPility Custom plan, which is quoted in writing after a free discovery call.',
			},
			{
				q: 'Do you work alongside our existing IT person?',
				a: 'Yes. Sharktech Global can run your IT fully or support the person who looks after it today.',
			},
			{
				q: 'Who is this for?',
				a: 'Accountants, bookkeepers, financial planners, mortgage brokers and other professional services firms that want one partner for growth and IT.',
			},
		],
	},
];
