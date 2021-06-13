import React, {Component} from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/index";
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
        
    }

    handleRepInput = search => {
        document.getElementById("repSearchContainer").style.visibility = "visible";
        if(search.length > 2){
            this.props.onRepInput(search);
        } else {
            this.props.onRepInput("asdf");
        }
    }

    handleRepClick = (rorNum, repName) => {
        document.getElementById("rep").value = repName;
        document.getElementById("repSearchContainer").style.visibility = "hidden";
        this.props.onRepClick(rorNum, repName);
    }
    
    render () {
        return(
            <div>
                <Form onClick={(formData) => this.handleSubmit(formData)} onChange={(search) => this.handleRepInput(search)} onRepClick={(rorNum, repName) => this.handleRepClick(rorNum, repName)} search={this.props.search} repName={this.props.repName}/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRepInput: (search) => dispatch(actions.search_rep(search)),
        onRepClick: (rorNum, repName) => dispatch(actions.set_rorNum(rorNum, repName))
    };
  };
  
  const mapStateToProps = (state) => {
    return {
        search: state.search,
        PUCTRORNumber: state.PUCTRORNumber,
        repName: state.repName
    };
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(Input);