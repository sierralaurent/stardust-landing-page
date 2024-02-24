import TwoStar from '@/components/spline/twoStar'

export default function Card02() {
    return(
        <>
            <div className="card w-96 glass">
            <figure><TwoStar /></figure>
            <div className="card-body flex flex-col items-center gap-5">
                <h2 className="card-title text-2xl font-bold">STAR LEVEL TWO</h2>
                <div className={'flex flex-col items-start justify-start'}>
                    <p>Some perks and features like...</p>
                    <li>one</li>
                    <li>two</li>
                    <li>thtree</li>
                    </div>
                <h3 className={'text-3xl'}>$15</h3>
                <div className="card-actions ">
                <button className="btn btn-primary bg-Yellow hover:bg-Yellow">Get Now!</button>
                </div>
            </div>
            </div>
        </>
        )
    }