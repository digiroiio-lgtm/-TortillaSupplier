// Generates public/downloads/tortilla-wholesale-buyer-guide.pdf — the gated
// lead magnet offered on /tortilla-buyer-guide.
//
// Product specs and certifications are read from src/data so the PDF stays in
// sync with the website. Re-run after changing them:
//   npm run build:buyer-guide
// Requires Playwright with Chromium (not a project dependency):
//   npm i -D playwright && npx playwright install chromium

import { writeFileSync } from 'node:fs';
import { products } from '../src/data/products';
import { certifications } from '../src/data/certifications';

const OUT = 'public/downloads/tortilla-wholesale-buyer-guide.pdf';
const YEAR = new Date().getFullYear();

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const CORE_TYPES = ['flour', 'corn', 'frozen', 'wrap', 'flatbread'] as const;
const TYPE_LABEL: Record<string, string> = {
  flour: 'Flour & whole wheat tortillas',
  corn: 'Corn tortillas',
  frozen: 'Frozen tortillas',
  wrap: 'Wrap flatbreads',
  flatbread: 'Lavash & specialty flatbreads',
};

const specRows = (type: string) =>
  products
    .filter((p) => p.type === type)
    .map(
      (p) => `<tr>
        <td>${esc(p.name)}</td>
        <td>${p.diameterCm} cm${p.diameterInch ? ` · ${esc(p.diameterInch)}` : ''}</td>
        <td>${p.weightG} g</td>
        <td>${p.packCount}</td>
        <td>${p.palletCases}</td>
        <td>${esc(p.shelfLife)}</td>
      </tr>`
    )
    .join('');

const specTables = CORE_TYPES.map(
  (t) => `<h3>${TYPE_LABEL[t]}</h3>
  <table class="spec">
    <thead><tr><th>Product</th><th>Diameter</th><th>Weight</th><th>Pcs / pack</th><th>Cases / pallet</th><th>Shelf life</th></tr></thead>
    <tbody>${specRows(t)}</tbody>
  </table>`
).join('');

const specialty = products
  .filter((p) => p.type === 'specialty')
  .map((p) => esc(p.name.replace(/ Tortilla/, '')))
  .join(' · ');

const certList = certifications
  .map((c) => `<li><strong>${esc(c.name)}</strong> — ${esc(c.description)}</li>`)
  .join('');

