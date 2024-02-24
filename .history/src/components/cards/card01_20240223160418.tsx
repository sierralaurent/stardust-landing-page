import OneStar from '@/components/spline/oneStar'

export default function Card01() {
    return(
        <>
            <div className="card w-96 glass">
            <figure><OneStar /></figure>
            <div className="card-body flex flex-col items-center gap-5">
                <h2 className="card-title text-2xl">STAR LEVEL ONE</h2>
                <p>Basic perks and features</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary bg-Yellow hover:bg-Yellow">Buy Now!</button>
                </div>
            </div>
            </div>
        </>
        )
    }