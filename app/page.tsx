import { Metadata } from "next";
import Image from "next/image";

export default async function Home() {
  return (
    <main className="relative w-full h-screen">
      <Image 
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80" 
        alt="Mountain" 
        fill
        className="object-cover"
        priority
      />
    </main>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const product = await fetch('https://fakestoreapi.com/products/1');
    
    if (!product.ok) {
      throw new Error('Failed to fetch product');
    }
    
    const data = await product.json();

    return {
      title: data.title,
      description: data.description,
    }
  } catch (error) {
    return {
      title: "Product Not Found",
      description: "Unable to load product information",
    }
  }
}