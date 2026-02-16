 "use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { formatCurrency } from "@/Helpers/formatCurrency";

interface Product {
  _id: string;
  title: string;
  price: number;
  imageCover: string;
}

export default function CategoryDetailsPage() {
  const params = useParams();
  const categoriesid = params.categoriesid; // ← لازم يكون مطابق اسم folder

  const [products, setProducts] = useState<Product[]>([]);
  const [categoryName, setCategoryName] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!categoriesid) return;

    setLoading(true);

    // 1️⃣ جلب اسم الكاتجوري
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/categories/${categoriesid}`)
      .then(res => res.json())
      .then(json => setCategoryName(json.data?.name || "Category"))
      .catch(() => setCategoryName("Category"));

    // 2️⃣ جلب المنتجات في الكاتجوري
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products?category=${categoriesid}`)
      .then(res => res.json())
      .then(json => {
        if (json.status === "success" && Array.isArray(json.data)) {
          setProducts(json.data);
        } else {
          setProducts([]);
        }
      })
      .catch(() => setProducts([]))
      .finally(() => setLoading(false));
  }, [categoriesid]);

  if (loading) return <p className="p-6">Loading products...</p>;
  if (!products.length) return <p className="p-6">No products in this category</p>;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">
        {categoryName} - Products in this category
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map(prod => (
          <Link
            key={prod._id}
            href={`/products/${prod._id}`} // ← تروح لصفحة تفاصيل المنتج
            className="border p-4 rounded hover:shadow-lg transition"
          >
            <div className="w-full h-40 relative">
              <Image
                src={prod.imageCover}
                alt={prod.title}
                fill
                className="object-cover rounded"
              />
            </div>
            <h3 className="font-bold mt-2">{prod.title}</h3>
            <p className="font-semibold">{formatCurrency(prod.price)}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}















 