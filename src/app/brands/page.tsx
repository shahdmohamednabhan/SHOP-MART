//  export default function Brands(){
//     return<>
//     <h2>Brands</h2>
//     </>
//  } 

 



"use client";

import { useEffect, useState } from "react";

// نوع بيانات البراند
interface Brand {
  _id: string;
  name: string;
  image?: string;
}

// خدمة لجلب كل البراندات
const getAllBrands = async (): Promise<Brand[]> => {
  try {
    const res = await fetch("https://ecommerce.routemisr.com/api/v1/brands");
    if (!res.ok) throw new Error("Failed to fetch brands");
    const data = await res.json();
    return data?.data || []; // حسب شكل الـ API
  } catch (error) {
    console.error(error);
    return [];
  }
};

// خدمة لجلب براند محدد
const getBrandById = async (id: string): Promise<Brand | null> => {
  try {
    const cleanId = id.trim();
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/brands/${cleanId}`);
    if (!res.ok) throw new Error("Failed to fetch brand");
    const data = await res.json();
    return data?.data || null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default function Brands() {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [brand, setBrand] = useState<Brand | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // جلب كل البراندات
    getAllBrands().then((data) => {
      setBrands(data);
      setLoading(false);
    });

    // مثال: جلب براند معين بالـ ID
    const brandId = "64089ceb24b25627a2531596";
    getBrandById(brandId).then((data) => {
      if (data) setBrand(data);
    });
  }, []);

  if (loading) {
    return (
      <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="animate-pulse bg-gray-200 h-24 rounded-lg" />
        ))}
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">All Brands</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {brands.map((b) => (
          <div key={b._id} className="border rounded-lg p-4 flex flex-col items-center">
            {b.image ? (
              <img src={b.image} alt={b.name} className="h-16 w-16 object-contain mb-2" />
            ) : (
              <div className="h-16 w-16 bg-gray-300 mb-2 rounded-full" />
            )}
            <p className="font-medium">{b.name}</p>
          </div>
        ))}
      </div>

      {brand && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-2">Specific Brand</h2>
          <div className="border rounded-lg p-4 flex items-center gap-4">
            {brand.image ? (
              <img src={brand.image} alt={brand.name} className="h-16 w-16 object-contain" />
            ) : (
              <div className="h-16 w-16 bg-gray-300 rounded-full" />
            )}
            <p className="font-medium">{brand.name}</p>
          </div>
        </div>
      )}
    </div>
  );
}
