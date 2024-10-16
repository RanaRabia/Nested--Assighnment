import Link from "next/link"
import Homestyle from "./page.module.css"

const Homepage = () => {
  return (
    <div className={Homestyle.container}>
      <ul>
      <li><Link href="/">HOME</Link></li>
      <li><Link href="/about">ABOUT</Link></li>
      <li><Link href="/contact">CONTACT</Link></li>
      <li><Link href="/service">SERVICE</Link></li>
      </ul>
      <h1 className={Homestyle.heading}>THIS IS OUR HOMEPAGE</h1>
      <h2 className={Homestyle.info}>THIS IS OUR MAIN PAGE.WE COONECT ALL OTHER PAGES WITH THIS PAGE</h2>
    </div>
  )
}

export default Homepage
