export default {
  TOKEN_KEY:
    process.env.REACT_APP_TOKEN_KEY,
  API_ENDPOINT:
    process.env
      .REACT_APP_API_ENDPOINT ||
    'https://calm-wave-63861.herokuapp.com/api',
  SKIP_PREFLIGHT_CHECK:
    process.env
      .REACT_APP_SKIP_PREFLIGHT_CHECK
};
