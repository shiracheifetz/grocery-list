import type { GroceryItem } from './App';

type GroceryItemProps = {
    item: GroceryItem;
    onDelete: () => void;
}

function GroceryItemComponent(props: GroceryItemProps) {
    return(
        <li>
            <input type="checkbox" name="isBought" value="bought" checked={props.item.isBought}/>
            {props.item.name} 
            <button onClick={props.onDelete}>Delete</button>
        </li>
    )
}

export default GroceryItemComponent;