export type EventRegion = 'Europe' | 'Americas' | 'Middle East' | 'Asia';

export interface TradeEvent {
  slug: string;
  name: string;
  startDate: string; // ISO 8601
  endDate: string;   // ISO 8601
  displayDate: string;
  location: {
    venue: string;
    city: string;
    country: string;
    region: EventRegion;
  };
  officialUrl: string;
  description: string;
  tortillaRelevance: string;
  emoji: string;
}

const events: TradeEvent[] = [
  {
    slug: 'gulfood-dubai-2026',
    name: 'Gulfood 2026',
    startDate: '2026-01-26',
    endDate: '2026-01-30',
    displayDate: 'January 26–30, 2026',
    location: {
      venue: 'Dubai World Trade Centre',
      city: 'Dubai',
      country: 'UAE',
      region: 'Middle East',
    },
    officialUrl: 'https://www.gulfood.com/',
    description:
      'Gulfood is the world\'s largest annual food and beverage trade show, held at the Dubai World Trade Centre. It attracts over 5,000 exhibitors and 97,000+ trade visitors from 190+ countries, covering food ingredients, processing technology, and finished food products across every major category.',
    tortillaRelevance:
      'Global tortilla and flatbread innovation trends — including frozen and ambient formats — are prominently showcased at Gulfood. The event is critical for tortilla suppliers targeting the GCC, MENA and wider Asian export markets, where demand for flatbreads and wraps is growing rapidly.',
    emoji: '🇦🇪',
  },
  {
    slug: 'alimentaria-barcelona-2026',
    name: 'Alimentaria 2026',
    startDate: '2026-03-23',
    endDate: '2026-03-26',
    displayDate: 'March 23–26, 2026',
    location: {
      venue: 'Fira de Barcelona',
      city: 'Barcelona',
      country: 'Spain',
      region: 'Europe',
    },
    officialUrl: 'https://www.alimentaria.com/',
    description:
      'Alimentaria is one of Europe\'s leading food and beverage trade fairs, co-located with Hostelco. Held biennially in Barcelona, it brings together food manufacturers, retailers, distributors and foodservice professionals from across Southern Europe and Latin America.',
    tortillaRelevance:
      'Global tortilla and flatbread innovation trends, including private label and tortilla supply chain optimisation, are key discussion areas at Alimentaria. Spain is one of Europe\'s fastest-growing tortilla markets, making this show essential for building European distribution partnerships.',
    emoji: '🇪🇸',
  },
  {
    slug: 'nra-show-chicago-2026',
    name: 'National Restaurant Association Show 2026',
    startDate: '2026-05-16',
    endDate: '2026-05-19',
    displayDate: 'May 16–19, 2026',
    location: {
      venue: 'McCormick Place',
      city: 'Chicago',
      country: 'USA',
      region: 'Americas',
    },
    officialUrl: 'https://www.nationalrestaurantshow.com/',
    description:
      'The National Restaurant Association Show is the foodservice industry\'s most important annual event in North America. Held at Chicago\'s McCormick Place, it hosts 2,000+ exhibitors and 57,000+ foodservice professionals across equipment, technology, and food & beverage categories.',
    tortillaRelevance:
      'Global tortilla and flatbread innovation trends for quick-service restaurants and foodservice operators are central to the NRA Show. This is the top venue for tortilla suppliers seeking entry into the US foodservice and QSR supply chain.',
    emoji: '🇺🇸',
  },
  {
    slug: 'sial-paris-2026',
    name: 'SIAL Paris 2026',
    startDate: '2026-10-18',
    endDate: '2026-10-22',
    displayDate: 'October 18–22, 2026',
    location: {
      venue: 'Paris Nord Villepinte',
      city: 'Paris',
      country: 'France',
      region: 'Europe',
    },
    officialUrl: 'https://www.sialparis.com/',
    description:
      'SIAL Paris is the world\'s largest food innovation exhibition, welcoming 7,000+ exhibitors and 265,000+ trade visitors from 200+ countries biennially. It is the definitive event for international food sourcing, new product launches and retail buyer networking across every category.',
    tortillaRelevance:
      'Global tortilla and flatbread innovation trends are well represented at SIAL Paris, with dedicated sections for ethnic foods and flatbreads. For international tortilla supply chain professionals, SIAL is the premier venue for connecting with European retail and foodservice buyers.',
    emoji: '🇫🇷',
  },
];

export default events;
