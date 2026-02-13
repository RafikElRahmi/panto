import { useState } from 'react';
import { categories } from './products';

function CategoryTabs() {
  const [activeCategory, setActiveCategory] = useState('Chair');
  return (
    <div className="bg-background-gray inline-flex gap-4 rounded-full px-3 py-2">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`rounded-full px-6 py-2 text-base font-medium transition ${
            activeCategory === category ? 'bg-white font-semibold' : 'bg-transparent'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryTabs;
