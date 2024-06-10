import React from 'react';
import styles from './styles.css'
interface SlideProps {
  children: React.ReactNode;
}

const Slide = React.forwardRef<HTMLDivElement, SlideProps>((props, ref) => {

  return (
    <>
      {React.Children.map(props.children, (child) => {
        if (React.isValidElement(child)) {
          return (
            <div className={styles.simpleSlide} ref={ref}>
              {child}
            </div>
          );
        }
        return null;
      })}
    </>
  );
});

export default Slide;