import React from 'react'
import Link from 'next/link'

const Dummy = () => {
  return (
    <>
    <style jsx global>
        {`
        .nav_menu{
          padding: 30px 0;
        }
        
        .nav_menu ul{
          display: flex;
          justify-content: center;
          align-items: center;
          list-style: none;
        
        }
        
        .nav_menu ul li{
          padding: 0 15px
        }
        
        `}
    </style>
        <nav className='nav_menu'>
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