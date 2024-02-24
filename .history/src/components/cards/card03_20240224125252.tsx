import ThreeStar from '@/components/spline/threeStar'

export default function Card03() {
    return(
        <>
            <div className="card w-96 glass">
            <figure><ThreeStar /></figure>
            <div className="card-body flex flex-col items-center gap-5">
                <h2 className="card-title text-2xl font-bold">STAR LEVEL THREE</h2>
                <div className={'flex flex-col items-start justify-start'}>
                    <p>The most perks and features like...</p>
                    <li>Unlimited Horoscopes per day</li>
                    <li>Unlimited Zodiac Sign inputs</li>
                    <li>thtree</li>
                    </div>
                <h3 className={'text-3xl'}>$30</h3>
                <div className="card-actions ">
                <button className="text-Dark hover:scale-110 transition-transform btn bg-Yellow hover:bg-Yellow">Get Now!</button>
                </div>
            </div>
            </div>
        </>
        )
    }