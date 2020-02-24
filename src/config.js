export default {
  TOKEN_KEY:
    process.env.REACT_APP_TOKEN_KEY,
  API_ENDPOINT:
    process.env
      .REACT_APP_API_ENDPOINT ||
    'http://localhost:8000/api',
  SKIP_PREFLIGHT_CHECK:
    process.env
      .REACT_APP_SKIP_PREFLIGHT_CHECK
};
