import fetch from 'node-fetch';
import '@testing-library/jest-dom/extend-expect';

global.window.fetch = fetch;
global.window.baseUrl = 'http://localhost:9191';
