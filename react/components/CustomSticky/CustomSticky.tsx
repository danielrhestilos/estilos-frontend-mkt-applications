import React, { useEffect, useState } from "react";
import { useCssHandles } from 'vtex.css-handles'

export interface InfoStockProps {
  customClass: string;
  children: React.ReactNode[];
}

const CSS_HANDLES = [
  'custom_sticky_container',
  'custom_sticky_active'
];

/**
 * The function checks if an element is currently visible in the viewport.
 * @param {any} elemento - The `elemento` parameter is the element that you want to check if it is
 * visible in the viewport. It can be any valid DOM element.
 * @returns a boolean value indicating whether the specified element is currently visible in the
 * viewport.
 */
function elementVisible(elemento: any) {
  const rect = elemento.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  return (rect.top >= 0 && rect.top <= windowHeight) || (rect.bottom >= 0 && rect.bottom <= windowHeight);
}

/**
 * The `StickyContainer` component is a React component that renders a container with sticky behavior
 * based on the visibility of a given element.
 * @param {InfoStockProps}  - - `customClass`: A string representing a custom CSS class for the
 * container element.
 * @returns a JSX element.
 */
function StickyContainer({ customClass, children }: InfoStockProps) {
  const handles = useCssHandles(CSS_HANDLES);
  const isElementVisible = useElementVisibility(customClass);

  return (
    <div className={customClass}>
      <div className={`${handles.custom_sticky_container} ${!isElementVisible ? `${handles.custom_sticky_active} z-999 fixed left-0 right-0 bottom-0` : ''}`}>
        {children[0]}
      </div>
    </div>
  );
}

/**
 * The function `useElementVisibility` is a custom React hook that returns a boolean value indicating
 * whether an element with a specified class is currently visible on the screen.
 * @param {string} customClass - The customClass parameter is a string that represents the class name
 * of the element whose visibility we want to track.
 * @returns the value of the `isElementVisible` state variable.
 */
function useElementVisibility(customClass: string) {
  const [isElementVisible, setIsElementVisible] = useState(false);

  useEffect(() => {
    function notifyVisibility() {
      const elementByQuery = document.querySelector(`.${customClass}`);
      if (elementByQuery) {
        setIsElementVisible(elementVisible(elementByQuery));
      }
    }

    window.addEventListener('scroll', notifyVisibility);

    notifyVisibility();

    return () => {
      window.removeEventListener('scroll', notifyVisibility);
    };
  }, [customClass]);

  return isElementVisible;
}

const CustomSticky: React.FunctionComponent<InfoStockProps> = (props) => {
  return <StickyContainer {...props} />;
};

export default CustomSticky;
