import React, { useEffect } from "react";
import { canUseDOM } from 'vtex.render-runtime'

export interface InfoStockProps {
  children: []
}

const MegaMenuActions: React.FunctionComponent<InfoStockProps> = ({ children }) => {

  /**
   * This function handles the click event on a mega menu and closes it if the user clicks outside of
   * it.
   */
  function handleTrigger() {
    const contenMegaMenu = document.querySelector(
      ".vtex-mega-menu-2-x-menuContainerNav--desktop__mega-menu--content"
    ) as HTMLElement | null;

    if (contenMegaMenu) {
      contenMegaMenu.onclick = function (e: { target: any; }) {
        const clickedElement = e.target;

        if (
          !clickedElement.closest(".vtex-mega-menu-2-x-menuContainer") &&
          !clickedElement.closest(".vtex-mega-menu-2-x-submenuContainer")
        ) {
          const ramdomSelector = document.querySelector(
            ".vtex-flex-layout-0-x-flexColChild--desktop__header--mega-menu"
          ) as HTMLElement | null;

          ramdomSelector?.click();
        }
      };
    }
  }

  /* The `useEffect` hook is used to perform side effects in a functional component. In this case, it
  is being used to observe changes in the DOM using the `MutationObserver` API. The `if (canUseDOM)`
  condition ensures that the code is only executed in the browser and not during server-side
  rendering. */
  useEffect(() => {
    if (canUseDOM) {

      const menuItems = document.querySelector('.vtex-flex-layout-0-x-flexRowContent--desktop__mega-menu--content .vtex-flex-layout-0-x-stretchChildrenWidth') as Element | null;

      const shippingObserver = new MutationObserver((mutationList) => {

        mutationList.forEach((mutation) => {
          if (mutation.addedNodes.length) {
            handleTrigger()
          }
        })
      })

      if (menuItems) {
        shippingObserver.observe(menuItems, { childList: true, subtree: true })
      }
    }
  }, [])

  return children[0]
}

export default MegaMenuActions
