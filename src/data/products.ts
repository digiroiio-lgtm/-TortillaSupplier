export interface Product {
  id: string;
  name: string;
  type: 'flour' | 'corn' | 'frozen' | 'wrap' | 'flatbread';
  diameterCm: number;
  weightG: number;
  packCount: number;
  storageType: 'chilled' | 'frozen' | 'ambient';
  shelfLife: string;
  privateLabelAvailable: boolean;
  description: string;
  tags: string[];
}

export const products: Product[] = [
  { id: 'fl-20', name: 'Flour Tortilla 20cm', type: 'flour', diameterCm: 20, weightG: 35, packCount: 18, storageType: 'chilled', shelfLife: '21 days chilled / 9 months frozen', privateLabelAvailable: true, description: 'Standard flour tortilla for foodservice and retail use.', tags: ['flour', 'foodservice', 'retail pack'] },
  { id: 'fl-25', name: 'Flour Tortilla 25cm', type: 'flour', diameterCm: 25, weightG: 50, packCount: 12, storageType: 'chilled', shelfLife: '21 days chilled / 9 months frozen', privateLabelAvailable: true, description: 'Mid-size flour tortilla suitable for wraps and foodservice.', tags: ['flour', 'foodservice', 'private label'] },
  { id: 'fl-30', name: 'Flour Tortilla 30cm', type: 'flour', diameterCm: 30, weightG: 65, packCount: 10, storageType: 'chilled', shelfLife: '21 days chilled / 9 months frozen', privateLabelAvailable: true, description: 'Large flour tortilla for QSR and foodservice operations.', tags: ['flour', 'foodservice', 'private label'] },
  { id: 'cn-15', name: 'Corn Tortilla 15cm', type: 'corn', diameterCm: 15, weightG: 25, packCount: 20, storageType: 'chilled', shelfLife: '14 days chilled / 9 months frozen', privateLabelAvailable: true, description: 'Traditional corn tortilla for authentic dishes.', tags: ['corn', 'foodservice', 'retail pack'] },
  { id: 'cn-20', name: 'Corn Tortilla 20cm', type: 'corn', diameterCm: 20, weightG: 40, packCount: 18, storageType: 'chilled', shelfLife: '14 days chilled / 9 months frozen', privateLabelAvailable: true, description: 'Medium corn tortilla for tacos and foodservice use.', tags: ['corn', 'foodservice', 'private label'] },
  { id: 'fz-fl-25', name: 'Frozen Flour Tortilla 25cm', type: 'frozen', diameterCm: 25, weightG: 50, packCount: 12, storageType: 'frozen', shelfLife: '12 months at -18°C', privateLabelAvailable: true, description: 'Frozen flour tortilla with extended shelf life for export.', tags: ['flour', 'frozen', 'private label'] },
  { id: 'fz-fl-30', name: 'Frozen Flour Tortilla 30cm', type: 'frozen', diameterCm: 30, weightG: 65, packCount: 10, storageType: 'frozen', shelfLife: '12 months at -18°C', privateLabelAvailable: true, description: 'Large frozen flour tortilla suitable for long-haul distribution.', tags: ['flour', 'frozen', 'foodservice'] },
  { id: 'wr-30', name: 'Wrap Flatbread 30cm', type: 'wrap', diameterCm: 30, weightG: 70, packCount: 10, storageType: 'frozen', shelfLife: '12 months at -18°C', privateLabelAvailable: true, description: 'Premium wrap flatbread for foodservice and sandwich operations.', tags: ['frozen', 'foodservice', 'private label'] },
  { id: 'lv-25', name: 'Lavash Style Flatbread 25cm', type: 'flatbread', diameterCm: 25, weightG: 55, packCount: 12, storageType: 'frozen', shelfLife: '12 months at -18°C', privateLabelAvailable: true, description: 'Thin lavash-style flatbread for kebab, wrap and snack applications.', tags: ['frozen', 'foodservice', 'private label'] },
  { id: 'fz-cn-15', name: 'Frozen Corn Tortilla 15cm', type: 'frozen', diameterCm: 15, weightG: 25, packCount: 20, storageType: 'frozen', shelfLife: '12 months at -18°C', privateLabelAvailable: true, description: 'Frozen corn tortilla for long shelf life export distribution.', tags: ['corn', 'frozen', 'retail pack'] },
];
