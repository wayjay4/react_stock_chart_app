// config.js
export const is_demo = (process.env.REACT_APP_IS_DEMO === 'true');
export const base_url = process.env.REACT_APP_BASE_URL;
export const api_key = is_demo ? 'demo' : process.env.REACT_APP_BASE_URL;;
