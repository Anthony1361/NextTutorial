'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"


const Navbar = () => {
  const pathName = usePathname();

  return (
    <div>

        {pathName == "/about" ? (
          <Link className="link" href='/about'>About</Link>
        ) : (
          <Link className="link" href='/users'>Users</Link>
        )}

        <nav>
            <ul>
                <div className="logo">
                    <h1>Logo</h1>
                </div>

                <div className="link-container">
                    <Link className="link" href='/'>Home</Link>
                    <Link className="link" href='/about'>About</Link>
                    <Link className="link" href='/users'>Users</Link>
                </div>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar