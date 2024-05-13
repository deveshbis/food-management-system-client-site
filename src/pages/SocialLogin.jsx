// import { useLocation, useNavigate } from "react-router-dom";
// import useAuth from "../Hooks/useAuth";
// import { FaGithub, FaGoogle } from "react-icons/fa";


// const SocialLogin = () => {
//     const { googleLogin, gitHubLogin } = useAuth();

//     const navigate = useNavigate();
//     const location = useLocation();

//     const from = location?.state || '/';

//     const handleSocialLogin = socialProvider => {
//         socialProvider()
//             .then(result => {
//                 if (result.user) {
//                     navigate(from);
//                 }
//             })
//     }

//     return (

//         <div className="p-5">
//             <div className="flex items-center pb-3 space-x-1">
//                 <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
//                 <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
//                 <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
//             </div>
        
//             <div className=" flex flex-col items-center space-y-2">
//                 <button onClick={() => handleSocialLogin(googleLogin)} className="btn btn-outline w-full">
//                     <FaGoogle></FaGoogle>
//                     Google
//                 </button>
//                 <button onClick={() => handleSocialLogin(gitHubLogin)} className="btn btn-outline w-full">
//                     <FaGithub></FaGithub>
//                     Github
//                 </button>
//             </div>
//         </div>

//     );
// };

// export default SocialLogin;








import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { FaGithub, FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";
import axios from "axios";


const SocialLogin = () => {
    const { googleLogin, gitHubLogin } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();

    const from = location?.state || '/';

    const handleGoogleSignIn = async () => {
        try {
          // 1. google sign in from firebase
          const result = await googleLogin()
          console.log(result.user)
    
        //   2. get token from server using email
          const { data } = await axios.post(
            `http://localhost:5000/jwt`,
            {
              email: result?.user?.email,
            },
            { withCredentials: true }
          )
          console.log(data)
          toast.success('Signin Successful')
          navigate(from, { replace: true })
        } catch (err) {
          console.log(err)
          toast.error(err?.message)
        }
      }

    const handleGithubSignIn = async () => {
        try {
          // 1. google sign in from firebase
          const result = await gitHubLogin()
          console.log(result.user)
    
        //   2. get token from server using email
          const { data } = await axios.post(
            `http://localhost:5000/jwt`,
            {
              email: result?.user?.email,
            },
            { withCredentials: true }
          )
          console.log(data)
          toast.success('Signin Successful')
          navigate(from, { replace: true })
        } catch (err) {
          console.log(err)
          toast.error(err?.message)
        }
      }

    return (

        <div className="p-5">
            <div className="flex items-center pb-3 space-x-1">
                <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                <p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
                <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
            </div>
        
            <div className=" flex flex-col items-center space-y-2">
                <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Google
                </button>
                <button onClick={handleGithubSignIn} className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Github
                </button>
            </div>
        </div>

    );
};

export default SocialLogin;