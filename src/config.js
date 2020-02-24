export default {
  API_ENDPOINT:
    process.env
      .REACT_APP_API_ENDPOINT ||
    'http://localhost:8000/api',
  SKIP_PREFLIGHT_CHECK:
    process.env
      .REACT_APP_SKIP_PREFLIGHT_CHECK
};
