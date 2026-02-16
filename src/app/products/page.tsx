 
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Heart } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import AddToCart from "@/components/AddToCart";
import { getServerSession } from "next-auth";
import { authOption } from "@/auth";

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  imageCover: string;
  rating?: number;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch("https://ecommerce.routemisr.com/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data?.data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="px-4 py-6">
        <h2 className="text-2xl font-bold mb-6">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div key={idx} className="animate-pulse">
              <div className="w-full h-[200px] bg-gray-200 rounded-t-lg mb-2" />
              <div className="h-4 bg-gray-200 rounded mb-1"></div>
              <div className="h-4 bg-gray-200 rounded mb-1 w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="h-10 bg-gray-200 rounded mt-2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!products.length) return <p className="px-4 py-6">No products found</p>;
 
   return (
    <div className="px-4 py-6">
      <h2 className="text-2xl font-bold mb-6">Products</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <Card
            key={p._id}
            onClick={() => router.push(`/products/${p._id}`)} // الكارد كله clickable
            className="h-full transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
          >
            {/* Image */}
            <div className="w-full aspect-[3/2] relative">
              <Image
                src={p.imageCover}
                alt={p.title}
                fill
                className="object-contain rounded-t-lg"
              />
            </div>

            {/* Header */}
            <CardHeader>
              <CardTitle className="line-clamp-1">{p.title}</CardTitle>
              <CardDescription className="line-clamp-2">
                {p.description}
              </CardDescription>
            </CardHeader>

            {/* Content */}
            <CardContent>
              <div className="flex items-center justify-between">
                <p className="font-bold text-black">{p.price} EGP</p>

                <div className="flex text-yellow-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>{i < (p.rating || 4) ? "★" : "☆"}</span>
                  ))}
                </div>
              </div>
            </CardContent>

            {/* Footer */}
            {/* <AddToCart productId={p._id} /> */}
<Card
  key={p._id}
  onClick={() => router.push(`/products/${p._id}`)}
  className="cursor-pointer"
>
  {/* محتوى الكارد */}

  <CardFooter className="mt-auto">
    <AddToCart productId={p._id} />
  </CardFooter>
 
</Card>

          </Card>
        ))}
      </div>
    </div>
  );
}

