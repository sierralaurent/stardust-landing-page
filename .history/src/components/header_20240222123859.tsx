import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
    return(
        <>
        <header className="navbar bg-accent text-neutral-content bg-White flex flex-row justify-between">
            <div>
                <Link href='/'><Image 
                    src='assets/stardustLogo.svg'
                    width={80}
                    height={80}
                    alt='Logo'
                    /></Link>
            </div>
            <div>
                <button className="btn btn-outline btn-primary">Sign Up Today</button>
            </div>
        </header>
        </>
    )
}