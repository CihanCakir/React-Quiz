import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import { UserLogin } from "../../store/actions/AuthAction";


class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }

    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('ready to log user in')
        console.log(this.state);
        this.props.UserLogin(this.state, this.props.history)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }



    render() {
        const { authResponse } = this.props;
        return (
            <div>
                <h2> Giriş yapın ve eğlenceye devam edin...</h2>
                <form autoComplete="off" onSubmit={this.handleSubmit}>
                    <div>
                        <TextField
                            id="email"
                            label="Mail Adresiniz"
                            margin="normal"
                            variant="outlined"
                            required
                            type="email"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <TextField
                            id="password"
                            label="Şifre"
                            margin="normal"
                            variant="outlined"
                            type="password"
                            required
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <Button variant="contained" type="submit" color="secondary">
                            Giriş
                        </Button>
                    </div>
                    <b>{authResponse !== null && authResponse !== "" ? authResponse : null}</b>



                </form>


            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        authResponse: state.auth.authResponse
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        UserLogin: (creds, history) => dispatch(UserLogin(creds, history))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)