import React from 'react';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 z-50 flex h-8 w-screen items-center justify-end pr-2 text-secondary mix-blend-difference lg:h-12 lg:pr-8">
      2024<span className="animate-pulse">{'-/#'}</span>
    </footer>
  );
}
