'use client';

import React, { useEffect } from 'react';

export default function LocomotiveScrollProvider({
  children
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    let scroll: import('locomotive-scroll');
    import('locomotive-scroll').then((locomotiveModule) => {
      scroll = new locomotiveModule.default({ lerp: 1 });
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  });
  return <>{children}</>;
}
