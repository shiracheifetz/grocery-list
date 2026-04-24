import { useState } from 'react'
import './App.css'
import GroceryList from './GroceryList';
import AddItem from "./AddItem";

function App() {
  const [items, setItems] = useState<string[]>(() => {
    const stored = localStorage.getItem('groceryListItems');
    return stored ? JSON.parse(stored) : [];
  })

  const addItem = (newItem: string) => {
    const updated = [...items, newItem];
    setItems(updated);
    localStorage.setItem('groceryListItems', JSON.stringify(updated));
  }

  return (
    <>
      <header className="website-header">
        <h1>My Grocery List</h1>
        <p>My Grocery List can be used to add grocery items, mark them as bought, 
          and remove them from the list.</p>
      </header>
      <AddItem onAddItem={addItem}/>
      <GroceryList items={items} setItems={setItems} />
      
    </>
  )
}

export default App


//function UserGreeting() {
//   return isLoggedIn ? <h1>Welcome back, user!</h1> : <h1>Please log in</h1>;
// }

// If the list is empty, display a message (e.g., “No items added yet”) 


//let items = localStorage.getItem('groceryListItems');
//JSON.stringify(items);
