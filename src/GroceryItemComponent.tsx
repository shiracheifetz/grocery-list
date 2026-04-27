import type { GroceryItem } from './App';

type GroceryItemProps = {
    item: GroceryItem;
    onDelete: () => void;
    onToggle: () => void;
}

function GroceryItemComponent(props: GroceryItemProps) {
    return(
        <li>
            <input 
                type="checkbox" 
                name="isBought" 
                value="bought" 
                checked={props.item.isBought}
                onChange={props.onToggle}
            />
            {props.item.name} 
            <button onClick={props.onDelete}>Delete</button>
        </li>
    )
}

export default GroceryItemComponent;