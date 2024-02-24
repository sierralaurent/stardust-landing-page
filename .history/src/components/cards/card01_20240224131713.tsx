import OneStar from '@/components/spline/oneStar'

export default function Card01() {
    return(
        <>
            <div className="card w-96 h-fit glass">
            <figure><OneStar /></figure>
            <div className="card-body flex flex-col items-center gap-5">
                <h2 className="card-title text-2xl font-bold">STAR LEVEL ONE</h2>
                <div className={'flex flex-col gap-3 items-start justify-start'}>
                    <p className='font-bold'>Basic perks and features like...</p>
                    <li>One Horoscope per day</li>
                    <li>One Zodiac sign input per day</li>
                    </div>
                <h3 className={'text-3xl'}>$0</h3>
                <div className="card-actions ">
                <button className="text-Dark hover:scale-110 transition-transform btn bg-Yellow hover:bg-Yellow">Get Now!</button>
                </div>
            </div>
            </div>
        </>
        )
    }