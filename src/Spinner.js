import React from 'react';

const Spinner = (props) =>{
    return (
        <div className='ui active inverted dimmer'>
            <div className='ui big text loader'>
                {props.message}
            </div>
        </div>
    )
}
// if the message text is not provided as props, this will be used
Spinner.defaultProps = {
    message: 'Loading...'
}

export default Spinner;