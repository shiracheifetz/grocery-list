//import { useState } from 'react';
import GroceryItemComponent from "./GroceryItemComponent.tsx";
import styles from './GroceryList.module.css'
import type { GroceryItem } from './App';

type GroceryListProps = {
    items: GroceryItem[];
    setItems: React.Dispatch<React.SetStateAction<GroceryItem[]>>;
}

function GroceryList(props: GroceryListProps) {
    return(
        <div className={styles.container}>
            {/* conditional rendering */}
            {props.items.length === 0 ? (
                <p>No items added yet</p>
            ) : (
                <ul>
                    {props.items.map((item, index) => (
                        <GroceryItemComponent 
                        key={index} 
                        item={item}
                        onDelete={() => {
                            const updated = props.items.filter((_, i) => i != index);
                            props.setItems(updated);
                            localStorage.setItem('groceryItems', JSON.stringify(updated));
                        }}/>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default GroceryList;



