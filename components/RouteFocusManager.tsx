'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function RouteFocusManager() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const main = document.getElementById('main-content');
    if (!(main instanceof HTMLElement)) {
      return;
    }

    requestAnimationFrame(() => {
      main.focus({ preventScroll: true });
    });
  }, [pathname]);

  return null;
}
