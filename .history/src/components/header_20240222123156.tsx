import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
    return(
        <>
        <header className="navbar bg-accent text-neutral-content bg-LightPurple">
            <Link href='/'>
                <Image 
                src='assets/stardustLogo.svg'
                width={80}
                height={80}
                alt='Logo'
                />
            </Link>
        </header>
        </>
    )
}