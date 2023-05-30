import React from "react";
import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { name, email, password, password2 } = formData;

    const onChange = (e) => {
        setFormData((formData) => ({
            ...formData,
            [e.target.name]: e.target.value,
        }));
    };
    const onSubmit = (e) => {};

    return (
        <>
            <section className="heading">
                <h1>
                    <FaSignInAlt /> Login
                </h1>
                <p>Login To Your Account</p>
            </section>
            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            name="email"
                            value={email}
                            placeholder="Enter your email"
                            onChange={onChange}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            name="password"
                            value={password}
                            placeholder="Enter password"
                            onChange={onChange}
                        />
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-block">
                            Login
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
};

export default Login;
