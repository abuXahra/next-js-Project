import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <aside>
        <h2>FLowVentory</h2>

        <nav>
          <p>
            <Link href="/dashboard">Dashbboard</Link>
          </p>
          <p>
            <Link href="/dashboard/products">Products</Link>
          </p>
          <p>
            <Link href="/dashboard/customers">Customers</Link>
          </p>
        </nav>
      </aside>
      <main>{children}</main>
    </div>
  );
}
