import type { ImageMetadata } from 'astro';
import accountingPhoto from '../assets/home/industries/accounting.jpg';
import teamPhoto from '../assets/web-services/team.jpg';
import automationPhoto from '../assets/web-services/services/integrations-ai-automation.jpg';
import webAppsPhoto from '../assets/web-services/services/web-applications.jpg';
import wireframePhoto from '../assets/web-services/wireframe.jpg';

/* Industry pages: one entry per professional services segment VCPility serves.
   Each page lives at /industries/<slug> and is written problem first, then solution.
   VCPility owns client acquisition (enquiries, follow-up, bookings, reviews).
   Practice operations for accounting firms sit with AccrualOS, a Sharktech Global sibling. */

export interface Industry {
	slug: string;
	/** Short name for menus, the footer and the "more industries" list */
	name: string;
	title: string;
	summary: string;
	headline: [string, string];
	lead: string;
	seoTitle: string;
	seoDescription: string;
	keywords: string;
	facts: { label: string; value: string }[];
	overview: string;
	image: { src: ImageMetadata; alt: string; label: string; caption: string; position?: string };
	/** The problems this segment has today */
	problems: { title: string; desc: string }[];
	/** What VCPility sets up to fix them */
	included: { title: string; desc: string }[];
	steps: { title: string; desc: string }[];
	/** VCPility tools used on this page's setup */
	tools: string[];
	faqs: { q: string; a: string }[];
}

const steps = [
	{ title: 'Strategy call', desc: 'We map where your enquiries come from today and where they are lost.' },
	{ title: 'Build', desc: 'We set up your CRM pipeline, AI agents, booking and follow-up around how your firm works.' },
	{ title: 'Go live', desc: 'Every call, form and chat is captured and answered from the first day.' },
	{ title: 'Improve', desc: 'We report enquiries, bookings and new clients each month, and tune what converts.' },
];

const tools = ['CRM pipeline', 'AI voice agent', 'AI chatbot', 'Online booking', 'Email and SMS', 'Google reviews', 'Reporting'];

