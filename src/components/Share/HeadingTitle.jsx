import React from 'react';

const HeadingTitle = ({subHeading,heading}) => {
    return (
        <div>
            <h4 className="text-3xl text-center uppercase">{heading}</h4>
            <p className="mb-16 text-center text-sm uppercase">{subHeading}</p>
        </div>
    );
};

export default HeadingTitle;