import { NextResponse } from 'next/server';

// /llms.txt — an emerging convention (see llmstxt.org) that gives large
// language models and answer engines a concise, high-signal map of the
// site's most authoritative pages. Distinct from robots.txt: this file
// isn't a permission gate, it's a discovery aid so LLMs can find the
// canonical B2B pages instead of guessing from the sitemap.
const BASE_URL = 'https://tortillasupplier.com';

const body = `# TortillaSupplier

> BRCGS-certified wholesale tortilla manufacturer supplying flour, corn and
> frozen tortillas to distributors, importers and foodservice operators
> across the UK, USA, Europe, Canada, the Middle East and Australia.
> Private label production available. Container supply (20ft and 40ft).

## Company
- [About](${BASE_URL}/about): Company overview, mission and B2B focus.
- [Our Factory](${BASE_URL}/our-factory): BRCGS / IFS-certified tortilla production facility.
- [Certifications](${BASE_URL}/certifications): BRCGS, IFS, ISO 22000, HACCP, Halal.
- [Export Programme](${BASE_URL}/export-program): Container supply and export documentation.
- [Contact](${BASE_URL}/contact): Distributor pricing and sample requests.

## Product pillars
- [Tortilla Supplier](${BASE_URL}/tortilla-supplier): Wholesale tortilla supply overview.
- [Flour Tortilla Supplier](${BASE_URL}/flour-tortilla-supplier): 20cm / 25cm / 30cm flour tortillas.
- [Corn Tortilla Supplier](${BASE_URL}/corn-tortilla-supplier): 15cm / 20cm corn tortillas (gluten-free by nature).
- [Frozen Tortilla Supplier](${BASE_URL}/frozen-tortilla-supplier): IQF flour and corn tortillas for reefer container export.
- [Tortilla Wholesale](${BASE_URL}/tortilla-wholesale): Pallet and container pricing.
- [Private Label Tortilla Manufacturer](${BASE_URL}/private-label-tortilla-manufacturer): Retail-brand and QSR-brand production.
- [Wrap Bread Supplier](${BASE_URL}/wrap-bread-supplier): Wrap and flatbread formats.
- [Flatbread Supplier](${BASE_URL}/flatbread-supplier): Lavash-style and wrap flatbreads.

## Regional supply pages
- [UK Tortilla Supplier](${BASE_URL}/tortilla-supplier-uk)
- [USA Tortilla Supplier](${BASE_URL}/tortilla-supplier-usa)
- [Europe Tortilla Supplier](${BASE_URL}/tortilla-supplier-europe)
- [Spain Tortilla Supplier](${BASE_URL}/tortilla-supplier-spain)
- [Germany Tortilla Supplier](${BASE_URL}/tortilla-supplier-germany)
- [France Tortilla Supplier](${BASE_URL}/tortilla-supplier-france)
- [Netherlands Tortilla Supplier](${BASE_URL}/tortilla-supplier-netherlands)
- [Italy Tortilla Supplier](${BASE_URL}/tortilla-supplier-italy)
- [Canada Tortilla Supplier](${BASE_URL}/tortilla-supplier-canada)
- [Australia Tortilla Supplier](${BASE_URL}/tortilla-supplier-australia)
- [Middle East Tortilla Supplier](${BASE_URL}/tortilla-supplier-middle-east)
- [UAE Tortilla Supplier](${BASE_URL}/tortilla-supplier-uae)
- [Saudi Arabia Tortilla Supplier](${BASE_URL}/tortilla-supplier-saudi-arabia)

## Buyer resources
- [Tortilla Guide](${BASE_URL}/tortilla-guide): Full B2B buyer's reference.
- [Tortilla Size Chart](${BASE_URL}/tortilla-size-chart): Standard diameters and pack configurations.
- [Tortilla Manufacturing Process](${BASE_URL}/tortilla-manufacturing-process): How our tortillas are made.
- [Tortilla Shelf Life](${BASE_URL}/tortilla-shelf-life): Ambient and frozen shelf life data.
- [How to Store Tortillas](${BASE_URL}/how-to-store-tortillas): Cold-chain and ambient guidance for distributors.
- [Tortilla Calories](${BASE_URL}/tortilla-calories): Nutrition data across sizes and formats.

## Optional
- [Blog](${BASE_URL}/blog): Editorial coverage of tortilla sourcing, trends and export markets.
- [Sitemap](${BASE_URL}/sitemap.xml)
`;

export const dynamic = 'force-static';

export function GET() {
  return new NextResponse(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
