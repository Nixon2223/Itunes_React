import React from 'react';
import ItunesSong from './ItunesSong';

const ItunesSongList = ({itunesSongs}) => {
    const itunesSongsItems = itunesSongs.map((itunesSong, index) => {
      return <ItunesSong itunesSong={itunesSong} key={index} position={Number(index)+1}/>
    })

  return (
    <div>
   <table>
  <tr>
    <th>Position</th>
    <th>Title</th>
    <th>Artist</th>
  </tr>
    {itunesSongsItems}
    </table>
  </div>
  )
}

export default ItunesSongList;