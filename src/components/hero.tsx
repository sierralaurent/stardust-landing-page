import Button from '@/components/button'
import Heart from '@/components/spline/heart'
import Image from 'next/image'

export default function Hero() {
    return(
        <>
        <div className="hero py-52 bg-Dark">
            <div className="hero-content flex-row ">
            <Heart />
            <div className='p-3'>
                <Image
                className='py-8'
                src='assets/wordmark.svg'
                width={500}
                height={500}
                alt='stardust wordmark'
                />
                <h1 className="text-3xl font-bold">The Horoscope App for Everyone!</h1>
                <p className="py-6">Find out more on the latest and greatest everyday horoscope app that just hit the market.</p>
                <Button>Get Started</Button>
                </div>
            </div>
            </div>
        </>
    )
}