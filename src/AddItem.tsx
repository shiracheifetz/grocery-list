import { useState } from 'react';

type AddItemProps = {
    onAddItem: (item: string) => void;
}

function AddItem(props: AddItemProps) {
    const [item, setItem] = useState('');

    function handleAddItem(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        if (item.trim()) {
            props.onAddItem(item);
            setItem('');
        }
    }
    return(
        <form onSubmit={handleAddItem}>
            <input 
                value={item}
                onChange={(e) => setItem(e.target.value)}
                placeholder="Enter new item"
            />
            <button type='submit'>Add Item</button>
        </form>
    );
}

export default AddItem;