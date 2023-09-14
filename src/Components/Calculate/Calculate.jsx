import React from 'react';
import PropTypes from 'prop-types';

const Calculate = ({getCards, cost, remaining}) => {
    return (
        <>

        <div className='1/4'>
            <h1 className='text-4xl'>calculate:{getCards.length}</h1>
            <h1 className='text-4xl'>Balance: {remaining}</h1>
            <h1 className='text-4xl'>Cost: {cost}</h1>
        </div>
        {
            getCards.map(card => <li>{card.name}</li>)
        }

       </>
    )
};

Calculate.propTypes = {
    
};

export default Calculate;