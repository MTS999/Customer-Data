import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


import "./Login.css";


const Login = () => {

    const buttonStyle = {
        textTransform: 'none', // This prevents automatic capitalization
      };
    return (
        <>
            <div className="container-fluid" >
                <div className="row vh-100">
                    <div
                        className="col-md-7 d-flex align-items-center flex-column vh-100  "
                    // style={{ width: '800px' }}
                    >

                        <div
                            className="col d-flex align-items-center     justify-content-center flex-column"
                            style={{ maxWidth: '400px' }}
                        >

                            <h1>Sign in to your Mailcub Account</h1>
                            <p className="signup">Dont have an account yet? <strong className="for-signup">Sign up</strong></p>
                            <Box
                                sx={{
                                    maxWidth: 400,
                                    width: '100%',
                                    marginBottom: "15px"

                                }}
                            >
                                <TextField
                                    fullWidth
                                    label="Email"
                                    id="fullWidth"
                                    color="success" />
                            </Box>
                            <Box
                                sx={{
                                    maxWidth: 400,
                                    width: '100%',
                                    marginBottom: "22px"
                                }}
                            >
                                <TextField fullWidth color="success" label="Password" id="fullWidth" />
                            </Box>
                            <p className="forgot-password"> <strong>Forgot your password</strong> </p>
                            <Button
                                variant="contained"
                                fullWidth
                                sx={{ padding: '12px',  textTransform: 'none' }}
                            > <strong>Sign In</strong> </Button>



                        </div>

                    </div>
                    <div className="col-sm d-flex align-items-center justify-content-center startup-img vh-100"
                    
                    style={{width:"100%"}}>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
