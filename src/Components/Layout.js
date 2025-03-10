import React from 'react'
import Navbar from './common/Navbar'
import Footer from './common/Footer'

export default function Layout({children}) {
  return (
    <div>
        <Navbar />
            {children}
        <Footer />
    </div>
  )
}
