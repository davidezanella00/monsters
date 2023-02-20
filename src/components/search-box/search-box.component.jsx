
import './search-box.styles.css'

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
    <input
        className={` search-box ${className}`}
        type='search'
        placeholder={placeholder}
        onChange={onChangeHandler} // i can name as i want, the importance is to have a respective in App.js
    />

)

export default SearchBox;