export interface Author {
  slug: string;
  name: string;
  jobTitle: string;
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
    bio: 'Daniel Ortega is an international food export specialist focused on tortilla and flatbread supply chains across Europe and North America. With over a decade of experience in cross-border food trade, he advises distributors on container logistics, import regulations, and building resilient wholesale supply programmes.',
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
    bio: 'Laura Mitchell is a food manufacturing and quality assurance specialist with deep expertise in tortilla and flatbread production. She guides buyers through international certification frameworks — including BRCGS, IFS, and halal compliance — and advises on product formats for retail and foodservice channels.',
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
    bio: 'Alex Romero is a global food market analyst specialising in the tortilla, flatbread, and wrap category. He tracks distribution channel shifts, demand trends, and competitive dynamics to help importers and distributors make informed sourcing decisions.',
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
