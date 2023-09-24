import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
export const metadata = {
  title: 'Next.js 13 with Clerk',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className='bg-green-900'>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}