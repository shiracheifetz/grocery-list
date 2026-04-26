import styles from './Header.module.css';
function Header() {
    return(
        <>
            <header className={styles.websiteHeader}>
                <img src="/shopping-cart.svg" alt="shopping cart icon"/>
                <h1>My Grocery List</h1>
            </header>
            <p>My Grocery List can be used to add grocery items, mark them as bought <br/>
            (by using the checkbox next to each item), and remove them from the list.</p>
        </>
    )
}

export default Header;