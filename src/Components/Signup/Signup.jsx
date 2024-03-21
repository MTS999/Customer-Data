import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


import "./Signup.css";


const Signup = () => {
    return (
        <>
            <div className="container-fluid" >
                <div className="row vh-100">
                    <div
                        className="col-md-7 d-flex align-items-center flex-column vh-100  "
                    >

                        <div
                            className="col d-flex align-items-center justify-content-center flex-column"
                            style={{ maxWidth: '400px' }}
                        >

                            <h1 className="signup-heading">Get started with a forever free plan</h1>
                            <p className="signup">Sign up in seconds. No credit card required</p>
                            <Box
                                sx={{
                                    maxWidth: 400,
                                    width: '100%',
                                    marginBottom: "15px"

                                }}
                            >
                                <TextField color="success" fullWidth label="Full Name*" id="fullWidth" />
                            </Box>
                            <Box
                                sx={{
                                    maxWidth: 400,
                                    width: '100%',
                                    marginBottom: "22px"
                                }}
                            >
                                <TextField color="success" fullWidth label="Last Name" id="fullWidth" />
                            </Box>
                            <Box
                                sx={{
                                    maxWidth: 400,
                                    width: '100%',
                                    marginBottom: "22px"
                                }}
                            >
                                <TextField color="success" fullWidth label="Email" id="fullWidth" />
                            </Box>
                            <Box
                                sx={{
                                    maxWidth: 400,
                                    width: '100%',
                                    marginBottom: "22px"
                                }}
                            >
                                <TextField color="success" fullWidth label="Phone" id="fullWidth" />
                            </Box>
                            <Box
                                sx={{
                                    maxWidth: 400,
                                    width: '100%',
                                    marginBottom: "22px"
                                }}
                            >
                                <TextField color="success" fullWidth label="Password" id="fullWidth" />
                            </Box>
                            <Button
                                variant="contained"
                                fullWidth
                                sx={{ padding: '12px' }}
                            >Contained</Button>



                        </div>

                    </div>
                    <div className="col-sm d-flex align-items-center justify-content-center startup-img vh-100"

                        style={{ width: "100%" }}>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
