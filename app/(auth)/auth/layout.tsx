export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="h-[100vh] flex justify-center items-center">
        {children}
      </div>
  );
}
