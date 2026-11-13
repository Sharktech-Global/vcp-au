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
import wireframePhoto from '../assets/web-services/wireframe.jpg';

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
	{
		slug: 'ai-receptionist',
		title: 'AI Receptionist & Voice Agent',
		summary:
			'An AI voice agent that answers every call for your firm, day or night, qualifies the enquiry and books a meeting with your team.',
		tags: ['AI voice agent', 'Call answering', 'Booking'],
		headline: ['Every call answered,', 'every time.'],
		lead: 'Our AI receptionist answers your phone in a natural voice, handles common questions, takes details and books a meeting with your team. Set up and managed for you by VCPility, the web services division of Sharktech Global.',
		seoTitle: 'AI Receptionist for Professional Services Firms | VCPility',
		seoDescription: 'An AI receptionist for Australian accountants, planners, brokers and start-ups: answers every call, qualifies the enquiry and books a meeting, 24/7.',
		keywords: 'AI receptionist Australia, AI phone answering service, AI voice agent for professional services, virtual receptionist AI, AI receptionist for financial planners',
		facts: [
			{ label: 'Best for', value: 'Firms that miss calls during client work' },
			{ label: 'You get', value: 'AI voice agent set up and managed' },
			{ label: 'Included from', value: 'Elevate plan' },
		],
		overview:
			'A missed call from a new prospect is often a lost client, because the next firm they call picks up. An AI receptionist means every call is answered in seconds, and your team only takes the conversations that need them.',
		image: { src: automationPhoto, alt: 'Woman smiling as she reads a message on her phone', label: 'Calls', caption: 'Answered in seconds, any hour', position: '50% 28%' },
		included: [
			{
				title: 'Natural voice answering',
				desc: 'The agent answers in a clear, natural voice using your firm name and approved scripts.',
			},
			{
				title: 'Enquiry qualification',
				desc: 'It asks the questions your team would ask and records the answers in your CRM.',
			},
			{
				title: 'Meeting booking',
				desc: 'Callers book a discovery call or appointment straight into your calendar.',
			},
			{
				title: 'After-hours cover',
				desc: 'Calls at night, on weekends and in peak season are answered, not sent to voicemail.',
			},
			{
				title: 'Warm handover',
				desc: 'Urgent or complex calls are passed to a person, with a summary sent to your team.',
			},
			{
				title: 'Call summaries',
				desc: 'Every call is logged with a transcript and summary, so nothing is lost.',
			},
		],
		steps: [
			{ title: 'Map your calls', desc: 'We list the calls you get, the questions callers ask and what should happen next.' },
			{ title: 'Write the scripts', desc: 'We agree what the agent can say, what it must not say and when it hands over.' },
			{ title: 'Connect and test', desc: 'We connect your number, CRM and calendar, then test real call scenarios.' },
			{ title: 'Go live and refine', desc: 'We review calls each week at first, then monthly, and keep improving the answers.' },
		],
		stack: ['AI voice agent', 'VCPility CRM', 'Online booking', 'Call transcripts', 'SMS follow-up'],
		faqs: [
			{
				q: 'What does an AI receptionist do?',
				a: 'It answers your business calls, responds to common questions, collects caller details and books meetings, then hands anything urgent or complex to a person.',
			},
			{
				q: 'How much does the AI receptionist cost?',
				a: 'The AI voice agent is included from the Elevate plan, at $300 + GST a month billed annually, or $360 month to month. Call usage is set out on the plans page.',
			},
			{
				q: 'Will callers know it is AI?',
				a: 'The agent is open about being an AI assistant for your firm, and any caller can ask for a person.',
			},
			{
				q: 'Can it give financial, credit or tax advice?',
				a: 'No. It answers general questions about your firm and books a call with your licensed or registered team.',
			},
			{
				q: 'Does it work with my existing phone number?',
				a: 'Yes. Calls can be forwarded to the agent at all times, after hours only, or when your team is busy.',
			},
		],
	},
	{
		slug: 'answer-engine-optimisation',
		title: 'Answer Engine Optimisation (AEO)',
		summary:
			'Get your firm named in answers from ChatGPT, Gemini, Claude, Perplexity and Google AI Overviews, with clear pages, structured data and consistent facts.',
		tags: ['AEO', 'Structured data', 'AI search'],
		headline: ['Be the answer', 'AI gives.'],
		lead: 'Buyers now ask AI assistants which firm to call. Answer engine optimisation makes your services, prices and expertise clear enough for those assistants to understand, quote and recommend.',
		seoTitle: 'Answer Engine Optimisation Services Australia | VCPility',
		seoDescription: 'Answer engine optimisation for Australian professional services: help ChatGPT, Gemini, Claude, Perplexity and Google AI Overviews understand your firm.',
		keywords: 'answer engine optimisation Australia, AEO services, generative engine optimisation, how to show up in ChatGPT, AI search optimisation for accountants',
		facts: [
			{ label: 'Best for', value: 'Firms that want to be found in AI answers' },
			{ label: 'You get', value: 'Pages, schema, entity data & reports' },
			{ label: 'Included in', value: 'Dominate plan, or as an add-on' },
		],
		overview:
			'AI assistants answer from pages they can read and trust. If your services, prices and location are vague, scattered or trapped in images, the assistant names someone else. AEO fixes the source material.',
		image: { src: seoPhoto, alt: 'Laptop showing analytics charts on a desk', label: 'Search', caption: 'Clear facts that AI can quote', position: '50% 50%' },
		included: [
			{
				title: 'Answer-first pages',
				desc: 'Each service page opens with a direct answer to the question buyers ask, then the detail.',
			},
			{
				title: 'FAQ content and schema',
				desc: 'Real buyer questions answered on the page and marked up with FAQPage structured data.',
			},
			{
				title: 'Entity consistency',
				desc: 'Your firm name, services, location and contact details stated the same way across your site and listings.',
			},
			{
				title: 'Comparison content',
				desc: 'Clear tables that explain options and prices, which AI assistants quote heavily.',
			},
			{
				title: 'Listings and citations',
				desc: 'Profiles on the directories and lists that AI assistants read when they answer.',
			},
			{
				title: 'Monthly AI answer check',
				desc: 'We ask the same buyer questions on major AI assistants each month and report who they name.',
			},
		],
		steps: [
			{ title: 'Baseline', desc: 'We ask buyer questions on ChatGPT, Gemini, Claude and Perplexity and record who is named today.' },
			{ title: 'Fix the source', desc: 'We rewrite key pages answer-first and add structured data and FAQs.' },
			{ title: 'Build citations', desc: 'We complete listings and profiles that AI assistants read.' },
			{ title: 'Measure monthly', desc: 'We repeat the same questions and report movement.' },
		],
		stack: ['Schema.org', 'FAQPage', 'llms.txt', 'Google Search Console', 'IndexNow', 'Bing Webmaster Tools'],
		faqs: [
			{
				q: 'What is answer engine optimisation?',
				a: 'AEO is the work of making your website and listings clear enough that AI assistants such as ChatGPT, Gemini, Claude and Perplexity can understand your firm and include it in their answers.',
			},
			{
				q: 'Can you guarantee ChatGPT will recommend my firm?',
				a: 'No one can guarantee that. We improve what AI assistants read about you and measure the answers each month, so you can see progress.',
			},
			{
				q: 'How much does AEO cost?',
				a: 'Advanced SEO and AEO is included in the Dominate plan, at $490 + GST a month billed annually, or $590 month to month. Elevate clients can add AI-powered daily SEO and AEO with 20 new pages a month for $180 + GST a month.',
			},
			{
				q: 'Is AEO different from SEO?',
				a: 'They overlap. SEO helps you rank in Google results. AEO makes your content quotable inside AI answers. We do both together.',
			},
			{
				q: 'How long does it take?',
				a: 'New pages are usually indexed within a few weeks. AI answers change more slowly, so we track them monthly.',
			},
		],
	},
	{
		slug: 'ads-management',
		title: 'Google & Meta Ads Management',
		summary:
			'Google, Meta and LinkedIn ads managed for professional services firms, with every lead answered by AI and tracked through to a booked meeting.',
		tags: ['Google Ads', 'Meta Ads', 'Lead tracking'],
		headline: ['Ads that turn into', 'booked meetings.'],
		lead: 'We manage your Google, Meta and LinkedIn campaigns and connect every lead to your CRM and AI agents, so you see which ads produce meetings, not just clicks.',
		seoTitle: 'Google and Meta Ads for Professional Firms | VCPility',
		seoDescription: 'Google, Meta and LinkedIn ads management for Australian professional services firms, with every lead answered fast and tracked to a booked meeting.',
		keywords: 'Google Ads management for accountants, Meta ads for financial planners, PPC management Australia, LinkedIn ads for professional services, ads management for mortgage brokers',
		facts: [
			{ label: 'Best for', value: 'Firms ready to buy demand' },
			{ label: 'You get', value: 'Campaigns, landing pages & lead tracking' },
			{ label: 'Add-on from', value: '$300 + GST a month' },
		],
		overview:
			'Most ad budgets are wasted after the click: slow replies, no follow-up and no tracking. We manage the campaigns and the response together, so paid leads are answered in minutes and measured to the meeting.',
		image: { src: wireframePhoto, alt: 'Pen resting on hand-drawn page sketches on a desk', label: 'Campaigns', caption: 'From click to booked meeting', position: '50% 45%' },
		included: [
			{
				title: 'Campaign set-up',
				desc: 'Search, social and LinkedIn campaigns built around the clients you want.',
			},
			{
				title: 'Landing pages',
				desc: 'Dedicated pages for each campaign, built to convert.',
			},
			{
				title: 'Instant lead response',
				desc: 'AI agents reply to every ad lead in minutes and book a meeting.',
			},
			{
				title: 'CRM tracking',
				desc: 'Each lead tagged by campaign, so you see cost per meeting, not just cost per click.',
			},
			{
				title: 'Monthly optimisation',
				desc: 'Budgets, keywords, audiences and ads adjusted every month from the results.',
			},
			{
				title: 'Plain reporting',
				desc: 'A monthly report of spend, leads, meetings and new clients.',
			},
		],
		steps: [
			{ title: 'Plan', desc: 'We agree the target client, offer, budget and the result you need.' },
			{ title: 'Build', desc: 'We set up campaigns, tracking and landing pages, connected to your CRM.' },
			{ title: 'Launch', desc: 'Campaigns go live with AI follow-up on every lead.' },
			{ title: 'Optimise', desc: 'We review results monthly and move budget to what books meetings.' },
		],
		stack: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'VCPility CRM', 'Google Analytics', 'Landing pages'],
		faqs: [
			{
				q: 'How much does ads management cost?',
				a: 'Ads management is $300 + GST a month billed annually, or $350 + GST month to month, as an add-on to a VCPility plan. Your ad spend is paid to the platforms separately.',
			},
			{
				q: 'Which platforms do you manage?',
				a: 'Google, Meta (Facebook and Instagram) and LinkedIn.',
			},
			{
				q: 'Do I need a VCPility plan?',
				a: 'Yes. Ads management is an add-on, so every lead flows into your CRM and is answered by your AI agents.',
			},
			{
				q: 'How do you measure success?',
				a: 'By booked meetings and new clients from each campaign, tracked in your CRM, not by clicks alone.',
			},
			{
				q: 'Can you advertise financial products?',
				a: 'We advertise your firm and services. Ad copy for regulated services is approved by you before it runs.',
			},
		],
	},
	{
		slug: 'reputation-management',
		title: 'Google Reviews & Reputation',
		summary:
			'Automatic Google review requests, review monitoring and Google Business Profile management, so prospects choose your firm when they compare.',
		tags: ['Google reviews', 'Business Profile', 'Monitoring'],
		headline: ['More reviews.', 'More trust.'],
		lead: 'We ask happy clients for a Google review at the right moment, monitor what people say about you and keep your Google Business Profile current, so you stand out when prospects compare firms.',
		seoTitle: 'Google Reviews and Reputation Management | VCPility',
		seoDescription: 'Google review requests, review monitoring and Business Profile management for Australian accountants, planners, brokers and professional services firms.',
		keywords: 'Google review management Australia, reputation management for accountants, get more Google reviews, Google Business Profile management, online reviews for financial planners',
		facts: [
			{ label: 'Best for', value: 'Firms with happy clients but few reviews' },
			{ label: 'You get', value: 'Review requests, monitoring & profile care' },
			{ label: 'Included from', value: 'Launch plan' },
		],
		overview:
			'Prospects read reviews before they call. Most happy clients would leave one if asked at the right time in the right way. We make the ask automatic and keep your profile accurate.',
		image: { src: teamPhoto, alt: 'Four people working together at a wooden table with notebooks, drinks and a laptop', label: 'Reputation', caption: 'Happy clients, asked at the right time', position: '50% 50%' },
		included: [
			{
				title: 'Automatic review requests',
				desc: 'A short email or SMS asks each client for a review after the engagement.',
			},
			{
				title: 'Review monitoring',
				desc: 'New reviews flagged to your team, so you can reply quickly.',
			},
			{
				title: 'Reply support',
				desc: 'Suggested replies for positive and negative reviews, approved by you.',
			},
			{
				title: 'Business Profile management',
				desc: 'Hours, services, photos and posts kept current on your Google Business Profile.',
			},
			{
				title: 'Review widgets',
				desc: 'Your real Google reviews shown on your website as text that search engines can read.',
			},
			{
				title: 'Reporting',
				desc: 'Monthly review count and rating trend.',
			},
		],
		steps: [
			{ title: 'Connect', desc: 'We connect your Google Business Profile and CRM.' },
			{ title: 'Set the timing', desc: 'We agree when each client is asked, based on your workflow.' },
			{ title: 'Launch', desc: 'Requests go out automatically and new reviews are monitored.' },
			{ title: 'Report', desc: 'You see review growth and replies each month.' },
		],
		stack: ['Google Business Profile', 'VCPility CRM', 'Email & SMS', 'Review widgets'],
		faqs: [
			{
				q: 'How do I get more Google reviews?',
				a: 'Ask every happy client at the right moment with a simple link. We automate the request by email or SMS after each engagement.',
			},
			{
				q: 'Is reputation management included in a plan?',
				a: 'Automatic Google review monitoring is included from Launch, at $70 + GST a month billed annually, or $85 month to month. Reputation management and Google Business Profile management are included from Elevate.',
			},
			{
				q: 'Can you remove bad reviews?',
				a: 'We cannot remove genuine reviews. We help you reply professionally and flag reviews that breach Google policies.',
			},
			{
				q: 'Do you write reviews?',
				a: 'No. Every review comes from a real client. Fake or incentivised reviews breach Google policy and Australian Consumer Law.',
			},
			{
				q: 'Which review sites do you cover?',
				a: 'Google first, because it drives local search. Facebook reviews can be monitored too.',
			},
		],
	},
	{
		slug: 'crm-setup',
		title: 'Done-for-You CRM Set-up',
		summary:
			'Your CRM, pipeline, booking calendar and follow-up set up for you, with contacts migrated and your team trained, so you start winning clients from day one.',
		tags: ['CRM set-up', 'Migration', 'Training'],
		headline: ['Your CRM,', 'set up for you.'],
		lead: 'We set up your VCPility CRM around how your firm works: pipeline stages, booking calendar, forms, follow-up and reporting, with your contacts imported and your team trained.',
		seoTitle: 'Done-for-You CRM Set-up for Professional Firms | VCPility',
		seoDescription: 'Done-for-you CRM set-up for Australian accountants, bookkeepers, planners, brokers and start-ups: pipeline, booking, follow-up and team training.',
		keywords: 'CRM setup service Australia, done for you CRM, CRM implementation for accountants, CRM migration Australia, CRM for small business setup',
		facts: [
			{ label: 'Best for', value: 'Firms tracking clients in spreadsheets' },
			{ label: 'You get', value: 'Pipeline, booking, follow-up & training' },
			{ label: 'Plans from', value: '$50 + GST a month' },
		],
		overview:
			'A CRM only works when it matches how your firm wins clients and your team actually uses it. We build it for you, so it is useful from the first enquiry.',
		image: { src: webAppsPhoto, alt: 'Developer typing code on a laptop', label: 'CRM', caption: 'Built around how you win clients', position: '50% 50%' },
		included: [
			{
				title: 'Pipeline design',
				desc: 'Stages from first enquiry to signed engagement, matched to your process.',
			},
			{
				title: 'Contact import',
				desc: 'Your existing clients and prospects imported and tagged.',
			},
			{
				title: 'Booking calendar',
				desc: 'Online booking connected to your team calendars, with reminders.',
			},
			{
				title: 'Forms and chat',
				desc: 'Website forms and chat widget feeding straight into the CRM.',
			},
			{
				title: 'Follow-up sequences',
				desc: 'Email and SMS that chase proposals and missing information.',
			},
			{
				title: 'Team training',
				desc: 'A walkthrough so every team member knows what to do each day.',
			},
		],
		steps: [
			{ title: 'Discover', desc: 'We map how enquiries arrive and how a prospect becomes a client.' },
			{ title: 'Build', desc: 'We set up the pipeline, calendar, forms and follow-up.' },
			{ title: 'Import', desc: 'We bring in your contacts and test every path.' },
			{ title: 'Train', desc: 'We train your team and stay on hand as you start.' },
		],
		stack: ['VCPility CRM', 'Online booking', 'Chat widget', 'Email & SMS', 'Mobile app'],
		faqs: [
			{
				q: 'How long does CRM set-up take?',
				a: 'The Starter front desk package goes live in about 60 minutes. Fuller set-ups with pipelines, follow-up and imports are scheduled during onboarding.',
			},
			{
				q: 'How much does it cost?',
				a: 'Starter is $50 + GST a month. Launch is $70 + GST a month billed annually, or $85 month to month, and includes the chat widget and calendar set up for you.',
			},
			{
				q: 'Can you move our data from another CRM or spreadsheet?',
				a: 'Yes. We import contacts from spreadsheets and most CRMs during onboarding.',
			},
			{
				q: 'Does it work with our practice software?',
				a: 'We connect common tools and can build custom integrations where needed.',
			},
			{
				q: 'Do we get training?',
				a: 'Yes. Every set-up includes a walkthrough for your team.',
			},
		],
	},
	{
		slug: 'cybersecurity-partner',
		title: 'Cybersecurity Partner',
		summary:
			'Cybersecurity for professional services firms, delivered by Sharktech Global: security health checks, account protection and backups for client data.',
		tags: ['Cybersecurity', 'Essential Eight', 'Client data'],
		headline: ['Protect client data,', 'before it is tested.'],
		lead: 'Professional services firms hold sensitive client information. Sharktech Global, our parent company, finds the gaps in your accounts, devices and backups and fixes them, alongside your VCPility growth systems.',
		seoTitle: 'Cybersecurity for Professional Services Firms | VCPility',
		seoDescription: 'Cybersecurity for Australian accountants, planners and brokers from Sharktech Global: health checks, account protection and tested backups for client data.',
		keywords: 'cybersecurity for accountants Australia, cyber security for financial planners, Essential Eight for small business, cybersecurity health check, data security for mortgage brokers',
		partner: { label: 'See Sharktech cybersecurity', href: 'https://www.sharktech.com.au/services/cybersecurity' },
		facts: [
			{ label: 'Best for', value: 'Firms holding sensitive client data' },
			{ label: 'Delivered by', value: 'Sharktech Global' },
			{ label: 'Health check from', value: '$2,600' },
		],
		overview:
			'Most breaches in small firms start with a weak password, an unpatched device or an untested backup. A security health check finds those gaps before someone else does.',
		image: { src: hostingPhoto, alt: 'Two people with tablets in a server room', label: 'Security', caption: 'Gaps found and fixed', position: '50% 50%' },
		included: [
			{
				title: 'Security health check',
				desc: 'A review of accounts, devices, email and backups against practical controls.',
			},
			{
				title: 'Account protection',
				desc: 'Multi-factor authentication and access set up properly for every staff member.',
			},
			{
				title: 'Patching and updates',
				desc: 'Devices and software kept current, closing known weaknesses.',
			},
			{
				title: 'Tested backups',
				desc: 'Backups that are tested, so client files can be restored.',
			},
			{
				title: 'Staff awareness',
				desc: 'Practical guidance on phishing and safe handling of client information.',
			},
			{
				title: 'Growth tools secured',
				desc: 'Your CRM, website and AI agents included in the same security review.',
			},
		],
		steps: [
			{ title: 'Discovery call', desc: 'A free call to understand your team, systems and client data.' },
			{ title: 'Health check', desc: 'Sharktech Global reviews your environment and reports the gaps.' },
			{ title: 'Fix', desc: 'Agreed fixes are made in priority order.' },
			{ title: 'Maintain', desc: 'Ongoing protection through Sharktech managed IT, or reviewed periodically.' },
		],
		stack: ['Microsoft 365 security', 'Multi-factor authentication', 'Endpoint protection', 'Tested backups', 'Essential Eight'],
		faqs: [
			{
				q: 'Does VCPility provide cybersecurity?',
				a: 'Yes, through Sharktech Global. VCPility is the web services division of Sharktech Global, which delivers cybersecurity and managed IT.',
			},
			{
				q: 'How much does a cybersecurity health check cost?',
				a: 'Sharktech Global security health checks start from $2,600. The fixes are quoted in writing after the check.',
			},
			{
				q: 'What is the Essential Eight?',
				a: 'It is a set of eight baseline mitigation strategies published by the Australian Cyber Security Centre. Sharktech uses it as a practical reference for small firms.',
			},
			{
				q: 'Do you handle our CRM and website too?',
				a: 'Yes. Your VCPility CRM, website and AI agents are included in the same review.',
			},
			{
				q: 'Who is this for?',
				a: 'Accountants, bookkeepers, financial planners, mortgage brokers and other firms that hold sensitive client information.',
			},
		],
	},
];
