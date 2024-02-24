import ThreeStar from '@/components/spline/threeStar'

export default function Card03() {
    return(
        <>
            <div className="card w-96 h-fit glass">
            <figure><ThreeStar /></figure>
            <div className="card-body flex flex-col items-center gap-5">
                <h2 className="card-title text-2xl font-bold">STAR LEVEL THREE</h2>
                <div className={'flex flex-col gap-3 items-start justify-start'}>
                    <p className='font-bold'>The most perks and features like...</p>
                    <li>Unlimited Horoscopes per day</li>
                    <li>Unlimited Zodiac Sign inputs</li>
                    <li>Share with Friends</li>
                    </div>
                <h3 className={'text-3xl'}>$10</h3>
                <h3 className={'text-xl'}>Billed Monthly</h3>
                <div className="card-actions ">
                <button className="text-Dark hover:scale-110 transition-transform btn bg-Yellow hover:bg-Yellow">Get Now!</button>
                </div>
            </div>
            </div>
        </>
        )
    }