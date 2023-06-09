
const ClassCard = ({data}) => {
    
    const admin = false
    const instructor = false
    console.log(data.availableSeats);
   
    return (
        <div className="">
            
            <div className={`card card-compact md:w-96 sm:w-auto  shadow-xl ${!data.availableSeats == 0 ?'bg-base-100' : 'bg-red-300 text-white'}`}>
                <figure><img src={data.image} alt="sports" className="h-60" /></figure>
                <div className="card-body">
                    <h2 className="card-title"> Name : {data.name}</h2>
                    <p>Instructor name : {data.trainerName} </p>
                    <p>Instructor Email : {data.email} </p>
                    <p>Available seats : {data.availableSeats} </p>
                    <p>Price : {data.price} </p>
                    {
                        data.availableSeats == 0 || admin || instructor? <><p> <button className='btn ' disabled> Select</button></p></> : <><p> <button className='btn btn-warning'> Select</button></p></>
                    }
                    {
                        !data.availableSeats && <> <p className="text-red-600">Sit are not available </p></>
                    }

                </div>
            </div>
        </div>
    );
};

export default ClassCard;