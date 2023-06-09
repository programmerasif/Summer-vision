
import design from '../../assets/design.png'

const HeadingTitle = ({subHeading,heading}) => {
    return (
        <div>
            <h4 className="md:text-3xl sm:text-2xl text-center uppercase flex justify-center items-center mb-5 mt-5"><img className='w-16 h-16' src={design} alt="" /> {heading} <img className='w-16 h-16' src={design} alt="" /></h4>
            {subHeading && <p className="mb-16 text-center text-sm uppercase">{subHeading}</p>}
            
        </div>
    );
};

export default HeadingTitle;