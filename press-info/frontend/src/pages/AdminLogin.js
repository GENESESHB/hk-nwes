import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './AdminLogin.css';
const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [accessToken, setAccessToken] = useState('');
  const [captchaValue, setCaptchaValue] = useState(null);
  const [error, setError] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleAccessTokenChange = (e) => {
    setAccessToken(e.target.value);
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaValue === null) {
      setError('Please complete the CAPTCHA');
      return;
    }
    // Handle the login logic here
    // For example, send a request to your backend
    console.log('Username:', username);
    console.log('Access Token:', accessToken);
    console.log('CAPTCHA:', captchaValue);
  };

  return (
    <div className="admin-login">
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="accessToken">Access Token:</label>
          <input
            type="password"
            id="accessToken"
            value={accessToken}
            onChange={handleAccessTokenChange}
            required
          />
        </div>
        <div>
          <ReCAPTCHA
            sitekey="YOUR_RECAPTCHA_SITE_KEY"
            onChange={handleCaptchaChange}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;

