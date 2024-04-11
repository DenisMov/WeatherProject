import './appHeader.scss';

const AppHeader = () => {
    return (
        <header className="app__header">
            <nav className="app__menu">
                <ul>
                    <li><a href="#">Kiev</a></li>
                    <li><a href="#">Zhashkiv</a></li>
                    <li><a href="#">Paris</a></li>
                    <li><a href="#">Washington</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;