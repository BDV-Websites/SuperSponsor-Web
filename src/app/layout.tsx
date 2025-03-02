import React from 'react';
import type { Metadata } from 'next/types';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'SuperSponsor',
  description: 'SuperSponsor - Web Application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
} 