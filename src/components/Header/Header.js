import "./Header.css";

const Header = (props) => {
    return(
        <header class="header">
            <h1 class="header__h1">{props.bigTitle || "Default big title"}</h1>
            <h2 class="header__h2">{props.smallTitle || "Default small title"}</h2>
            <button class="header__button">{props.buttonText || "Default"}</button>
        </header>
    )
}

export default Header;