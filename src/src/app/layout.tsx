import type { Metadata } from 'next';
import '../styles/globals.css';
import { Toaster } from 'sonner@2.0.3';

export const metadata: Metadata = {
  title: 'Albertsons Enterprise Store',
  description: 'Enterprise app store for Albertsons Companies employees',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}