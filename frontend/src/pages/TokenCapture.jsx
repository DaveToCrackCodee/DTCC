import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

const TokenCapture = () => {
  const navigate = useNavigate();
  let { access_token } = useParams();
  useEffect(() => {

    // const urlParams = new URLSearchParams(window.location.search);
    // const accessToken = urlParams.get('access_token');
    console.log(access_token);

    if (access_token) {
      localStorage.setItem('token', access_token);
      // Redirect to the main application component
    //   window.location.reload()
      navigate('/');
    } else {
      // If no access token, redirect to login
      navigate('/login');
    }
  }, [navigate]);

  return <div>Loading...</div>;
};

export default TokenCapture;
