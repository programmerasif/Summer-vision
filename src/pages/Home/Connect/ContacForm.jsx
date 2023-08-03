
const ContacForm = () => {
    return (
        <div>
            <form  className="w-full md:w-[60%] mx-auto text-black">
        <input placeholder="Write your name" name="name" className="w-full mb-4 px-4 py-2 rounded-md border border-sky-500"/>
        <input  placeholder="Enter your email" name="email" className="w-full mb-4 px-4 py-2 rounded-md border border-sky-500"/>
        
        <textarea  placeholder="Type your message" name="message" className="w-full mb-4 px-4 py-2 rounded-md border border-sky-500"/>
        <input type="Submit" value='Send' className="w-full px-4 py-2 text-white rounded-md border border-sky-400 bg-gray-400 hover:bg-gray-300 border-none duration-300"/>
      </form>
        </div>
    );
};

export default ContacForm;