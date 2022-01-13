import React, { useState, useEffect } from 'react';
import ItunesList from '../components/ItunesList';

const ItunesContainer = () => {
    const [itunesSongs, setItunesSongs] = useState([]);

    useEffect(() => {
      getItunesSongs();
    }, [])

    const getItunesSongs = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(itunesSongs => setItunesSongs(itunesSongs["feed"]["entry"]))
    }

    return (
        <div className="main-container">
            <ItunesList itunesSongs={itunesSongs}/>
        </div>
    )
}


export default ItunesContainer;