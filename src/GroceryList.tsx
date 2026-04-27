//import { useState } from 'react';
import GroceryItemComponent from "./GroceryItemComponent.tsx";
import styles from './GroceryList.module.css'
import type { GroceryItem } from './App';
import NoItemDisplay from "./NoItemsDisplay.tsx";

type GroceryListProps = {
    items: GroceryItem[];
    setItems: React.Dispatch<React.SetStateAction<GroceryItem[]>>;
    onToggle: (index: number) => void;
}

function GroceryList(props: GroceryListProps) {
    return(
        <div className={styles.container}>
            {/* conditional rendering */}
            {props.items.length === 0 ? (
                <NoItemDisplay/>
            ) : (
                <ul>
                    {props.items.map((item, index) => (
                        <GroceryItemComponent 
                        key={index} 
                        item={item}
                        onDelete={() => {
                            const updated: GroceryItem[] = props.items.filter((_, i: number) => i !== index);
                            props.setItems(updated);
                            localStorage.setItem('groceryItems', JSON.stringify(updated));
                        }}
                        onToggle={() => props.onToggle(index)}
                        />
                    ))}
                </ul>
            )}
        </div>
    )
}

export default GroceryList;