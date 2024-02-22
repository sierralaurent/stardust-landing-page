import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return(
        <>
        <footer className="footer footer-center p-10 bg-LightPurple text-primary-content">
            <aside className={'flex flex-col gap-5'}>
                
                <div>
                <Image
                src='assets/wordmark-dark.svg'
                width={175}
                height={175}
                alt='logo'
                />
                </div> 
                <div className={'flex flex-col'}>
                    <p className={'text-lg text-white'}>Sierra Laurent</p>
                    <p className={'font-bold text-lg text-white'}>Copyright © 2024 – All Rights Reserved</p>
                </div>
            </aside> 
            <nav>
                <div className="grid grid-flow-col gap-4 ">
                <p>See Project</p>
                <Link href="https://github.com/raxron/StarDust"><Image
                src='assets/githubLogo.svg'
                width={50}
                height={50}
                alt='github logo'
                /></Link>
                </div>
            </nav>
        </footer>
        </>
    )
}