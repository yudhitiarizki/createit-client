import './Searchbox.css';

const Searchbox = () => {
    return (
        <div className="search-container">
            <input type="text" placeholder="Search..." className="search-input"/>
            <div type="button" className="search-button">Search</div>
        </div>
    )
}

export default Searchbox;