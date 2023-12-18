import { Nunito } from 'next/font/google'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import Modal from './components/modals/Modal'
import RegisterModal from './components/modals/RegisterModal'
import ToasterProvider from './providers/ToasterProvider'

const inter = Inter({ subsets: ['latin'] })
const font =Nunito({
  subsets:['latin']
})

export const metadata = {
  title: 'StayCasa',
  description: 'A comfortable and welcoming rental experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider></ToasterProvider>
        <RegisterModal />
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
