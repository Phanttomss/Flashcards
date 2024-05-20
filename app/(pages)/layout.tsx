import Navbar from "./_components/navbar";

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="h-[100vh]">
        <Navbar />
        {children}
      </div>
  );
}
