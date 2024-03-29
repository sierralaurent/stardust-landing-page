import OneStar from '@/components/spline/oneStar'

export default function Card01() {
    return(
        <>
            <div className="card w-96 glass">
            <figure><OneStar /></figure>
            <div className="card-body">
                <h2 className="card-title">Price Card #1</h2>
                <p>How to park your car at your garage?</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn now!</button>
                </div>
            </div>
            </div>
        </>
        )
    }