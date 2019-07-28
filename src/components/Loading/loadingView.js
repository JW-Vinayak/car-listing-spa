import React from 'react';
import logo from "../../assets/company-logo.png";
import loading from "../../assets/loading.jpg";

const Loading = () => {
  return (
    <div className="loading">
      <img src={logo} alt="company logo" className="logo" />
      <br/>
      <img src={loading} alt="company logo" className="loader" />
    </div>
  )
}

export default Loading;
