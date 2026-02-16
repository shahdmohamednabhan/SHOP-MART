 
 
"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Slider from "@/components/Slider";
import AddToCart from "@/components/AddToCart";

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  imageCover: string;
  images?: string[];
  rating?: number;
}

export default function ProductDetailsPage() {
  const params = useParams();
  const router = useRouter();

  // اسم الـ folder لازم يكون [productid] عشان params.productid يشتغل
  const productid = Array.isArray(params.productid) ? params.productid[0] : params.productid;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!productid) {
      router.push("/products"); // لو مفيش id ارجعي للـ products
      return;
    }

    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/products/${productid}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data?.data) {
          // Fallback: بيانات وهمية
          setProduct({
            _id: productid,
            title: `Product ${productid}`,
            description: "This is a test product (Mock Data)",
            price: 99,
            imageCover: "/placeholder.png",
            images: ["/placeholder.png"],
            rating: 4,
          });
        } else {
          setProduct({
            ...data.data,
            images: data.data.images?.length ? data.data.images : [data.data.imageCover],
          });
        }
      })
      .catch(() => {
        setProduct({
          _id: productid,
          title: `Product ${productid}`,
          description: "This is a test product (Mock Data)",
          price: 99,
          imageCover: "/placeholder.png",
          images: ["/placeholder.png"],
          rating: 4,
        });
      })
      .finally(() => setLoading(false));
  }, [productid, router]);

  if (loading) return <p className="p-6">Loading product details...</p>;
  if (!product) return <p className="p-6">Product not found</p>;

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <button
        onClick={() => router.push("/products")}
        className="mb-4 text-blue-500 underline"
      >
        ← Back to Products
      </button>

      <Card className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Slider للصور */}
        <div className="w-full aspect-[3/2]">
          <Slider images={product.images || [product.imageCover]} title={product.title} />
        </div>

        <div>
          <CardHeader>
            <CardTitle>{product.title}</CardTitle>
            <CardDescription>{product.description}</CardDescription>
          </CardHeader>

          <CardContent>
            <p className="font-bold text-black text-lg mb-2">Price: {product.price} EGP</p>

            <div className="flex text-yellow-400 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>{i < (product.rating || 4) ? "★" : "☆"}</span>
              ))}
            </div>

            {/* AddToCart */}
            <AddToCart productId={product._id} />
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
















































 