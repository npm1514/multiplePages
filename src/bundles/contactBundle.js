import React from 'react';
import { hydrate, render } from 'react-dom';
import Contact from '../pages/Contact';

if (window)
  render(
    <Contact data={window.__LPO__} />,
    document.getElementById('lpo_app')
  );
