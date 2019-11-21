import React from 'react';
import PropTypes from 'prop-types';

function HelloWord({message}) {
    return <div>Hello {message}</div>
}

HelloWord.protoTypes = {
    message: PropTypes.string
};

HelloWorld.defaultProps = {
    message:'World'
}
export default HelloWord;