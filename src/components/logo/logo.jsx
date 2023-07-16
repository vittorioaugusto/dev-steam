import Image from 'next/image'
import style from './logo.module.css'

export default function Logo(){
    return(
        <div className={style.logo}>
            <Image src='/logo.svg' width={60} height={60} />
            <h1 className={style.name}>DevSteam</h1>
        </div>
    )
}