"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";

export default function PageLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 700); // مدة ظهور اللودنج (احترافية)

    return () => clearTimeout(timer);
  }, [pathname]);

  return loading ? <LoadingScreen /> : null;
}
