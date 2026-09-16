export default async function ProductDetail({
  params,
}: {
  params: Promise<{ category: string; id: string }>;
}) {
  const { id, category } = await params;
  return (
    <main>
      <h1>Product Details</h1>
      <p>Category: {category}</p>
      <p>Product ID: {id}</p>
    </main>
  );
}
