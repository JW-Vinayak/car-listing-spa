import React from "react";
import logo from "../../assets/company-logo.png";
const PageNotFound = () => {
  return (
    <section class="page-not-found">
      <img className="logo" src={logo} alt="Company" />
      <header>404 - Not Found</header>
      <p className="text">
        Sorry, the page you are looking for does not exist.
      </p>
      <p className="text">
        You can always go back to{" "}
        <a href="/" className="link">
          homepage
        </a>
      </p>
    </section>
  );
};

export default PageNotFound;
