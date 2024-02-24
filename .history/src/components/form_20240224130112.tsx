import { useState } from 'react';

export default function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);
        setName('');
        setEmail('');
    };

    return (
        <>
            <div className="hero py-52 bg-Dark">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign-Up For Our Newsletter!</h1>
                        <p className="py-6">Get exclusive offers, updates on the latest features, and more!</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        {submitted ? (
                            <div className="card-body">
                                <p className="text-center">Thank you for signing up!</p>
                            </div>
                        ) : (
                            <form className="card-body" onSubmit={handleFormSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="input input-bordered"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-bold">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="input input-bordered"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-control mt-6 items-center">
                                    <button type="submit" className="flex w-fit p-3 text-lg font-bold text-Dark rounded-lg cursor-pointer bg-Yellow hover:scale-110 transition-transform">Sign Me Up!</button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}