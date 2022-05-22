import React from "react"
import "../../Styles/Components/Forms/forms.css"

function Forms() {
 return(
    <section className="form-section">
    <h2>Have Questions?</h2>
    <form className="form-layout">
        <label>
            Name:
            <input type={"text"}></input>
        </label>
        <label>
            Phone Number:
            <input type={"tel"}></input>
        </label>
        <label>
            Email:
            <input type={"email"}></input>
        </label>
        <label>
            Your comment:
            <textarea></textarea>
        </label>
    </form>
</section>
 )   
}


export default Forms