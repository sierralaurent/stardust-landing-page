import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return(
        <>
        <footer className="footer footer-center p-8 bg-LightPurple text-primary-content">
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
                    <p className={'text-white'}>See Project</p>
                </div>
                <div className="flex flex-row items-center gap-4 ">
                    <Link href="https://github.com/raxron/StarDust"><Image
                    className={'hover:scale-110 transition-transform'}
                    src='assets/githubLogo.svg'
                    width={50}
                    height={50}
                    alt='github logo'
                    /></Link>
                    <Link href="https://stardust-horoscope.vercel.app/"><Image
                    className={'hover:scale-110 transition-transform'}
                    src='assets/web-icon.svg'
                    width={50}
                    height={50}
                    alt='website logo'
                    /></Link>
                </div>
            </aside> 
        </footer>
        </>
    )
}