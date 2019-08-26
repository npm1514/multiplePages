import React from 'react';
import { hydrate, render } from 'react-dom';
import Cares from '../pages/Cares';

if (window)
  render(
    <Cares data={window.__LPO__} />,
    document.getElementById('lpo_app')
  );
