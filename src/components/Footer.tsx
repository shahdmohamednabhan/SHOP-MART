 
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
