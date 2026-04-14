export type EventRegion = 'Europe' | 'Americas' | 'Middle East' | 'Asia' | 'United Kingdom';

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
  {
    slug: 'ife-manufacturing-london-2026',
    name: 'IFE Manufacturing 2026',
    startDate: '2026-03-17',
    endDate: '2026-03-19',
    displayDate: 'March 17–19, 2026',
    location: {
      venue: 'ExCeL London',
      city: 'London',
      country: 'United Kingdom',
      region: 'United Kingdom',
    },
    officialUrl: 'https://www.ifemanufacturing.co.uk/',
    description:
      'IFE Manufacturing is the UK\'s leading food and drink manufacturing event, co-located with IFE (International Food & Drink Event) at ExCeL London. It connects food manufacturers with suppliers of ingredients, equipment and technology across the entire UK food production supply chain.',
    tortillaRelevance:
      'As a global provider, we track UK\'s rapidly growing demand for authentic Mexican food products and tortilla innovations. IFE Manufacturing is a key venue for connecting with UK food manufacturers exploring private label tortilla and flatbread production.',
    emoji: '🏭',
  },
  {
    slug: 'food-drink-expo-uk-2026',
    name: 'The Food & Drink Expo 2026',
    startDate: '2026-04-27',
    endDate: '2026-04-29',
    displayDate: 'April 27–29, 2026',
    location: {
      venue: 'NEC Birmingham',
      city: 'Birmingham',
      country: 'United Kingdom',
      region: 'United Kingdom',
    },
    officialUrl: 'https://www.foodanddrinkexpo.co.uk/',
    description:
      'The Food & Drink Expo at NEC Birmingham is the UK\'s largest trade event for the food and drink industry, hosting 1,200+ exhibitors across ambient, chilled, frozen and foodservice categories. It is co-located with IFE, Farm Shop & Deli Show and The Pub Show.',
    tortillaRelevance:
      'As a global provider, we track UK\'s rapidly growing demand for authentic Mexican food products and tortilla innovations. The Food & Drink Expo is the primary venue for establishing UK distributor and retail partnerships for tortilla and flatbread wholesale supply.',
    emoji: '🇬🇧',
  },
  {
    slug: 'london-wine-fair-2026',
    name: 'London Wine Fair 2026',
    startDate: '2026-05-18',
    endDate: '2026-05-20',
    displayDate: 'May 18–20, 2026',
    location: {
      venue: 'Olympia London',
      city: 'London',
      country: 'United Kingdom',
      region: 'United Kingdom',
    },
    officialUrl: 'https://www.londonwinefair.com/',
    description:
      'London Wine Fair is the UK\'s premier trade event for wine and drinks professionals, held annually at Olympia London. It attracts 10,000+ trade visitors including buyers, sommeliers, importers and distributors, making it a key networking event for the broader food and hospitality supply industry.',
    tortillaRelevance:
      'As a global provider, we track UK\'s rapidly growing demand for authentic Mexican food products and tortilla innovations. London Wine Fair connects tortilla and food suppliers with UK hospitality buyers who source complementary food products for Mexican and Latin-themed venues.',
    emoji: '🍷',
  },
  {
    slug: 'imbibe-live-london-2026',
    name: 'Imbibe Live 2026',
    startDate: '2026-06-29',
    endDate: '2026-06-30',
    displayDate: 'June 29–30, 2026',
    location: {
      venue: 'Olympia London',
      city: 'London',
      country: 'United Kingdom',
      region: 'United Kingdom',
    },
    officialUrl: 'https://live.imbibe.com/',
    description:
      'Imbibe Live is the UK\'s leading on-trade drinks event, bringing together drinks buyers, bartenders, and hospitality professionals at Olympia London. It spans spirits, beer, wine, soft drinks and food pairings, serving the UK\'s vibrant on-trade hospitality sector.',
    tortillaRelevance:
      'As a global provider, we track UK\'s rapidly growing demand for authentic Mexican food products and tortilla innovations. Imbibe Live represents a key channel into UK bars and restaurants serving Mexican street food and cocktail menus that pair directly with tortilla and wrap products.',
    emoji: '🍸',
  },
  {
    slug: 'speciality-fine-food-london-2026',
    name: 'Speciality & Fine Food Fair 2026',
    startDate: '2026-09-07',
    endDate: '2026-09-09',
    displayDate: 'September 7–9, 2026',
    location: {
      venue: 'Olympia London',
      city: 'London',
      country: 'United Kingdom',
      region: 'United Kingdom',
    },
    officialUrl: 'https://www.specialityandfinefoodfairs.co.uk/',
    description:
      'The Speciality & Fine Food Fair is the UK\'s definitive event for artisan, premium and fine food sourcing, held at Olympia London. It connects independent retailers, deli owners, food halls and luxury hospitality buyers with specialist producers from the UK and around the world.',
    tortillaRelevance:
      'As a global provider, we track UK\'s rapidly growing demand for authentic Mexican food products and tortilla innovations. This fair is especially relevant for premium and artisan tortilla formats targeting the UK\'s growing specialty food retail and fine dining channels.',
    emoji: '🧺',
  },
  {
    slug: 'lunch-expo-london-2026',
    name: 'Lunch! (Food-to-Go Show) 2026',
    startDate: '2026-09-24',
    endDate: '2026-09-25',
    displayDate: 'September 24–25, 2026',
    location: {
      venue: 'ExCeL London',
      city: 'London',
      country: 'United Kingdom',
      region: 'United Kingdom',
    },
    officialUrl: 'https://www.lunchshow.co.uk/',
    description:
      'Lunch! is the UK\'s leading trade event for the food-to-go and out-of-home eating sector, held at ExCeL London. It serves cafés, coffee shops, contract caterers, convenience retailers and street food operators — the heartbeat of the UK\'s £22bn food-to-go market.',
    tortillaRelevance:
      'As a global provider, we track UK\'s rapidly growing demand for authentic Mexican food products and tortilla innovations. Lunch! is the most direct route to UK food-to-go operators who use tortillas and wraps as the foundation of their grab-and-go menus and street food offerings.',
    emoji: '🌯',
  },
];

export default events;
