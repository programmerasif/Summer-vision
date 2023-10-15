import React from 'react';

const Card = ({ data }) => {
    return (
        <div className="">
            <div className="card card-compact md:w-80 lg:w-[320px] 2xl:w-[380px]  sm:w-auto bg-gray-100 shadow-sl  mx-auto">
                <figure><img src={data.image} alt="Shoes" className="h-60" /></figure>
                <div className="card-body">
                    <h2 className="card-title"> Name : {data.name}</h2>
                    <p>Number of Student : {data.category} </p>
                    <p>Number of Student : {data.studentNumber} </p>
                    <p>Type : {data.type} </p>
                    <p>Email : {data.email} </p>

                </div>
            </div>
        </div>
    );
};

export default Card;