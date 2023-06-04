import React, { useEffect } from 'react';

function GoogleLogin() {
  useEffect(() => {
    const authen = "strapi.hariki.tech/api/auth/google/callback?id_token=";
    if (window.location.href.includes(authen)) {
      // The URL has been updated after the redirect
      // Do something with the updated URL here
      console.log(window.location.href);
    }
  }, []);

  function handleLogin() {
    window.location.href = "https://strapi.hariki.tech/api/connect/google";
  }

  return (
    <div>
      <button onClick={handleLogin}>
        Login with Google
      </button>
    </div>
  );
}

export default GoogleLogin;
