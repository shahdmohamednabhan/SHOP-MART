


// "use client";

// import Link from "next/link";

// export default function Home() {
//   return (
//     <section className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-white">
//       <div className="text-center max-w-3xl px-4">
//         {/* Title */}
//         <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
//           Welcome to ShopMart
//         </h1>

//         {/* Description */}
//         <p className="text-gray-600 text-lg md:text-xl mb-10">
//           Discover the latest technology, fashion, and lifestyle products.
//           Quality guaranteed with fast shipping and excellent customer service.
//         </p>

//         {/* Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <Link
//             href="/products"
//             className="bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition"
//           >
//             Shop Now
//           </Link>

//           <Link
//             href="/categories"
//             className="border border-black text-black px-8 py-3 rounded-md font-medium hover:bg-black hover:text-white transition"
//           >
//             Browse Categories
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }







// "use client";

// import Link from "next/link";

// export default function Home() {
//   return (
//     <>
//       {/* ===== HERO SECTION ===== */}
//       <section className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-white">
//         <div className="text-center max-w-4xl px-4">
//           <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
//             Welcome to ShopMart
//           </h1>

//           <p className="text-gray-600 text-lg md:text-xl mb-10">
//             Discover the latest technology, fashion, and lifestyle products.
//             Quality guaranteed with fast shipping and excellent customer service.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link
//               href="/products"
//               className="bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition"
//             >
//               Shop Now
//             </Link>

//             <Link
//               href="/categories"
//               className="border border-black text-black px-8 py-3 rounded-md font-medium hover:bg-black hover:text-white transition"
//             >
//               Browse Categories
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* ===== FOOTER ===== */}
//       <footer className="bg-gray-100 border-t">
//         <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-600">
          
//           {/* Logo */}
//           <div>
//             <h2 className="text-lg font-bold text-black mb-3">ShopMart</h2>
//             <p>
//               Your one-stop shop for quality products with fast delivery and
//               trusted service.
//             </p>
//           </div>

//           {/* Shop */}
//           <div>
//             <h3 className="font-semibold text-black mb-3">SHOP</h3>
//             <ul className="space-y-2">
//               <li>Products</li>
//               <li>Brands</li>
//               <li>Categories</li>
//             </ul>
//           </div>

//           {/* Customer Service */}
//           <div>
//             <h3 className="font-semibold text-black mb-3">CUSTOMER SERVICE</h3>
//             <ul className="space-y-2">
//               <li>Contact Us</li>
//               <li>Shipping</li>
//               <li>Returns</li>
//             </ul>
//           </div>

//           {/* About */}
//           <div>
//             <h3 className="font-semibold text-black mb-3">ABOUT</h3>
//             <ul className="space-y-2">
//               <li>About Us</li>
//               <li>Privacy Policy</li>
//               <li>Terms & Conditions</li>
//             </ul>
//           </div>
//         </div>

//         <div className="text-center text-xs text-gray-500 py-4 border-t">
//           © 2026 ShopMart. All rights reserved.
//         </div>
//       </footer>
//     </>
//   );
// }



import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Footer />

    </>
  );
}
