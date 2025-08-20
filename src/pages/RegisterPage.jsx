import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

    const togglePasswordVisibility = () => setPasswordShown(!passwordShown);
    const toggleConfirmPasswordVisibility = () => setConfirmPasswordShown(!confirmPasswordShown);

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-header">
                    <h2>Create an Account</h2>
                    <p>Join us at Elite Hotel</p>
                </div>
                <form>
                    <div className="input-group">
                        <input type="text" id="fullname" name="fullname" required placeholder=" " />
                        <label htmlFor="fullname">Full Name</label>
                    </div>
                    <div className="input-group">
                        <input type="email" id="email" name="email" required placeholder=" " />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="input-group">
                        <input type="tel" id="phone" name="phone" required placeholder=" " />
                        <label htmlFor="phone">Phone Number</label>
                    </div>
                    <div className="input-group">
                        <input type="text" id="username" name="username" required placeholder=" " />
                        <label htmlFor="username">Username</label>
                    </div>
                    <div className="input-group password-input-group">
                        <input type={passwordShown ? "text" : "password"} id="password" name="password" required placeholder=" " />
                        <label htmlFor="password">Password</label>
                        <button type="button" className="password-toggle" onClick={togglePasswordVisibility}>
                            {passwordShown ? "Hide" : "Show"}
                        </button>
                    </div>
                    <div className="input-group password-input-group">
                        <input type={confirmPasswordShown ? "text" : "password"} id="confirm-password" name="confirm-password" required placeholder=" " />
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <button type="button" className="password-toggle" onClick={toggleConfirmPasswordVisibility}>
                             {confirmPasswordShown ? "Hide" : "Show"}
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
                    <div className="input-group" id="address-field">
                        <textarea id="address" name="address" placeholder=" "></textarea>
                        <label htmlFor="address">Address (for Guests)</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                    <div className="form-footer">
                        <p>Already have an account? <Link to="/login">Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
