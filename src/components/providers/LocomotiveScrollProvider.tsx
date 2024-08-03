'use client';

import React, { useEffect } from 'react';

export default function LocomotiveScrollProvider({
  children
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  });
  return <>{children}</>;
}
