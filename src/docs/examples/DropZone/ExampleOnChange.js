import React from 'react'
import DropZone from 'ps-react/DropZone';

export default class ExampleonChange extends React.Component {
    constructor(props) {
        super(props);
        this.state = { files:[] };
    }

    handleChange(files){
        this.setState({files: files});        
    }

    render(){
        return (
            <DropZone 
            htmlId="dzOnChange"
            onChange={this.handleChange.bind(this)} />
        )
    }
}