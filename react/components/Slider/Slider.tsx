import React, { useState, useLayoutEffect, useRef } from "react";
import styles from "./styles.css";
import Slide from "./Slide";

interface SliderProps {
  children: React.ReactNode;
  leftCallback?: () => void;
  rightCallback?: () => void;
}

const Slider: React.FC<SliderProps> = ({ children, leftCallback = () => {}, rightCallback = () => {} }) => {
  const [width, setWidth] = useState(0);
  const [offset, setOffset] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

  const slideRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const slideWindowRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (slideRef.current) {
      const rect = slideRef.current.getBoundingClientRect();
      setWidth(rect.width);
      setSlideCount(React.Children.count(children));
      if (slideWindowRef.current) {
        slideWindowRef.current.style.width = rect.width + "px";
      }
    }
  }, [slideRef, offset, slideWindowRef, children]);

  const leftClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let currentRight = wrapperRef.current?.style.right || '0';
    let currentRightValue = parseInt(currentRight, 10);
    if (currentRightValue === 0) return;

    const newOffset = currentRightValue - width;
    if (wrapperRef.current) {
      wrapperRef.current.style.right = newOffset + "px";
    }
    setOffset(newOffset);
    leftCallback();
  };

  const rightClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let currentRight = wrapperRef.current?.style.right || '0';
    let currentRightValue = parseInt(currentRight, 10);

    if (currentRightValue === (slideCount - 1) * width) return;

    const newOffset = offset + width;
    if (wrapperRef.current) {
      wrapperRef.current.style.right = newOffset + "px";
    }
    setOffset(newOffset);
    rightCallback();
  };

  return (
    <div className={styles.mainSlider}>
      <button  className={styles.leftButton}  onClick={leftClick}>←</button>
      <div className={styles.slideWindow} ref={slideWindowRef}>
        <div className={styles.slideWrapper} ref={wrapperRef}>
          <Slide ref={slideRef}>{children}</Slide>
        </div>
      </div>
      <button className={styles.rigthButton} onClick={rightClick}>→</button>
    </div>
  );
};

export default Slider;