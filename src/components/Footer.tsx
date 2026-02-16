// import Link from "next/link";

// export default function Footer() {
//   return (
//     <footer className="bg-gray-100 border-t mt-20">
//       <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

//         {/* Logo & Description */}
//         <div>
//           <h2 className="text-2xl font-bold mb-4">ShopMart</h2>
//           <p className="text-gray-600 text-sm">
//             Your one-stop shop for quality products, great prices,
//             and fast delivery.
//           </p>
//         </div>

//         {/* Links */}
//         <div>
//           <h3 className="font-semibold mb-4">Shop</h3>
//           <ul className="space-y-2 text-gray-600 text-sm">
//             <li><Link href="/products" className="hover:text-black">Products</Link></li>
//             <li><Link href="/categories" className="hover:text-black">Categories</Link></li>
//             <li><Link href="/brands" className="hover:text-black">Brands</Link></li>
//           </ul>
//         </div>

//         {/* Support */}
//         <div>
//           <h3 className="font-semibold mb-4">Support</h3>
//           <ul className="space-y-2 text-gray-600 text-sm">
//             <li><Link href="/contact" className="hover:text-black">Contact Us</Link></li>
//             <li><Link href="/faq" className="hover:text-black">FAQ</Link></li>
//             <li><Link href="/privacy" className="hover:text-black">Privacy Policy</Link></li>
//           </ul>
//         </div>

//         {/* Newsletter */}
//         <div>
//           <h3 className="font-semibold mb-4">Stay Updated</h3>
//           <p className="text-gray-600 text-sm mb-4">
//             Subscribe to get special offers and updates.
//           </p>
//           <form className="flex gap-2">
//             <input
//               type="email"
//               placeholder="Your email"
//               className="flex-1 px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-black"
//             />
//             <button
//               type="submit"
//               className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
//             >
//               Subscribe
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t py-4 text-center text-sm text-gray-500">
//         © {new Date().getFullYear()} ShopMart. All rights reserved.
//       </div>
//     </footer>
//   );
// }















 // components/Footer.tsx
"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-12">
      <div className="max-w-7xl mx-auto px-6">

        {/* Flex container للأقسام الثلاثة */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8">

          {/* Shop Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">SHOP</h3>
            <ul className="space-y-2">
              <li>Electronics</li>
              <li>Fashion</li>
              <li>Home & Garden</li>
              <li>Sports</li>
              <li>Deals</li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">CUSTOMER SERVICE</h3>
            <ul className="space-y-2">
              <li>Contact Us</li>
              <li>Help Center</li>
              <li>Track Your Order</li>
              <li>Returns & Exchanges</li>
              <li>Size Guide</li>
            </ul>
          </div>

          {/* About & Policies */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">ABOUT</h3>
            <ul className="space-y-2 mb-6">
              <li>About ShopMart</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Investor Relations</li>
              <li>Sustainability</li>
            </ul>
            <div>
                <h3 className="text-lg font-semibold text-white mb-4">POLICIES</h3>
            <ul className="space-y-2">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Cookie Policy</li>
              <li>Shipping Policy</li>
              <li>Refund Policy</li>
            </ul>
            </div>
          </div>

        </div>

        {/* About ShopMart + Contact Info */}
        <div className="mt-12 border-t border-gray-800 pt-6 text-gray-400 text-sm">
          <p className="mb-2">ShopMart</p>
          <p className="mb-2">Your one-stop destination for the latest technology, fashion, and lifestyle products. Quality guaranteed with fast shipping and excellent customer service.</p>
          <p className="mb-1">123 Shop Street, Octoper City, DC 12345</p>
          <p className="mb-1">(+20) 01093333333</p>
          <p>support@shopmart.com</p>
        </div>

        {/* Bottom */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} ShopMart. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
