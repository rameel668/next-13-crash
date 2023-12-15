import { Poppins } from 'next/font/google'
import './globals.css'
import Header from './components/header';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'] 
});

export const metadata = {
  title: 'Rameel Media',
  description: 'Web Development tutorials and resources',
  keywords: 'web development, programming, tutorials, react, nextjs, javascript, css, html, web design, web development resources, web development tutorials, web development blog, web development articles, web development tips, web development tricks, web development tools, web development techniques, web development technologies, web development best practices, web development for beginners, web development for dummies',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className='container'>
          {children}
        </main>
      </body>
    </html>
  )
}
