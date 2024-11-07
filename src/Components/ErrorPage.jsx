import { GiTerror } from "react-icons/gi";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center text-center my-[4rem] mx-auto w-[75%]">
            <p className="text-[4rem] leading-[4.5rem] font-extrabold text-red-600 mb-8">OOPS! Looks like something went wrong</p>
            <GiTerror className="text-[8rem] font-extrabold text-red-600"></GiTerror>
        </div>
    );
};

export default ErrorPage;