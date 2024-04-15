import React from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from '@components/ErrorBoundary';
import { ErrorFallback } from '@components/ErrorBoundary/ErrorFallback';

import { App } from '@/components/App';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <ErrorBoundary fallback={<ErrorFallback />}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
