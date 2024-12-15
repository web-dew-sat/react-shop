import './Header.scss'

function Header() {
    return (
        <nav>
            <div className="nav-wrapper green darken-1">
                <a href="/" className="brand-logo">React Shop</a>
                <ul id="nav-mobile " className="right hide-on-med-and-down ">
                    <li><a href="/">Repo</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;
