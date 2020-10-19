import React from 'react';

export default function useWindowSize(): number {
  const isSSR = typeof window !== 'undefined';
  const [windowSize, setWindowSize] = React.useState(
    isSSR ? 1200 : window.innerWidth
  );

  function changeWindowSize(): void {
    setWindowSize(window.innerWidth);
  }

  React.useEffect(() => {
    window.addEventListener('resize', changeWindowSize);

    return (): void => {
      window.removeEventListener('resize', changeWindowSize);
    };
  }, []);

  return windowSize;
}
