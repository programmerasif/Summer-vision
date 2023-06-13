import notFound from '../assets/98642-error-404.json'
import Lottie from "lottie-react";
const ErrorPage = () => {
    return (
        <div className='w-[40%] mx-auto'>
             <Lottie animationData={notFound} loop={true} />
        </div>
    );
};

export default ErrorPage;