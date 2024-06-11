import { createPortal } from 'react-dom';
import { Background, Loader, Text } from './LoaderPercent.styled';
import { useEffect, useState } from 'react';

export const LoaderPercent = () => {
  const loader = document.getElementById('modal-root');

  const [count, setCount] = useState(0);

  useEffect(() => {
    const simulateLoading = () => {
      let progress = 0;

      const interval = setInterval(() => {
        progress += Math.random() * 20;
        setCount(progress);
        if (progress >= 100) {
          clearInterval(interval);
        }
      }, 200);
    };

    const interval = simulateLoading();
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {createPortal(
        <Background>
          <Text>{count < 100 ? Math.round(count) : 100} %</Text>

          <Loader />
        </Background>,
        loader
      )}
    </>
  );
};
