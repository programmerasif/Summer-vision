
import useClasses from "../Hooks/useClasses";
import HeadingTitle from "../components/Share/HeadingTitle";
import Weve from "../pages/Home/Marketing/Weve";
import ClassCard from "./ClassCard";


const AllClasses = () => {
   const [clas, refatch] = useClasses()
   
    return (
        <div>
            <div className="custom-container mt-24 mb-12">
            <HeadingTitle subHeading='Are you ready to join with us' heading='All classes'/>
            <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-5 justify-center items-center mt-20 ">
            {
                clas.map(data => <ClassCard key={data._id} data={data}/>)
            }
            </div>
        </div>
        <Weve />
        </div>
    );
};

export default AllClasses;