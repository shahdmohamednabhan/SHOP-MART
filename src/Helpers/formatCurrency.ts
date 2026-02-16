import { number } from "zod";

export function formatCurrency(num: number) {
  return new Intl.NumberFormat("en-EG", {
    style: "currency",
    currency: "EGP",
  }).format(num);
}
