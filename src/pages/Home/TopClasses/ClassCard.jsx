import { motion } from "framer-motion"

const ClassCard = ({ data }) => {

  return (

    <>
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.1 }}
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
    >
      <div className="card card-compact md:w-96 sm:w-auto bg-base-100 shadow-xl ">
      <figure><img src={data.image} alt="Shoes" className="h-60" /></figure>
      <div className="card-body">
        <h2 className="card-title">{data.category}</h2>
        <p>Duration : {data.duration} month</p>
        <p>Student : {data.studentNumber} </p>
        <p>Type : {data.data} </p>
      </div>
    </div>
    </motion.div>
    
    </>

  );
};

export default ClassCard;