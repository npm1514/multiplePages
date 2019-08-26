import React from 'react';
import { hydrate, render } from 'react-dom';
import Newsroom from '../pages/Newsroom';

if (window)
  render(
    <Newsroom data={window.__LPO__} />,
    document.getElementById('lpo_app')
  );
