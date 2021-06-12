import React from 'react';
import "../style.css";

const Form = props => {
    return(
        <div class="form">
            <div class="title">Howdy</div>
               <div class="subtitle">Let's find the plan for you!</div>
            <div class="input-container ic1">
                <input id="address" class="input" type="text" placeholder=" " />
                <div class="cut"></div>
                <label for="address" class="placeholder">
                    Service Address
                </label>
            </div>
            <div class="input-container ic2">
                <input id="rep" class="input" type="text" placeholder=" " 
                    onChange={(event) => {
                        const { value: search } = event.target;
                        props.onChange(search);
                    }}
                />
                <div class="cut cut-short"></div>
                <label for="rep" class="placeholder">
                    Your Current Electricity Provider
                </label>
            </div>
            <div class="legal">
                <input type="checkbox" class="checkbox"/>I agree to this thorough legal agreement
            </div>
            <button type="text" class="submit">
            submit
            </button>
      </div>
    );
};

export default Form;