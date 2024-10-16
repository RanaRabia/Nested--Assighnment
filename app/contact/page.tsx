import Link from "next/link"

import Contactstyle from "./contact.module.css"
const Contactpage = () => {
  return (
    <div className={Contactstyle.container}>
        <h1 className={Contactstyle.heading}>THIS IS OUR CONTACT PAGE</h1>
        <h2 className={Contactstyle.info}>YOU CAN CONTACT US FOR THIS PAGE</h2>
        <ul>
      <li><Link href="/">GO TO HOME PAGE</Link></li>
      <li><Link href="/about">GO TO ABOUT PAGE</Link></li>
      <li><Link href="/service">GO TO SERVICE PAGE</Link></li>
      </ul> 

    </div>
  )
}

export default Contactpage