import { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "./Drawer";
import HamburgerButton from "./HambugerButton";

export default function MobileMenu() {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="lg:hidden">
        <HamburgerButton
          handleShowMenu={handleShowMenu}
          showMenu={showMenu}
        ></HamburgerButton>
        <Drawer handleShowMenu={handleShowMenu} showMenu={showMenu}></Drawer>
      </div>
    </>
  );
}
