import Link from "next/link";

export default function Products() {
  return (
    <div>
      <h1>Products</h1>
      <Link href={`/products/electronics/1`}>Product 1</Link>
      <Link href={`/products/electronics/2`}>Product 2</Link>
      <Link href={`/products/electronics/3`}>Product 3</Link>
    </div>
  );
}
