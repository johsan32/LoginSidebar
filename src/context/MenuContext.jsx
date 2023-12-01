import { createContext, useState, children } from 'react';
import { Menus } from '../constants';
export const MenuContext = createContext();

const categories = Menus.map((category) => ({ ...category }));

export const MenuProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMenuModal, setShowMenuModal] = useState(false);
  const [showSubMenuDropDown, setShowSubMenuDropDown] =
    useState(false);

  return (
    <MenuContext.Provider
      value={{
        Menus,
        open,
        setOpen,
        categories, 
        showDropdown,
        setShowDropdown,
        showMenuModal,
        setShowMenuModal,
        showSubMenuDropDown,
        setShowSubMenuDropDown,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
