import { ClipLoader } from "react-spinners";



const Spinner = () => {
    return (
        <div className="flex justify-center items-center mt-20">
            <ClipLoader />
            <p>Loading......</p>
        </div>
    );
};

export default Spinner;