import { mockCategories } from '../../../lib/data/mockCategories';

export function generateStaticParams() {
  return mockCategories.map((category) => ({
    id: category.id,
  }));
}

export default function CategoryLayout({ children }) {
  return children;
}
