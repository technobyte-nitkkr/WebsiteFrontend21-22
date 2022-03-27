const Keys = Object.freeze({
  OAUTH_SECRET: process.env.REACT_APP_GSECRET,
  OAUTH_CLIENT_ID: process.env.REACT_APP_GCID,
  CHAT_BOT_APP_ID: process.env.REACT_APP_CHAT_BOT_APP_ID,
  // JWT_SECRET: process.env.REACT_APP_TOKEY,
  BASE_API: "https://us-central1-techspardha-87928.cloudfunctions.net/api2",
});

export default Keys;