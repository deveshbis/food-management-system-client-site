import { toast } from "react-toastify";
import useAuth from "../Hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";


const Register = () => {

    const { createUser, updateUserProfile, setReload } = useAuth();
    const navigate = useNavigate();
    const from = '/' ;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    // const onSubmit = async (data) => {
    //     const { email, password, image, fullName } = data;
    //     try {
    //         await createUser(email, password);
    //         toast.success("Registration successful!");

    //         // Update user profile
    //         const result = await updateUserProfile(fullName, image);
    //         console.log(result.user)

    //         const { data } = await axios.post(
    //             `http://localhost:5000/jwt`,
    //             {
    //                 email: result?.user?.email,
    //             },
    //             { withCredentials: true }
    //         )
    //         console.log(data)
    //         toast.success('Signin Successful')
    //         navigate(from, { replace: true })
    //         setReload(true)
    //     } catch (err) {
    //         console.log(err)
    //         toast.error(err?.message)
    //     }
    // };







    const onSubmit = (data) => {
        const { email, password, image, fullName } = data;
        createUser(email, password)
            .then(() => {
                toast.success("Registration successful!");
                updateUserProfile(fullName, image)
                    .then(() => {
                        toast.success("Registration successful!");
                        navigate(from, { replace: true });
                        setReload(true)
                    })
            }).catch(error => {
                toast.error(`Failed to register: ${error.message}`);
            });
    };

    const passwordValidation = {
        required: "Password is required",
        minLength: {
            value: 6,
            message: "Password must have at least 6 characters"
        },
        validate: {
            uppercase: v => /[A-Z]/.test(v) || "Password must include an uppercase letter",
            lowercase: v => /[a-z]/.test(v) || "Password must include a lowercase letter",
        }
    };

    return (
        <div className='mt-20'>
            {/* <ToastContainer /> */}
            <div className="hero min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" placeholder="Full Name" className="input input-bordered" {...register("fullName", { required: true })} />
                                {errors.fullName && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" className="input input-bordered" {...register("email", { required: true })} />
                                {errors.email && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" placeholder="Photo Url" className="input input-bordered" {...register("image", { required: true })} />

                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                                <div className="relative">
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="input input-bordered pr-12"
                                        {...register("password", passwordValidation)}
                                    />
                                </div>

                                {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                                <label>
                                    <Link to='/login' className="flex justify-between items-center">
                                        Have an Account? <span className="label hover:underline text-blue-700">Login Now</span>
                                    </Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn  bg-[#BF4C41] text-white hover:bg-black">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;