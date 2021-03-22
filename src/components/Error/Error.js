import React from 'react';

const Error = ({error}) => {
    return <div data-testid='error_page'> 
        {error ? <span>{error}</span> : ''}
    </div>
}

export default Error;