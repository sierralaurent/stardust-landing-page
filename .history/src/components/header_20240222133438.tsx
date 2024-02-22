import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/button'

export default function Header() {
    return(
        <>
        <header className="navbar text-neutral-content bg-LightPurple flex flex-row justify-between p-3">
            <div>
                <Link href='/'><Image 
                    src='assets/stardustLogo.svg'
                    width={80}
                    height={80}
                    alt='Logo'
                    /></Link>
            </div>
            <div>
                <h1>Hello</h1>
                <h1>Goodbye</h1>
            <div>
                <Button>Sign Up Today!</Button>
            </div>
            </div>
            
        </header>
        </>
    )
}