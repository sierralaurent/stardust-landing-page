import Button from '@/components/button'
import Heart from '@/components/spline/heart'

export default function Hero() {
    return(
        <>
        <div className="hero py-52 items-center bg-Dark">
            <div className="hero-content flex-row ">
                <div className='p-3'>
                    <Heart />
                </div>
                <div>
                    <h1 className="text-5xl font-bold">The Horoscope App for Everyone!</h1>
                    <p className="py-6">Download the latest and greatest everyday horoscope app that just hit the market.</p>
                    <Button>Get Started</Button>
                </div>
            </div>
            </div>
        </>
    )
}