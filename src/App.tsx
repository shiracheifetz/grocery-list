import { useState } from 'react'
import './App.css'
import Header from './Header';
import GroceryList from './GroceryList';
import AddItem from "./AddItem";

export type GroceryItem = {
  name: string;
  isBought: boolean;
}

function App() {
  const [items, setItems] = useState<GroceryItem[]>(() => {
    const stored = localStorage.getItem('groceryItems');
    return stored ? JSON.parse(stored) : [];
  })

  const addItem = (newItem: string) => {
    const updated = [...items, {name: newItem, isBought: false}];
    setItems(updated);
    localStorage.setItem('groceryItems', JSON.stringify(updated));
  }

  const toggleBought = (index: number) => {
    const updated: GroceryItem[] = items.map((item: GroceryItem, i: number) => {
    if (i === index) {
      return { ...item, isBought: !item.isBought };
    }
    return item;
  });
    setItems(updated);
    localStorage.setItem('groceryItems', JSON.stringify(updated));
  }

  return (
    <>
      <Header/>
      <AddItem onAddItem={addItem}/>
      <GroceryList items={items} setItems={setItems} onToggle={toggleBought} />
    </>
  )
}


export default App