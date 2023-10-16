import { useState } from "react";
import { useWindowWidth } from "@/hooks/getWindowWodth";

import { Navigation } from "./navigation";
import { NavigationMobile } from "./navigationMobile";

export function NavigationHandler() {
  const [openNavigation, setOpenNavigation] = useState(false);
  const windowWidth = useWindowWidth();

  function switchNavigationHandler() {
    setOpenNavigation(!openNavigation);
  }

  return (
    <>
      {windowWidth > 992 ? (
        <Navigation />
      ) : (
        <NavigationMobile
          openNavigation={openNavigation}
          switchNavigationHandler={switchNavigationHandler}
        />
      )}
    </>
  );
}
