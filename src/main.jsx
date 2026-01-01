// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Optional overflow debugger (enable by visiting: ?debugOverflow=1)
// - Adds: * { outline: 1px solid red }
// - Highlights overflowing elements in lime
// - Logs the worst offenders to the console
function enableOverflowDebug() {
  const params = new URLSearchParams(window.location.search);
  if (params.get('debugOverflow') !== '1') return;

  const style = document.createElement('style');
  style.textContent = `
    * { outline: 1px solid red !important; }
    .__overflowing { outline: 3px solid lime !important; }
  `;
  document.head.appendChild(style);

  const label = (el) => {
    const id = el.id ? `#${el.id}` : '';
    const cls =
      el.classList && el.classList.length
        ? `.${Array.from(el.classList).slice(0, 3).join('.')}`
        : '';
    return `${el.tagName.toLowerCase()}${id}${cls}`;
  };

  const scan = () => {
    const vw = window.innerWidth;
    const offenders = [];

    document.querySelectorAll('body *').forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.right > vw + 1 || r.left < -1) {
        el.classList.add('__overflowing');
        offenders.push({ el, right: r.right, left: r.left, width: r.width });
      }
    });

    console.group('Overflow debug offenders');
    offenders
      .sort((a, b) => (b.right - vw) - (a.right - vw))
      .slice(0, 30)
      .forEach((o) => {
        console.log(label(o.el), {
          left: o.left,
          right: o.right,
          width: o.width,
          viewport: vw,
        });
      });
    console.groupEnd();
  };

  window.addEventListener('load', scan);
  window.addEventListener('resize', scan);
}

enableOverflowDebug();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
