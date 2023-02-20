import { useState, useEffect } from 'react';
import './App.css';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {

  // destructuring for optimize
  const [searchField, setSearchField] = useState(''); // [value, setValue]
  // the same as setSearchField.useState('event.target.value')
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);



  // fetch the APIs if the page re-render, just one time, if something changes
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));

  }, []);



  // reload the page only if searchfild change, or monsters change. cause in origin are both empty.
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);



  // every single word is wrote inside here, make a re-render of the code and takes value from APIs.
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };



  // my entire App
  return (
    <div className="App">
      <h1 className='app-title'> Monsters Rolodex </h1>
      <SearchBox
        className='monsters-search-box'
        placeholder='search monsters'
        onChangeHandler={onSearchChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}

export default App;
