export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2>My App</h2>
      <main> {children}</main>
    </div>
  );
}
