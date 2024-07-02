import React from "react";
import axios from 'axios';
// import GoogleLogin from "react-google-login";




function Login() {
  const googleClientId ="934661293585-hdg008tvsoeofnot4mgmpgnvrl72kgo3.apps.googleusercontent.com";
  
  const onSuccess = async (response) => {
    try {
      const { tokenId } = response;
      const res = await axios.post('http://localhost:5000/auth/google', { tokenId });
      const { token } = res.data;
      localStorage.setItem('token', token);
      // Redirect to dashboard or home page
    } catch (error) {
      console.error('Login Failed!!', error);
    }
  };

  const onFailure = (error) => {
    console.error('Login Failed!!', error);
  };

  return (
    <div>
      <h1>Login Page</h1>
      {/* <GoogleLogin
        clientId={googleClientId}
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
      /> */}
    </div>
  );
}

export default Login;

