export default async function PostDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <main>
      <h1>Blog Post</h1>
      <p>Slug: {slug}</p>
    </main>
  );
}
