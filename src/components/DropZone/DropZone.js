import React from 'react';
import PropTypes from 'prop-types';
import {DropzoneArea} from 'material-ui-dropzone'; 

function DropZone({htmlId, initialFiles, acceptedFiles, filesLimit, maxFileSize, dropzoneText, dropzoneClass, showFileNames,showFileNamesInPreview, showAlerts, onChange, onDrop, onDropRejected, onDelete,r, children, ...props}){
    return(
        <div>
            <DropzoneArea 
                id={htmlId}
                initialFiles={initialFiles}
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
                {...props}
            />
            {children}
        </div>
    )
};

DropZone.propTypes = {
    /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */
    htmlId: PropTypes.string.isRequired,

    /** A list of file mime types to accept. Does support wildcards. */
    initialFiles: PropTypes.array,

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
    onDrop: PropTypes.func,

    /** Function to call onDropRejected */
    onDropRejected: PropTypes.func,

    /** Function to call onDelete */
    onDelete: PropTypes.func,
}

DropZone.defaultProps = {
    initialFiles:[],
    acceptedFiles: ['pdf/*', 'image/*'],
    filesLimit: 3,
    maxFileSize: 512000,
    dropzoneText: 'Drag and drop an image file here or click! (Max file size is 500MB)',
    showFileNames: false,
    showFileNamesInPreview: false,
    showAlerts: true
    
}
export default DropZone;