const html = `<!doctype html><html><head><meta charset="utf-8"><title>Wholesale Tortilla Buyer's Guide ${YEAR}</title>
<style>
  @page { size: A4; margin: 18mm 16mm 20mm; }
  * { box-sizing: border-box; }
  body { font-family: 'Helvetica Neue', Arial, sans-serif; color: #1a1a1a; font-size: 10.5pt; line-height: 1.5; margin: 0; }
  h1 { font-size: 30pt; line-height: 1.1; margin: 0 0 12px; letter-spacing: -0.5px; }
  h2 { font-size: 16pt; margin: 0 0 10px; color: #1a1a1a; border-bottom: 2px solid #2d7a3a; padding-bottom: 6px; }
  h3 { font-size: 11pt; margin: 16px 0 6px; color: #2d7a3a; }
  p { margin: 0 0 8px; }
  .page { page-break-after: always; }
  .page:last-child { page-break-after: auto; }
  .eyebrow { font-size: 9pt; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #2d7a3a; margin-bottom: 14px; }
  .cover { height: 255mm; display: flex; flex-direction: column; justify-content: space-between; }
  .cover-band { background: #0a0a0a; color: #fff; padding: 40px 36px; border-radius: 14px; }
  .cover-band h1 { color: #fff; }
  .cover-band p { color: #cfcfcf; font-size: 12pt; }
  .toc { margin-top: 28px; }
  .toc li { margin-bottom: 6px; font-size: 11pt; }
  .footer-note { font-size: 9pt; color: #666; }
  .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 12px 0 16px; }
  .card { border: 1px solid #d6e6d8; background: #f4f8f4; border-radius: 10px; padding: 12px 14px; }
  .card .k { font-size: 8.5pt; text-transform: uppercase; letter-spacing: 1px; color: #2d7a3a; font-weight: 700; }
  .card .v { font-size: 13pt; font-weight: 700; margin-top: 2px; }
  .card .d { font-size: 9pt; color: #555; margin-top: 2px; }
  table { width: 100%; border-collapse: collapse; margin: 6px 0 10px; font-size: 9pt; }
  th { background: #f2f2f0; text-align: left; padding: 6px 8px; font-weight: 700; border-bottom: 1px solid #ddd; }
  td { padding: 5px 8px; border-bottom: 1px solid #eee; vertical-align: top; }
  table.spec { page-break-inside: avoid; }
  ul, ol { margin: 4px 0 10px; padding-left: 18px; }
  li { margin-bottom: 4px; }
  .check li { list-style: none; position: relative; padding-left: 4px; }
  .check li::before { content: '☐'; position: absolute; left: -16px; color: #2d7a3a; }
  .cta { background: #0a0a0a; color: #fff; border-radius: 12px; padding: 22px 24px; margin-top: 18px; }
  .cta h2 { color: #fff; border-color: #2d7a3a; }
  .cta a { color: #7fd18b; text-decoration: none; font-weight: 700; }
  .muted { color: #666; font-size: 9pt; }
</style></head><body>

<section class="page cover">
  <div>
    <div class="eyebrow">TortillaSupplier.com · Buyer's Guide ${YEAR}</div>
    <div class="cover-band">
      <h1>Wholesale Tortilla Buyer's Guide</h1>
      <p>Specifications, minimum orders, lead times, container capacities and a landed-cost checklist for distributors, importers and foodservice buyers.</p>
    </div>
    <ol class="toc">
      <li>Supply at a glance — MOQ, lead times, containers</li>
      <li>Product specifications — sizes, weights, pack and pallet data</li>
      <li>Certifications and export documents</li>
      <li>Importing to the UK and EU — what to prepare</li>
      <li>How wholesale pricing works — landed-cost checklist</li>
      <li>Request-for-quote checklist</li>
    </ol>
  </div>
  <p class="footer-note">BRCGS-certified tortilla manufacturer supplying flour, corn and frozen tortillas, wraps and flatbreads by the pallet and container to the UK, Europe, USA and Middle East. Private label available.</p>
</section>

<section class="page">
  <h2>1. Supply at a glance</h2>
  <div class="grid">
    <div class="card"><div class="k">Minimum order</div><div class="v">1 pallet per SKU</div><div class="d">Mixed pallets available, including private label. Containers give the best unit price.</div></div>
    <div class="card"><div class="k">Lead time</div><div class="v">2–6 weeks</div><div class="d">From order confirmation, depending on schedule, packaging and route.</div></div>
    <div class="card"><div class="k">Private label first run</div><div class="v">4–8 weeks</div><div class="d">Includes 2–4 weeks for artwork approval and packaging print.</div></div>
    <div class="card"><div class="k">Samples</div><div class="v">3–5 days</div><div class="d">Sample delivery to the EU and UK.</div></div>
  </div>
  <h3>Container capacities (reefer, −18°C)</h3>
  <table>
    <thead><tr><th>Container</th><th>Approx. tortillas</th><th>Pallets</th><th>Typical transit</th></tr></thead>
    <tbody>
      <tr><td>20ft reefer</td><td>~800,000</td><td>18–20</td><td>EU 3–10 days · UK & North America 10–20 days</td></tr>
      <tr><td>40ft reefer</td><td>~1,200,000</td><td>36–40</td><td>EU 3–10 days · UK & North America 10–20 days</td></tr>
    </tbody>
  </table>
  <p class="muted">A 40ft container typically improves cost efficiency by 35–40% versus pallet freight.</p>
  <h3>Formats</h3>
  <ul>
    <li><strong>Chilled / ambient:</strong> short supply chains and fast-turning retail.</li>
    <li><strong>Frozen (−18°C):</strong> long-haul export, foodservice stock rotation and less waste.</li>
    <li><strong>Private label:</strong> retail flow-wrap packs, foodservice bulk bags and catering cartons under your brand.</li>
  </ul>
</section>

<section class="page">
  <h2>2. Product specifications</h2>
  <p class="muted">Standard specifications. Custom diameters, weights and pack counts are available for private label programmes.</p>
  ${specTables}
  <h3>Specialty range (25cm unless stated)</h3>
  <p>${specialty}</p>
</section>

<section class="page">
  <h2>3. Certifications and export documents</h2>
  <ul>${certList}</ul>
  <h2 style="margin-top:22px">4. Importing to the UK and EU — what to prepare</h2>
  <ul>
    <li>Commercial invoice and packing list</li>
    <li>Certificate of origin (country of manufacture)</li>
    <li>Health certificate for food products</li>
    <li>Allergen declaration and product specification sheet</li>
    <li>Customs commodity code — typically 1905.90 for bakery products</li>
    <li>Temperature logs for frozen shipments, reviewed at port clearance</li>
  </ul>
  <p>UK retailers and major foodservice buyers usually require <strong>BRCGS</strong> certification. Ask for the current certificate and latest audit report before your first order.</p>
</section>

<section class="page">
  <h2>5. How wholesale pricing works</h2>
  <p>Wholesale tortilla prices depend on size, format, packaging and volume. Compare quotes on a like-for-like <strong>landed cost</strong> basis:</p>
  <table>
    <thead><tr><th>Cost element</th><th>What to check</th></tr></thead>
    <tbody>
      <tr><td>Product price</td><td>Per case or per 1,000 units; volume tiers for pallet vs. container.</td></tr>
      <tr><td>Packaging</td><td>Standard vs. private label; one-off artwork and print set-up.</td></tr>
      <tr><td>Incoterms</td><td>EXW, FOB or CIF — who pays freight and insurance, and where risk transfers.</td></tr>
      <tr><td>Freight</td><td>Reefer container or groupage; cold-chain monitoring.</td></tr>
      <tr><td>Duties and clearance</td><td>Import duty for your commodity code, customs broker and port fees.</td></tr>
      <tr><td>Cold storage and delivery</td><td>Storage at destination and onward distribution.</td></tr>
    </tbody>
  </table>
  <h2 style="margin-top:22px">6. Request-for-quote checklist</h2>
  <p>Send these details and you will receive an accurate container quotation faster:</p>
  <ul class="check">
    <li>Products and sizes (e.g. 25cm flour wrap, 15cm corn)</li>
    <li>Estimated monthly volume and order frequency</li>
    <li>Chilled, ambient or frozen</li>
    <li>Standard packaging or private label</li>
    <li>Delivery country and preferred incoterm</li>
    <li>Required certifications (BRCGS, IFS, Halal…)</li>
  </ul>
  <div class="cta">
    <h2>Get your container pricing</h2>
    <p>Request a quote: <a href="https://tortillasupplier.com/contact">tortillasupplier.com/contact</a></p>
    <p>Email: <a href="mailto:info@tortillasupplier.com">info@tortillasupplier.com</a> · WhatsApp: <a href="https://wa.me/905531229372">+90 553 122 93 72</a></p>
    <p style="color:#bbb;font-size:9pt;margin:0">Our export team replies within 24–48 hours.</p>
  </div>
</section>
</body></html>`;

const { chromium } = await import('playwright');
const browser = await chromium.launch();
const page = await browser.newPage();
await page.setContent(html, { waitUntil: 'load' });
const pdf = await page.pdf({
  format: 'A4',
  printBackground: true,
  displayHeaderFooter: true,
  headerTemplate: '<span></span>',
  footerTemplate:
    '<div style="width:100%;font-size:8px;color:#888;padding:0 16mm;display:flex;justify-content:space-between;font-family:Arial"><span>TortillaSupplier.com — Wholesale Tortilla Buyer\'s Guide</span><span class="pageNumber"></span></div>',
  margin: { top: '18mm', bottom: '20mm', left: '16mm', right: '16mm' },
});
await browser.close();
writeFileSync(OUT, pdf);
console.log(`Wrote ${OUT} (${(pdf.length / 1024).toFixed(0)} KB)`);
