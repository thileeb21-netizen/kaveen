import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-header">
                    <h2>Welcome to Elite Hotel</h2>
                    <p>Sign in to continue</p>
                </div>
                <form>
                    <div className="input-group">
                        <input type="text" id="username" name="username" required placeholder=" " />
                        <label htmlFor="username">Username</label>
                    </div>
                    <div className="input-group password-input-group">
                        <input
                            type={passwordShown ? "text" : "password"}
                            id="password"
                            name="password"
                            required
                            placeholder=" "
                        />
                        <label htmlFor="password">Password</label>
                        <button type="button" className="password-toggle" onClick={togglePasswordVisibility}>
                            {passwordShown ? "Hide" : "Show"}
                        </button>
                    </div>
                    <div className="input-group">
                        <label htmlFor="role" className="sr-only">Role</label>
                        <select id="role" name="role" defaultValue="guest">
                            <option value="guest">Guest</option>
                            <option value="staff">Staff</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <div className="form-actions">
                        <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
                    </div>
                    <Link to="/guest-dashboard" className="btn btn-primary" style={{ textDecoration: 'none', display: 'block' }}>Login</Link>
                    <Link to="/register" className="btn btn-secondary" style={{ textDecoration: 'none', display: 'block', marginTop: '10px' }}>Register</Link>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
