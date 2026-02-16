
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Category {
  _id: string;
  name: string;
  image?: string;
}

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/categories`)
      .then(res => res.json())
      .then(json => setCategories(json.data || []))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="p-6">Loading categories...</p>;
  if (!categories.length) return <p className="p-6">No categories found</p>;

  return (
    <div className="p-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      {categories.map(cat => (
        <Link
          key={cat._id}
          href={`/categories/${cat._id}`} // → توجه لصفحة تفاصيل الكاتجوري
          className="border rounded-lg overflow-hidden hover:shadow-lg transition"
        >
          <div className="w-full h-40 relative">
            <Image
              src={cat.image || "/placeholder.png"}
              alt={cat.name}
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-lg font-bold p-2">{cat.name}</h3>
        </Link>
      ))}
    </div>
  );
}
