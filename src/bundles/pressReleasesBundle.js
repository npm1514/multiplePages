import React from 'react';
import { hydrate, render } from 'react-dom';
import PressReleases from '../pages/PressReleases';

if (window)
  render(
    <PressReleases data={window.__LPO__} />,
    document.getElementById('lpo_app')
  );
