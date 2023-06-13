

const ClassCard = ({data}) => {
   
    return (
        <div className="" data-aos="zoom-out-down">
            <div className="card card-compact md:w-96 sm:w-auto bg-base-100 shadow-xl ">
  <figure><img src={data.image} alt="Shoes" className="h-60"/></figure>
  <div className="card-body">
    <h2 className="card-title">{data.category}</h2>
    <p>Duration : {data.duration} month</p>
    <p>Student : {data.studentNumber} </p>
    <p>Type : {data.data} </p>
    {/* <div className="card-actions justify-end">
      <button className="btn">Buy Now</button>
    </div> */}
  </div>
</div>
        </div>
    );
};

export default ClassCard;