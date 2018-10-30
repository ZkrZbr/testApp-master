import React from 'react';
import validator from 'validator';

export default class AddContact extends React.Component{
    constructor(props){
        super(props);
        this.onSubmitContact = this.onSubmitContact.bind(this);
        this.state = {
            contact: {
                name: "", email: "", mobileNumber: "", message: ""
            },
            errors: {
                name: "", email: "", mobileNumber: "", message: ""
            }
        };
    }
    onSubmitContact(e){
        e.preventDefault();

        const name         = e.target.elements[0].value.trim();
        const email        = e.target.elements[1].value.trim();
        const mobileNumber = e.target.elements[2].value.trim();
        const message      = e.target.elements[3].value.trim();

        const validateEmail =  validator.isEmail(email);

        if(validateEmail == true && name && mobileNumber && message){
            const contact = { name, email, mobileNumber, message };
            const errors = {
                name: "", email: "", mobileNumber: "", message: ""
            };
            this.setState(() => ({ contact, errors }));
            //console.log(contact);
            //console.log(errors);
            const uri = "http://localhost:3000/api/contacts";
            $.post(uri, contact).then(function (data) {
                // console.log(data);
            });
            for(let counter = 0; counter < 4; counter++) {
                e.target.elements[counter].value = "";
            }
            this.props.setOption();
        }else {
            const contact = { name, email, mobileNumber, message };
            if(validateEmail == false) {
                this.setState((previousState) => ({
                    contact,
                    errors: {
                        ...previousState.errors,
                        email: "Please enter your email : m@g.x",
                    }
                }));
                //console.log("Please enter your email : m@g.x");
            }else {
                this.setState((previousState) => ({
                    contact,
                    errors: {
                        ...previousState.errors,
                        email: "",
                    }
                }));
            }
            if(name == "") {
                this.setState((previousState) => ({
                    contact,
                    errors: {
                        ...previousState.errors,
                        name: "Please enter your name",
                    }
                }));
                //console.log("Please enter your name");
            }else {
                this.setState((previousState) => ({
                    contact,
                    errors: {
                        ...previousState.errors,
                        name: "",
                    }
                }));
            }
            if(mobileNumber == "") {
                this.setState((previousState) => ({
                    contact,
                    errors: {
                        ...previousState.errors,
                        mobileNumber: "Please enter your phone",
                    }
                }));
                //console.log("Please enter your phone");
            }else {
                this.setState((previousState) => ({
                    contact,
                    errors: {
                        ...previousState.errors,
                        mobileNumber: "",
                    }
                }));
            }
            if(message == "") {
                this.setState((previousState) => ({
                    contact,
                    errors: {
                        ...previousState.errors,
                        message: "Please enter your message"
                    }
                }));
                //console.log("Please enter your message");
            }else {
                this.setState((previousState) => ({
                    contact,
                    errors: {
                        ...previousState.errors,
                        message: ""
                    }
                }));
            }
        }
    }
    render(){
        return (
            <form onSubmit={this.onSubmitContact}>
                <input required type="text" placeholder="Name" className="mb-2" />
                <span className={ this.state.errors.name == "" ? "fa fa-user user" : "fa fa-user user text-danger"} ></span>

                <input required type="text" placeholder="Email" className="mb-2" />
                <span className={ this.state.errors.email == "" ? "fa fa-envelope envelope" : "fa fa-envelope envelope text-danger"} ></span>

                <input required type="text" placeholder="Mobile Number" className="mb-2" />
                <span className={ this.state.errors.mobileNumber == "" ? "fa fa-phone phone" : "fa fa-phone phone text-danger"} ></span>

                <textarea required cols="23" rows="5" placeholder="Massage" className="mb-2 txt"></textarea>
                <button className="send mt-4">
                    <span className="far fa-paper-plane mr-1"></span> Send
                </button>
            </form>
        );
    }
}