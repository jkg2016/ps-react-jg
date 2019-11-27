import React from 'react';
import {DropzoneArea} from 'material-ui-dropzone'; 

function DropZone({onChange}){
    return(
        <div>
            <DropzoneArea 
                onChange={onChange}
            />
        </div>
    )
};

export default DropZone;