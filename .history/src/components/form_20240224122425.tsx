import Button from '@/components/button'

export default function Form() {
    return(
        <>
        <div className="hero min-h-screen bg-Dark">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Sign-Up For Our Newsletter!</h1>
                <p className="py-6">Get exclusive offers, updates on the latest features and more!</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Name</span>
                    </label>
                    <input type="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required />
                    
                    </div>
                    <div className="form-control mt-6 items-center">
                    <Button>Sign Me Up!</Button>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </>
    )
}