import { createContext, useState } from 'react';

export const PopUpContext = createContext();

export const PopUpProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <PopUpContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </PopUpContext.Provider>
  );
}