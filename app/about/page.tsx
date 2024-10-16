import Link from "next/link"
import Aboutstyle from "./about.module.css"


const Aboutpage = () => {
  return (
    <div className={Aboutstyle.container}>
        <h1 className={Aboutstyle.heading}>THIS IS ABOUT PAGE</h1>
        <h2 className={Aboutstyle.info}>IT TELLS ABOUT IMPORTANT THINGS</h2>
        <ul>
      <li><Link href="/">GO TO HOME PAGE</Link></li>
      <li><Link href="/contact">GO TO CONTACT PAGE</Link></li>
      <li><Link href="/service">GO TO SERVICE PAGE</Link></li>
      </ul> 
    
    </div>
  )
}

export default Aboutpage