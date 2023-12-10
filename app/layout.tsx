// Import necessary libraries
import React from 'react';
import { ClerkProvider } from '@clerk/nextjs';
import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css'

export const metadata = {
  title: 'Next.js 13 with Clerk',
};

// Define RootLayout as a Client Component
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-green-900">
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
