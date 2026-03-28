import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const [role, setRole] = useState('guest');
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // In a real app, you'd have authentication logic here.
        // For now, we just navigate based on the selected role.
        const path = `/${role}-dashboard`;
        navigate(path);
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-header">
                    <h2>Welcome to Elite Hotel</h2>
                    <p>Sign in to continue</p>
                </div>
                <form onSubmit={handleLogin}>
                    <div className="input-group role-selector-group">
                        <label htmlFor="role">Select Your Role</label>
                        <select id="role" name="role" value={role} onChange={(e) => setRole(e.target.value)}>
                            <option value="guest">Guest</option>
                            <option value="staff">Staff</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
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

                    <div className="form-actions">
                        <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                    <Link to="/register" className="btn btn-secondary" style={{ textDecoration: 'none', display: 'block', marginTop: '10px' }}>Register</Link>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
