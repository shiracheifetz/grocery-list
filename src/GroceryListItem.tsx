type GroceryListItemProps = {
    item: string;
    onDelete: () => void;
}

function GroceryListItem(props: GroceryListItemProps) {
    return(
        <li>{props.item} <button onClick={props.onDelete}>Delete</button></li>
    )
}

export default GroceryListItem;

