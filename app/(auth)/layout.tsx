export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main suppressHydrationWarning>{children}</main>;
}
