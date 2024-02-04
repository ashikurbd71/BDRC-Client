import React from 'react';

const Container = ({children}) => {
    return (
        <div className='mx-auto w-full lg:py-10 min-h-screen'>
            {children}
        </div>
    );
};

export default Container;