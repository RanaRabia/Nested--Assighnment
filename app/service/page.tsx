import Link from "next/link"
import Servicestyle from "./service.module.css"


const Servicepage = () => {
  return (
    <div className={Servicestyle.container}>
        <h1 className={Servicestyle.heading}>THIS IS OUR SERVICE PAGE</h1>
        <h2 className={Servicestyle.info}>WE PROVIDE DIFFERENT SERVICES </h2>
        <ul>
      <li><Link href="/"> GO TO HOME PAGE</Link></li>
      <li><Link href="/service/graphic-desighn">GO TO GRAPHIC DESIGHNER PAGE</Link></li>
      <li><Link href="/service/video-editing">GO TO VIDEO-EDITING PAGE</Link></li>
      </ul>
    
    </div>
  )
}

export default Servicepage