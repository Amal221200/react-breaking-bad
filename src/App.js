import React, {useState, useEffect } from 'react'
import './App.css';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import axios from 'axios';
import Search from './components/ui/Search';


function App() {

  const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState("")

    useEffect(() =>{
        const fetchItem = async ()=>{
            setIsLoading(true);
            const result = await axios(`https://www.breakingbadapi.com/api/characters/?name=${query}`);
            setItems(result.data);
            setIsLoading(false);
        }
        fetchItem()
    }, [query])

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid items={items} isLoading={isLoading} />
    </div>
  );
}

export default App;
