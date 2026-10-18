export interface Author {
  slug: string;
  name: string;
  jobTitle: string;
  /** Precomposed SEO page title (≤60 chars, absolute — not appended to layout template). */
  pageTitle: string;
  bio: string;
  expertise: string[];
  linkedIn: string;
  initials: string;
}

const authors: Author[] = [
  {
    slug: 'daniel-ortega',
    name: 'Daniel Ortega',
    jobTitle: 'Export & International Trade Specialist',
    pageTitle: 'Daniel Ortega | Export & Trade Specialist | TortillaSupplier',
    bio: 'Daniel Ortega is a food export specialist in tortilla and flatbread supply chains across Europe and North America, advising on logistics and import rules.',
    expertise: [
      'International food export',
      'Distributor supply chains',
      'Container logistics',
      'Import & export regulations',
      'Wholesale sourcing strategy',
    ],
    linkedIn: 'https://www.linkedin.com/company/tortillasupplier',
    initials: 'DO',
  },
  {
    slug: 'laura-mitchell',
    name: 'Laura Mitchell',
    jobTitle: 'Food Manufacturing & Quality Specialist',
    pageTitle: 'Laura Mitchell | Food Quality Specialist | TortillaSupplier',
    bio: 'Laura Mitchell is a food manufacturing and QA specialist in tortilla and flatbread production, guiding buyers through BRCGS, IFS and halal certification.',
    expertise: [
      'BRCGS & IFS certification',
      'Halal compliance',
      'Product quality assurance',
      'Food manufacturing standards',
      'Private label production',
    ],
    linkedIn: 'https://www.linkedin.com/company/tortillasupplier',
    initials: 'LM',
  },
  {
    slug: 'alex-romero',
    name: 'Alex Romero',
    jobTitle: 'Global Food Market Analyst',
    pageTitle: 'Alex Romero | Food Market Analyst | TortillaSupplier',
    bio: 'Alex Romero is a global food market analyst specialising in tortillas, flatbreads and wraps, tracking channel shifts and demand for importers and distributors.',
    expertise: [
      'Tortilla market growth trends',
      'Distribution channel analysis',
      'Global foodservice demand',
      'Retail category insights',
      'B2B sourcing intelligence',
    ],
    linkedIn: 'https://www.linkedin.com/company/tortillasupplier',
    initials: 'AR',
  },
];

export default authors;

export function getAuthorByName(name: string): Author | undefined {
  return authors.find((a) => a.name === name);
}
