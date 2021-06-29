import React from 'react';

const Signin = () => {
    return (
        <div className="signin-page">
            <div className="slider">
                <img src={process.env.PUBLIC_URL+'assets/img/undraw_Hamburger_8ge6.svg'} alt="" />
                <h1>Manage sales, inventory and othet transactions.</h1>
            </div>
            <div className="form"></div>
        </div>
    );
}

export default Signin;
