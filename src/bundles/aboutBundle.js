import React from 'react';
import { hydrate, render } from 'react-dom';
import About from '../pages/About';

if (window)
  render(
    <About data={window.__LPO__} />,
    document.getElementById('lpo_app')
  );
