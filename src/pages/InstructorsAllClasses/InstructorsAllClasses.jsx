import { useContext, useEffect, useState } from "react";
import useAxios from "../../Hooks/useAxios";
import { AuthContext } from "../../providers/AuthProviders";
import HeadingTitle from "../../components/Share/HeadingTitle";
import InstructorCard from "./InstructorCard";
import notFound from '../../assets/productNotFound/animation_lkyxho8u.json'
import Lottie from "lottie-react";

const InstructorsAllClasses = () => {
  const { user } = useContext(AuthContext);
  const [data, setdata] = useState([])
  const [feedback, setfeedback] = useState('')

  const [axiosSecure] = useAxios()
  useEffect(() => {
    axiosSecure.get(`instructorClasses/${user.email}`)
      .then(res => {
        setdata(res.data)
      })
  }, [])


  return (

    <div className="mb-5">
      <HeadingTitle heading='Your added class' />
      {
        data == 0 ? <div className="font-semibold md:text-xl sm:text-sm text-[#FFBF23] ">You didn't any class!</div> : ""
      }
      {
        data == 0 ? (
          <div className='flex justify-center items-center'>
              <Lottie animationData={notFound} loop={true} />
          </div>
      ) : <div>
          
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th className="hidden md:table-cell">Index</th>
                  <th className="hidden md:table-cell">Image</th>
                  <th className="text-start">Name</th>
                  <th className="">Enrolled Students</th>
                  <th className="hidden md:table-cell">Feedback</th>
                  <th>Status</th>
                  <th className="hidden md:table-cell">Action</th>


                </tr>
              </thead>
              <tbody>
                {
                  data?.map((item, i) => <InstructorCard key={item._id} i={i} item={item} setfeedback={setfeedback} />)
                }


              </tbody>

              <input type="checkbox" id="my_modal_7" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box">
                  <h3 className="text-lg font-bold">Admin Feedback</h3>
                  <p className="py-4">{feedback == null || feedback == undefined ? <> Admin does not write any feedback </> : <>{feedback}</>}</p>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
              </div>
            </table>
          </div>
        </div>
      }
    </div>

  );
};

export default InstructorsAllClasses;