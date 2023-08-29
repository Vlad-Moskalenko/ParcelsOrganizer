export type ParcelState = {
  _id: string;
  parcelType: 'deliver' | 'order'
  location: string;
  destination: string;
  type?: 'gadgets' | 'drinks' | 'clothes' | 'medicines' | 'other';
  description?: string;
  date?: string;
  createdAt: number;
}