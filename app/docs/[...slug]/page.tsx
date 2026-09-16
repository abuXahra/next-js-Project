import React from "react";

export default async function DocPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  return (
    <main>
      <h1>Documentation</h1>
      <p>Path: {slug.join(" / ")}</p>
    </main>
  );
}
