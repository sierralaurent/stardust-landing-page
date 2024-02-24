import TwoStar from '@/components/spline/twoStar'

export default function Card02() {
    return(
        <>
            <div className="card w-96 glass">
            <figure><TwoStar /></figure>
            <div className="card-body">
                <h2 className="card-title">Price Card #2</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn now!</button>
                </div>
            </div>
            </div>
        </>
        )
    }