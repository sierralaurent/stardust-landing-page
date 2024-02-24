import Button from '@/components/button'

export default function Hero() {
    return(
        <>
        <div className="hero min-h-screen bg-Dark">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-5xl font-bold">The Horoscope App for Everyone!</h1>
                <p className="py-6">Download the latest and greatest everyday horoscope app that just hit the market.</p>
                <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
            </div>
        </>
    )
}