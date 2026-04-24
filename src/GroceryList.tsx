//import { useState } from 'react';
import GroceryListItem from "./GroceryListItem";

type GroceryListProps = {
    items: string[];
    setItems: React.Dispatch<React.SetStateAction<string[]>>;
}

function GroceryList(props: GroceryListProps) {

    return(
        <ul>
            {props.items.map((item, index) => (
                <GroceryListItem 
                key={index} 
                item={item}
                onDelete={() => {
                    const updated = props.items.filter((item, i) => i != index);
                    props.setItems(updated);
                    localStorage.setItem('groceryListItems', JSON.stringify(updated));
                }}/>
            ))}
        </ul>
    )
}

export default GroceryList;



