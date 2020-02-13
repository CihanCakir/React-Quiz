import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useStyles } from "../../layout/dashboard/GeneralJSXstyling";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/AuthAction";
import Radio from '@material-ui/core/Radio';
import clsx from 'clsx';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';



class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            firstname: '',
            password: '',
            age: '',
            gender: '',
            city: ''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit buton clicked");
        console.log(this.state);
        this.props.signUp(this.state);
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    render() {

        // Inspired by blueprintjs




        function StyledRadio(props) {
            const classes = useStyles();

            return (
                <Radio
                    className={classes.root}
                    disableRipple
                    color="default"
                    checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
                    icon={<span className={classes.icon} />}
                    {...props}
                />
            );
        }
        const { authResponse } = this.props
        return (
            <div>
                <h2> Giriş yapın ve eğlenceye devam edin...</h2>
                <form autoComplete="off" onSubmit={this.handleSubmit}>
                    <div>
                        <TextField
                            id="firstname"
                            label="isim"
                            margin="normal"
                            variant="outlined"
                            required
                            onChange={this.handleChange}
                        />
                    </div>


                    <div>
                        <TextField
                            id="email"
                            label="Mail"
                            margin="normal"
                            variant="outlined"
                            type="email"
                            required
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
                    { /* 
              
                    <FormControl required className={classes.formControl}>
                        <InputLabel id="demo-simple-select-required-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-required-label"
                            id="demo-simple-select-required"
                            value={age}
                            onChange={handleChange}
                            className={classes.selectEmpty}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <FormHelperText>Required</FormHelperText>
                 </FormControl>

                */}

                    <div>
                        <FormControl component="fieldset">

                            <FormLabel component="legend">Doğum Tarihiniz</FormLabel>
                            <TextField
                                id="datetime"
                                margin="normal"
                                variant="outlined"
                                type="date"
                                required
                                onChange={this.handleChange}

                            />
                        </FormControl>
                    </div>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Cinsiyetiniz</FormLabel>
                        <RadioGroup defaultValue="1" aria-label="gender" name="customized-radios" id="gender" row>
                            <FormControlLabel value="1" control={<StyledRadio />} label="Kız" />
                            <FormControlLabel value="0" control={<StyledRadio />} label="Erkek" />
                        </RadioGroup>
                    </FormControl>
                    <div>
                        <FormControlLabel
                            value="sozlesme"
                            control={<Checkbox color="primary" />}
                            label="Üyelik Şartlarını okudunuz ve onaylıyorsunuz"
                            labelPlacement="end"
                        />
                    </div>

                    <div>
                        <Button variant="contained" type="submit" color="secondary">
                            Giriş
                        </Button>
                        <br />
                        <b>{authResponse !== null && authResponse !== "" ? authResponse : null}</b>
                    </div>
                    <div>

                    </div>
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
        signUp: (creds) => dispatch(signUp(creds))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register)
