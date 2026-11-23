/** Visible homepage FAQ and the matching FAQPage node. One source so the two stay the same. */
export const behindQuestion = 'Who is behind VCPility?';

export const behindAnswer =
	'VCPility is the web services division of Sharktech Global, an Australian technology company led by Dainu Devis, CEO. Our office is in Liverpool NSW, with client meetings in South Yarra by appointment.';

export const behindFaqSchema = {
	'@context': 'https://schema.org',
	'@type': 'FAQPage',
	mainEntity: [
		{
			'@type': 'Question',
			name: behindQuestion,
			acceptedAnswer: { '@type': 'Answer', text: behindAnswer },
		},
	],
};
