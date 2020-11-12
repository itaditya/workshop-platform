import '@reach/dialog/styles.css';
import 'prism-themes/themes/prism-coldark-dark.css';
import '../css/tailwind.css';

if (typeof window !== 'undefined') {
  window.baseUrl = process.env.NODE_ENV === 'production' ? '/.netlify/functions/api' : 'http://localhost:9191';
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
