import React, {Component} from "react";
import "../style.css";
import Form from "../components/Form";

class Input extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
          loading: false,
        };
      }

    handleSubmit = formData => {
        let email="garrett.hester@gmail.com";
        let meter="63057849";
        let smartMeterConsent="Y";


    }

    handleAddress = search => {
        console.log(search);

        
    }
    
    render () {
        return(
            <Form onClick={(formData) => this.handleSubmit(formData)} onChange={(search) => this.handleAddress(search)} addressList={addressList} />
        );
    }
}

export default Input;