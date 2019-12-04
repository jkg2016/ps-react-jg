import React from 'react';
import {DropzoneArea} from 'material-ui-dropzone'; 

function DropZone({htmlId, acceptedFiles, filesLimit, maxFileSize, dropzoneText, dropzoneClass, showFileNames,showFileNamesInPreview, showAlerts, onChange, onDrop, onDropRejected, onDelete}){
    return(
        <div>
            <DropzoneArea 
                id={htmlId}
                acceptedFiles={acceptedFiles}
                filesLimit={filesLimit}
                maxFileSize={maxFileSize}
                dropzoneText={dropzoneText}
                dropzoneClass={dropzoneClass}
                showFileNames = {showFileNames}
                showFileNamesInPreview={showFileNamesInPreview}
                showAlerts = {showAlerts}
                onChange={onChange}
                onDrop={onDrop}
                onDropRejected={onDropRejected}
                onDelete={onDelete}
            />
        </div>
    )
};

DropZone.propTypes = {
    /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */
    htmlId: PropTypes.string.isRequired,

    /** A list of file mime types to accept. Does support wildcards. */
    acceptedFiles: PropTypes.array,

    /** Maximum number of files that can be loaded into the dropzone */
    filesLimit: PropTypes.number,

    /** Maximum file size (in bytes) that the dropzone will accept */
    maxFileSize: PropTypes.number,

    /** Text in dropzone */
    dropzoneText: PropTypes.string,

    /** Custom CSS class name for dropzone container. */
    dropzoneClass: PropTypes.string,

    /** Placeholder to display when empty */
    showFileNames: PropTypes.bool,

    /** Shows preview INSIDE the dropzone */
    showFileNamesInPreview: PropTypes.bool,

    /** shows styled snackbar alerts when files are dropped, deleted or rejected. */
    showAlerts: PropTypes.bool,

    /** Function to call onChange */
    onChange: PropTypes.func.isRequired,

    /** Function to call onDrop */
    onDrop: PropTypes.func.isRequired,

    /** Function to call onDropRejected */
    onDropRejected: PropTypes.func.isRequired,

    /** Function to call onDelete */
    onDelete: PropTypes.func.isRequired,
}

DropZone.defaultProps = {
    acceptedFiles: ['pdf/*', 'jpg/*'],
    filesLimit: 3,
    maxFileSize: 512000,
    dropzoneText: 'Drag and drop an image file here or click',
    showFileNames: false,
    showFileNamesInPreview: false,
    showAlerts: true
    
}
export default DropZone;