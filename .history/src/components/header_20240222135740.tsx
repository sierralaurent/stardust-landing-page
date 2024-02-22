import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/button'

export default function Header() {
    return(
        <>
        <header className="navbar text-neutral-content bg-LightPurple flex flex-row justify-between p-3">
            <div className={'hover:scale-110 transition-transform'}>
                <Link href='/'><Image 
                    src='assets/stardustLogo.svg'
                    width={80}
                    height={80}
                    alt='Logo'
                    /></Link>
            </div>
            <div className={'flex flex-row gap-5 items-center'}>
                <h1 className={'font-bold text-lg text-white hover:scale-110 transition-transform cursor-pointer'}>Contact</h1>
                <h1 className={'font-bold text-lg text-white hover:scale-110 transition-transform cursor-pointer'}>About</h1>
            <div className={'hover:scale-110 transition-transform font-bold'}>
                <Button>Sign Up Today!</Button>
            </div>
            </div>
            
        </header>
        </>
    )
}