import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
    return(
        <>
        <header className="navbar text-neutral-content bg-White flex flex-row justify-between p-3">
            <div>
                <Link href='/'><Image 
                    src='assets/stardustLogo.svg'
                    width={80}
                    height={80}
                    alt='Logo'
                    /></Link>
            </div>
            <div>
                <button className="btn btn-Drak">Sign Up Today</button>
            </div>
        </header>
        </>
    )
}