import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


import "../Signup/Signup";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const AddCustomer = () => {

    const [formData, setFormData] = React.useState({

        first_name: "",
        last_name: "",
        email: "",
        password: "",
        industry_type: '',
        customer_type: ''
    })
    const navigate=useNavigate()
    // console.log(formData);
    function handleChange(event) {
        const {name, value} = event.target

        setFormData({
            ...formData,
            [name]: value
        })

    }

    const  handleSave= () => {
        axios.post("http://146.190.164.174:4000/api/customer/signup_customer", formData)
            .then(response => {
                console.log(response.data); // Handle successful response
            })
            .catch(error => {
                console.error('Error signing up customer:', error); // Handle error
            });
    };
    return (
        <>
            <div className="container-fluid  margin-top" >
                <div className="row mb-3 ">

                    <h1>Add Customer</h1>
                </div>
                <div className="row mb-4">

                    <div className="col-md-6">

                        <Box

                        >
                            <TextField
                                color="success"
                                fullWidth
                                label="Full Name*"
                                id="first_name"
                                name="first_name"
                                onChange={handleChange}
                            />
                        </Box>
                    </div>

                    <div className="col-md-6">

                        <Box

                        >
                            <TextField
                                color="success"
                                fullWidth
                                label="Last Name"
                                id="last_name"
                                name="last_name"
                                onChange={handleChange}
                            />
                        </Box>
                    </div>

                </div>
                <div className="row mb-4">

                    <div className="col-md-6">

                        <Box
                        >
                            <TextField
                                color="success"
                                fullWidth
                                label="Email"
                                id="email"
                                name="email"
                                onChange={handleChange} />
                        </Box>
                    </div>

                    <div className="col-md-6">

                        <Box

                        >
                            <TextField
                                color="success"
                                fullWidth
                                label="Password"
                                id="password"
                                name="password"
                                onChange={handleChange}
                            />
                        </Box>
                    </div>

                </div>
                <div className="row mb-4">

                    <div className="col-md-6">

                        <Box

                        >
                            <TextField
                                color="success"
                                fullWidth
                                label="Industry Type"
                                id="industry_type"
                                name="industry_type"
                                onChange={handleChange} />
                        </Box>
                    </div>

                    <div className="col-md-6">

                        <Box

                        >
                            <TextField
                                color="success"
                                fullWidth
                                label="Customer Type"
                                id="customer_type"
                                name="customer_type"
                                onChange={handleChange} />
                        </Box>
                    </div>

                </div>

                <div className="row text-end">
                    <div className="col">


                        <Button
                         variant="outlined"
                          size="small"
                          onClick={()=>navigate("/customer")}

                          >
                            cancel
                        </Button>
                        <Button variant="contained" size="small"
                            sx={{ marginLeft: "8px" }}
                            onClick={handleSave}
                        >
                            save
                        </Button>
                    </div>
                </div>


            </div>


        </>
    );
};

export default AddCustomer;
