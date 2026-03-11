import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MARTIVAD - English Grammar Learning',
  description: 'Learn English grammar tenses with Georgian explanations',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
