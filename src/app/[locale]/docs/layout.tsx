import "../globals.css";
export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 prose dark:prose-invert">
      {children}
    </main>
  );
}
