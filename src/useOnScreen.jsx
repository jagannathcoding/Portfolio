// hooks/useOnScreen.js
import { useState, useEffect, useRef } from 'react';

const useOnScreen = (options) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      {
        threshold: 0.5,  // 50% of the element must be visible before triggering animation
        ...options,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [elementRef]);

  return [elementRef, isVisible];
};

export default useOnScreen;
