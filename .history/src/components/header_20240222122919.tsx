import Link from 'next/link'

export default function Header() {
    return(
        <>
        <header className="navbar bg-accent text-neutral-content bg-LightPurple">
            <Link href='/'><button className="btn btn-ghost text-xl text-Dark font-bold hover:scale-110 transition-transform">STARDUST</button></Link>
        </header>
        </>
    )
}