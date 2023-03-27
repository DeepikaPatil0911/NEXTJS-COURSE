import React from 'react'
import Link from 'next/link'

const Dummy = () => {
  return (
    <>
    <style jsx global>
        {`
        
        
        `}
    </style>
        <nav className='.nav_menu'>
            <ul>
            <Link  href="/about"><li>About us</li></Link>
            <Link  href="/blogs"><li>Blogs</li></Link>
            <Link  href="/contact"><li>Contact us</li></Link>
            </ul>
        </nav>
    </>
  )
}

export default Dummy