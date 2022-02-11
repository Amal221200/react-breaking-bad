import React, {useState, useEffect } from 'react'
import './App.css';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import axios from 'axios';


function App() {

  const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() =>{
        const fetchItem = async ()=>{
            setIsLoading(true);
            const result = await axios(`https://www.breakingbadapi.com/api/characters`);
            setItems(result.data);
            setIsLoading(false);
        }
        fetchItem()
    }, [])

  return (
    <div className="container">
      <Header />
      <CharacterGrid items={items} isLoading={isLoading} />
    </div>
  );
}

export default App;
