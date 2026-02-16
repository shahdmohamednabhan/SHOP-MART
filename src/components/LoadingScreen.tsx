"use client";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      
      {/* Logo */}
      <h1 className="text-4xl font-bold tracking-wide mb-4 animate-pulse">
        Shop<span className="text-blue-500">Mart</span>
      </h1>

      {/* Subtitle */}
      <p className="text-gray-300 mb-8 text-center max-w-sm">
        Your one-stop destination for quality products
      </p>

      {/* Spinner */}
      <div className="relative w-20 h-20 mb-6">
        <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
        <div className="absolute inset-2 rounded-full border-4 border-blue-300 border-b-transparent animate-spin-slow"></div>
      </div>

      {/* Progress Bar */}
      <div className="w-64 h-1 bg-gray-700 rounded overflow-hidden">
        <div className="h-full bg-blue-500 animate-loading-bar"></div>
      </div>

    </div>
  );
}
