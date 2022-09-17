import React, { useEffect, useState } from "react";
import Char from "./Char.jsx";
import { getCharacters } from "../service.js";


const CharList = () => {
    const [backgroundImage, setBackgroundImage] = useState('')
    const [charList, setCharList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        setIsLoading(true);
        getCharacters()
        .then((data) => setCharList(data.results))
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    }, []);
    

    return (
        <div className='page' >
            <div className="color-square" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
            <hr/>
            {isLoading && <span className='loading-text'>Loading</span>}
            {charList.map((char) => (
                <Char
                key={char.id}
                img={char.image}
                name={char.name}
                status={char.status}
                species={char.species}
                setBackgroundImage={setBackgroundImage}
                />
            ))}
        </div>
        
    );
  
}

export default CharList;