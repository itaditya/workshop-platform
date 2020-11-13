import 'prism-themes/themes/prism-coldark-dark.css';
import '../css/tailwind.css';

function getBaseUrl() {
  if (window.location.hostname.includes('codesandbox')) {
    return 'https://workshop-platform.netlify.app/.netlify/functions/api';
  }

  if (process.env.NODE_ENV === 'production') {
    return '/.netlify/functions/api';
  }

  return 'http://localhost:9191';
}

if (typeof window !== 'undefined') {
  window.baseUrl = getBaseUrl();
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
