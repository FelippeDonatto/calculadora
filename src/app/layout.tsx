import '../styles/globals.css'
import { Rubik } from 'next/font/google'

const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'Calculadora'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={rubik.className}>
      <body className="bg-gradient-to-r from-violet-500 to-violet-400 text-gray-100">
        {children}
      </body>
    </html>
  )
}
