'use client';

import { useEffect } from 'react';

export default function ScrambleTextProvider({
  children
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const scrambleClass = 'scramble-text';

    function scrambleText(element: HTMLElement) {
      const chars = element.textContent!;
      const originalText = element.innerText;
      const iterations = originalText.length * 2.5;
      let timeout: ReturnType<typeof setTimeout>;

      function updateText(i: number) {
        if (i >= iterations) {
          element.innerText = originalText;
          return;
        }

        element.innerText = originalText
          .split('')
          .map((char, index) => {
            if (index < Math.floor(i / 5)) {
              return originalText[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('');

        timeout = setTimeout(() => updateText(i + 1), 10);
      }

      updateText(0);

      return () => {
        clearTimeout(timeout);
      };
    }

    const elements = document.querySelectorAll<HTMLElement>(
      `.${scrambleClass}`
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            scrambleText(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 1 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
}
