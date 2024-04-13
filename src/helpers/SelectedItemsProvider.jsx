import React, { createContext, useContext, useState } from 'react';

const SelectedItemsContext = createContext();

export const useSelectedItems = () => useContext(SelectedItemsContext);

export const SelectedItemsProvider = ({ children }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const addSelectedItem = (item) => {
    setSelectedItems([...selectedItems, item]);
  };

  const removeSelectedItem = (itemId) => {
    setSelectedItems(selectedItems.filter((item) => item.id !== itemId));
  };

  return (
    <SelectedItemsContext.Provider
      value={{ selectedItems, addSelectedItem, removeSelectedItem }}
    >
      {children}
    </SelectedItemsContext.Provider>
  );
};
