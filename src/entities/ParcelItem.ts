export type ParcelItem = {
  location: string;
  destination: string;
  type?: 'gadgets' | 'drinks' | 'clothes' | 'medicines' | 'other';
  date: string;
  description?: string;
}