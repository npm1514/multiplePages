import React from 'react';
import { hydrate, render } from 'react-dom';
import Careers from '../pages/Careers';

if (window)
  render(
    <Careers data={window.__LPO__} />,
    document.getElementById('lpo_app')
  );
