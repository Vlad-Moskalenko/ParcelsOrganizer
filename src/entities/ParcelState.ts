export type ParcelState = {
  _id?: string;
  location: string;
  destination: string;
  type?: 'gadgets' | 'drinks' | 'clothes' | 'medicines' | 'other';
  date: string;
  description?: string;
}