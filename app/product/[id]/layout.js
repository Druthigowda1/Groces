import { mockProducts } from '../../../lib/data/mockProducts';

export function generateStaticParams() {
  return mockProducts.map((product) => ({
    id: product.id,
  }));
}

export default function ProductLayout({ children }) {
  return children;
}