export const industries: Industry[] = [
	{
		slug: 'accountants',
		name: 'Accountants',
		title: 'CRM and AI Automation for Accountants',
		summary: 'Win more new clients in tax time and all year. Every call and enquiry answered, booked and followed up.',
		headline: ['More new clients.', 'Less chasing.'],
		lead: 'VCPility answers every enquiry your accounting firm gets, books the first meeting and follows up until the client signs. Your team stays on billable work.',
		seoTitle: 'CRM and AI Automation for Accountants in Australia | VCPility',
		seoDescription:
			'An Australian-led CRM and AI automation system for accounting firms. Answer every enquiry, book first meetings automatically and follow up new clients without extra admin.',
		keywords:
			'CRM for accountants Australia, accounting firm CRM, client onboarding automation accounting firm, lead management for accountants, AI receptionist for accountants',
		facts: [
			{ label: 'Best for', value: 'Accounting firms of 1 to 50 staff' },
			{ label: 'Fixes', value: 'Missed calls and slow follow-up' },
			{ label: 'Live in', value: 'Days, not months' },
		],
		overview:
			'In tax time the phone never stops. Enquiries go to voicemail, website forms sit unread and good clients book with the firm that answered first. VCPility makes sure that firm is yours.',
		image: {
			src: accountingPhoto,
			alt: 'An accountant reviewing client figures at a desk',
			label: 'Accountants',
			caption: 'Every enquiry captured, answered and booked.',
		},
		problems: [
			{ title: 'Calls missed in peak season', desc: 'Staff are with clients. New enquiries ring out and never call back.' },
			{ title: 'Slow follow-up', desc: 'Website forms wait days for a reply. The prospect has already chosen another firm.' },
			{ title: 'Referrals not tracked', desc: 'Nobody knows which referral partners send the best clients.' },
		],
		included: [
			{ title: 'AI voice agent', desc: 'Answers calls around the clock, qualifies the enquiry and books a first meeting.' },
			{ title: 'New client pipeline', desc: 'Every lead from your website, Google and referrals in one CRM, from enquiry to engagement.' },
			{ title: 'Automated follow-up', desc: 'Email and SMS sequences that chase proposals and missing details for you.' },
			{ title: 'Online booking', desc: 'Prospects book a discovery call into your calendar without phone tag.' },
			{ title: 'Google reviews', desc: 'Automatic review requests after each engagement, so you rank higher in local search.' },
			{ title: 'Referral tracking', desc: 'See which partners and campaigns bring in your most valuable clients.' },
		],
		steps,
		tools,
		faqs: [
			{
				q: 'Does VCPility replace my practice management software?',
				a: 'No. VCPility handles winning new clients: enquiries, follow-up, bookings and reviews. Your practice management and accounting software keep running your client work. For practice workflow automation, Sharktech Global also builds AccrualOS.',
			},
			{
				q: 'Can the AI voice agent answer calls during tax time?',
				a: 'Yes. It answers every call, day or night, handles common questions, books first meetings and passes anything complex to your team with the full conversation attached.',
			},
			{
				q: 'How quickly can my firm go live?',
				a: 'Most firms are capturing and answering enquiries within days. Full builds with a new website are scheduled at onboarding.',
			},
			{
				q: 'How much does it cost?',
				a: 'Plans are published in Australian dollars on the plans page, billed monthly or annually, plus GST. The AI voice agent is included from the Elevate plan.',
			},
		],
	},
	{
		slug: 'bookkeepers',
		name: 'Bookkeepers',
		title: 'CRM and AI Automation for Bookkeepers',
		summary: 'Look as responsive as a big firm. Enquiries answered in minutes, new clients onboarded without the back and forth.',
		headline: ['Answer every enquiry.', 'Even mid-reconciliation.'],
		lead: 'VCPility gives bookkeepers a CRM, an AI agent and automated follow-up, so new clients are captured and booked while you keep working.',
		seoTitle: 'CRM and Client Automation for Bookkeepers in Australia | VCPility',
		seoDescription:
			'An Australian-led CRM for bookkeepers. Capture every enquiry, reply in minutes with AI, book discovery calls and automate new client follow-up.',
		keywords: 'CRM for bookkeepers Australia, bookkeeping CRM, bookkeeper lead follow-up, client onboarding for bookkeepers, AI chatbot for bookkeepers',
		facts: [
			{ label: 'Best for', value: 'Sole bookkeepers and small practices' },
			{ label: 'Fixes', value: 'Lost enquiries and admin load' },
			{ label: 'Live in', value: 'Days, not months' },
		],
		overview:
			'Most bookkeepers work alone or in small teams. When you are heads down in a client file, new enquiries wait. VCPility replies for you, books the call and keeps the lead warm.',
		image: {
			src: wireframePhoto,
			alt: 'Planning notes and a laptop on a desk',
			label: 'Bookkeepers',
			caption: 'Run like a bigger practice, without the headcount.',
		},
		problems: [
			{ title: 'No time to reply', desc: 'Client work comes first. New enquiries wait, then go cold.' },
			{ title: 'Onboarding back and forth', desc: 'Chasing details and documents by email eats unbillable hours.' },
			{ title: 'Hard to stand out', desc: 'Prospects compare several bookkeepers. The fastest, most reviewed one wins.' },
		],
		included: [
			{ title: 'AI chatbot', desc: 'Replies to website and social enquiries in minutes and books a discovery call.' },
			{ title: 'Simple CRM', desc: 'Every prospect and client in one place, with a clear pipeline.' },
			{ title: 'Onboarding sequences', desc: 'Automated emails and SMS that collect what you need from new clients.' },
			{ title: 'Online booking', desc: 'Clients pick a time that suits you, with reminders sent automatically.' },
			{ title: 'Google reviews', desc: 'Review requests after each engagement, so you show up first locally.' },
			{ title: 'Reporting', desc: 'See enquiries, bookings and new clients at a glance.' },
		],
		steps,
		tools,
		faqs: [
			{
				q: 'Is VCPility affordable for a sole bookkeeper?',
				a: 'Yes. The Starter and Launch plans are built for sole operators, with published Australian pricing on the plans page.',
			},
			{
				q: 'Does it replace my bookkeeping software?',
				a: 'No. VCPility handles enquiries, follow-up, bookings and reviews. Your bookkeeping software keeps doing the books.',
			},
			{
				q: 'Can it collect client details for onboarding?',
				a: 'Yes. Forms and automated follow-up gather the details you need, and every response lands in the client record.',
			},
		],
	},
	{
		slug: 'financial-planners',
		name: 'Financial Planners',
		title: 'Lead Management and AI Automation for Financial Planners',
		summary: 'Turn more enquiries into first appointments. Fast replies, automated follow-up and a clear new client pipeline.',
		headline: ['More first meetings.', 'Fewer lost enquiries.'],
		lead: 'VCPility captures every enquiry your advice practice receives, replies in minutes and books the first appointment, alongside the advice software you already use.',
		seoTitle: 'Lead Management and AI Automation for Financial Planners | VCPility',
		seoDescription:
			'Australian-led lead management for financial planners and advisers. Reply to every enquiry in minutes, book first appointments automatically and nurture prospects until they are ready.',
		keywords:
			'CRM for financial planners Australia, lead follow-up for financial advisers, financial adviser marketing automation, client acquisition for financial planners',
		facts: [
			{ label: 'Best for', value: 'Advice practices and planners' },
			{ label: 'Fixes', value: 'Slow replies and long sales cycles' },
			{ label: 'Works with', value: 'Your existing advice software' },
		],
		overview:
			'People rarely sign on the first call. They research, compare and wait. Practices that reply fast and stay in touch win the client. VCPility does both, automatically.',
		image: {
			src: teamPhoto,
			alt: 'A planner meeting with clients around a table',
			label: 'Financial planners',
			caption: 'Stay in touch until the prospect is ready.',
		},
		problems: [
			{ title: 'Long decision cycles', desc: 'Prospects take weeks or months to commit. Without follow-up they drift away.' },
			{ title: 'Enquiries arrive after hours', desc: 'Most research happens in the evening. Replies the next day are too late.' },
			{ title: 'Marketing without measurement', desc: 'Seminars, referrals and ads run, but nobody knows which bring in clients.' },
		],
		included: [
			{ title: 'Instant replies', desc: 'An AI agent answers web and social enquiries in minutes and books a first appointment.' },
			{ title: 'Nurture sequences', desc: 'Helpful email and SMS touchpoints you approve, sent on schedule.' },
			{ title: 'Prospect pipeline', desc: 'Every prospect from first enquiry to signed client, in one view.' },
			{ title: 'Event and seminar follow-up', desc: 'Registrations, reminders and post-event follow-up, all automated.' },
			{ title: 'Reviews and referrals', desc: 'Prompt happy clients for reviews and referrals at the right moment.' },
			{ title: 'Source reporting', desc: 'See which channels produce appointments and new clients.' },
		],
		steps,
		tools,
		faqs: [
			{
				q: 'Does VCPility replace my advice or compliance software?',
				a: 'No. VCPility handles client acquisition: enquiries, follow-up, bookings and reviews. Your advice and compliance platforms stay in place, and we can connect them where an API is available.',
			},
			{
				q: 'Who writes the follow-up messages?',
				a: 'We draft them with you, and nothing is sent until you approve it. Your licensee obligations stay with your practice.',
			},
			{
				q: 'Does the AI give financial advice?',
				a: 'No. The AI agent answers general questions about your practice, qualifies the enquiry and books a meeting. Advice always comes from your advisers.',
			},
		],
	},
	{
		slug: 'mortgage-brokers',
		name: 'Mortgage Brokers',
		title: 'Lead Capture and AI Follow-Up for Mortgage Brokers',
		summary: 'Reply to every borrower first. AI answers enquiries in minutes and books the discovery call.',
		headline: ['Be the first broker', 'they hear from.'],
		lead: 'Borrowers contact several brokers at once. VCPility replies in minutes, day or night, books the discovery call and keeps every lead in your pipeline.',
		seoTitle: 'Lead Capture and AI Follow-Up for Mortgage Brokers | VCPility',
		seoDescription:
			'Australian-led lead capture for mortgage brokers. AI replies to borrower enquiries in minutes, books discovery calls and follows up automatically, alongside your broker CRM.',
		keywords:
			'CRM for mortgage brokers Australia, mortgage broker lead follow-up, mortgage broker marketing automation, AI assistant for mortgage brokers',
		facts: [
			{ label: 'Best for', value: 'Brokers and brokerages' },
			{ label: 'Fixes', value: 'Slow first response' },
			{ label: 'Works with', value: 'Your existing broker CRM' },
		],
		overview:
			'A borrower ready to buy will not wait. The first broker to reply usually gets the deal. VCPility makes sure you reply first, every time, without living on your phone.',
		image: {
			src: automationPhoto,
			alt: 'Automated workflows on a laptop screen',
			label: 'Mortgage brokers',
			caption: 'Every borrower enquiry answered in minutes.',
		},
		problems: [
			{ title: 'Speed decides the deal', desc: 'Borrowers enquire with several brokers. The slowest reply loses.' },
			{ title: 'Leads from many places', desc: 'Website, Facebook, referrals and portals all land in different inboxes.' },
			{ title: 'Past clients forgotten', desc: 'Refinance and repeat opportunities slip because nobody follows up.' },
		],
		included: [
			{ title: 'AI first response', desc: 'Replies to new enquiries in minutes, asks the qualifying questions and books a call.' },
			{ title: 'One lead inbox', desc: 'Website, social and referral leads in one CRM pipeline.' },
			{ title: 'Follow-up sequences', desc: 'Automated check-ins until the borrower is ready to proceed.' },
			{ title: 'Refinance reminders', desc: 'Timed outreach to past clients when it is worth reviewing their loan.' },
			{ title: 'Google reviews', desc: 'Review requests after settlement to build trust with new borrowers.' },
			{ title: 'Lead source reporting', desc: 'Know which channels bring in settled loans.' },
		],
		steps,
		tools,
		faqs: [
			{
				q: 'Does VCPility replace my broker CRM or aggregator software?',
				a: 'No. VCPility captures and converts new enquiries. Your broker CRM and aggregator tools keep handling applications, and we can connect them where an API is available.',
			},
			{
				q: 'Does the AI give credit advice?',
				a: 'No. It answers general questions, gathers the basics and books a call with you. Credit assistance always comes from your licensed team.',
			},
			{
				q: 'Can it follow up past clients for refinancing?',
				a: 'Yes. Timed campaigns reach past clients at the right moment, so repeat business is not left to memory.',
			},
		],
	},
	{
		slug: 'startups',
		name: 'Start-ups',
		title: 'CRM, AI Agents and Automation for Start-ups',
		summary: 'Run like a bigger company from day one. Sales, follow-up and support automated, without a big team.',
		headline: ['Scale the business.', 'Not the headcount.'],
		lead: 'VCPility gives founders a done-for-you CRM, AI agents and automation, so every lead is captured and followed up while you build the business.',
		seoTitle: 'CRM, AI Agents and Automation for Start-ups in Australia | VCPility',
		seoDescription:
			'An Australian-led, done-for-you CRM and AI automation system for start-ups and entrepreneurs. Capture every lead, follow up automatically and grow without a large team.',
		keywords:
			'CRM for startups Australia, AI automation for entrepreneurs, startup marketing automation Australia, AI agents for small business, done for you CRM',
		facts: [
			{ label: 'Best for', value: 'Founders and early-stage teams' },
			{ label: 'Fixes', value: 'Too many tools, too little time' },
			{ label: 'Live in', value: 'Days, not months' },
		],
		overview:
			'Founders wear every hat. Leads arrive while you are pitching, building or hiring, and too many are never followed up. VCPility runs that work for you, in one system.',
		image: {
			src: webAppsPhoto,
			alt: 'A founder working on a laptop with product dashboards',
			label: 'Start-ups',
			caption: 'One system for sales, follow-up and reviews.',
		},
		problems: [
			{ title: 'Too many disconnected tools', desc: 'Forms, inboxes, calendars and spreadsheets that do not talk to each other.' },
			{ title: 'Leads slip while you build', desc: 'No one owns follow-up, so warm prospects go cold.' },
			{ title: 'No sales team yet', desc: 'You need sales and support capacity before you can afford to hire it.' },
		],
		included: [
			{ title: 'Done-for-you setup', desc: 'We build your CRM, pipeline and automations, so you do not lose weeks configuring tools.' },
			{ title: 'AI agents', desc: 'Chat and voice agents that answer, qualify and book prospects day and night.' },
			{ title: 'Website and funnels', desc: 'A fast website and landing pages wired into your CRM, included on Elevate and Dominate.' },
			{ title: 'Email and SMS campaigns', desc: 'Nurture sequences and launches without a marketing hire.' },
			{ title: 'Reviews and reputation', desc: 'Build social proof from your first customers.' },
			{ title: 'Investor-ready reporting', desc: 'Leads, conversion and pipeline numbers you can put in front of investors.' },
		],
		steps,
		tools,
		faqs: [
			{
				q: 'Is VCPility suitable for a start-up with no customers yet?',
				a: 'Yes. Starting with a proper CRM and follow-up from day one means every early lead is captured and every number is measurable.',
			},
			{
				q: 'Do I need technical skills?',
				a: 'No. It is done for you. Our Australian-led team builds and manages the system, and you can still make changes yourself.',
			},
			{
				q: 'Can it grow with us?',
				a: 'Yes. Start on a smaller plan and move up as the team and pipeline grow. Custom plans cover larger builds and integrations.',
			},
		],
	},
	{
		slug: 'ai-receptionist-for-accountants',
		name: 'AI Receptionist for Accountants',
		title: 'AI Receptionist for Accounting Firms',
		summary: 'An Australian-led AI receptionist that answers every call, books appointments and never takes leave in tax time.',
		headline: ['Every call answered.', 'Every season.'],
		lead: 'The VCPility AI receptionist answers your firm’s calls day and night, handles common questions, books appointments and hands complex calls to your team.',
		seoTitle: 'AI Receptionist for Accountants and Accounting Firms in Australia | VCPility',
		seoDescription:
			'An Australian-led AI receptionist for accounting firms. Answers every call, books appointments into your calendar and sends your team a summary, from tax time to year end.',
		keywords:
			'AI receptionist for accountants, AI receptionist accounting firm Australia, virtual receptionist for accountants, AI phone answering for accountants, AI voice agent accounting',
		facts: [
			{ label: 'Best for', value: 'Firms that miss calls in peak season' },
			{ label: 'Answers', value: 'Every call, 24 hours a day' },
			{ label: 'Included on', value: 'Elevate and Dominate plans' },
		],
		overview:
			'A missed call in tax time is a missed client. Hiring extra reception for a few busy months is costly. The VCPility AI receptionist covers every call, every day, at a fraction of the cost.',
		image: {
			src: accountingPhoto,
			alt: 'An accounting office during a busy period',
			label: 'AI receptionist',
			caption: 'Answers, books and briefs your team.',
		},
		problems: [
			{ title: 'Peak season overload', desc: 'Call volumes spike at tax time and staff cannot keep up.' },
			{ title: 'Voicemail loses clients', desc: 'Most callers will not leave a message. They call the next firm.' },
			{ title: 'Interruptions cost hours', desc: 'Routine calls pull accountants away from billable work.' },
		],
		included: [
			{ title: 'Answers every call', desc: 'Day, night and weekends, in a natural voice, with your firm’s details and tone.' },
			{ title: 'Books appointments', desc: 'Puts meetings straight into your calendar and sends confirmations.' },
			{ title: 'Answers common questions', desc: 'Fees, deadlines, documents to bring and office hours, as you set them.' },
			{ title: 'Smart handover', desc: 'Urgent or complex calls go to your team with a full summary.' },
			{ title: 'Call summaries in your CRM', desc: 'Every call logged against the contact, so nothing is lost.' },
			{ title: 'Usage you control', desc: 'Free minutes included on Elevate and Dominate. Set a monthly budget for extra minutes.' },
		],
		steps,
		tools,
		faqs: [
			{
				q: 'How is this different from an answering service?',
				a: 'It answers instantly, around the clock, books directly into your calendar and logs every call in your CRM. There are no hold queues and no per-message fees from a call centre.',
			},
			{
				q: 'What happens with complex or urgent calls?',
				a: 'The AI receptionist recognises them and transfers or escalates to your team, with the full conversation attached.',
			},
			{
				q: 'How much does it cost?',
				a: 'The AI voice agent is included on the Elevate and Dominate plans with free minutes. Extra minutes are charged only while the AI is on a call, at the rate shown on the plans page.',
			},
		],
	},
];
