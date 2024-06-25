import '@/app/ui/global.css';
import { lusitiana } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lusitiana.className} antialiased`}>{children}</body>
    </html>
  );
}