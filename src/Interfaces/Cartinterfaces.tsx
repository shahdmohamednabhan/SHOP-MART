export interface Root {
  status: string
  numOfCartItems: number
  message?:string
  cartId: string
  data: Data
}

export interface Data {
  _id: string
  cartOwner: string
  products: CartItem[]
  createdAt: string
  updatedAt: string
  __v: number
  totalCartPrice: number
}

export interface CartItem {
  count: number
  _id: string
  product: Product
  price: number
}

export interface Product {
  subcategory: Subcategory[]
  _id: string
  title: string
  quantity: number
  imageCover: string
  category: Category
  brand: Brand
  ratingsAverage: number
  id: string
}

export interface Subcategory {
  _id: string
  name: string
  slug: string
  category: string
}

export interface Category {
  _id: string
  name: string
  slug: string
  image: string
}

export interface Brand {
  _id: string
  name: string
  slug: string
  image: string
}


// src/Interfaces/Cartinterfaces.tsx
export interface CartResponse {
  status: string;
  message: string;
  items: Array<{
    productId: string;
    quantity: number;
  }>;
}
 
export interface CartRes {
  status: string
  numOfCartItems: number
  cartId: string    
  data: {
    _id: string
    products: any[]
    totalCartPrice: number
  }
}

export interface shippingAddress{
  city:string,
  details:string,
  phone:string,}
  

 