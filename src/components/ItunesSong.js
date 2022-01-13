import React from 'react';

const ItunesSong = ({itunesSong, position}) => {

  return (
    <>
      <tr>
      <td>{position}</td>
        <td>{itunesSong["im:name"]["label"]}</td>
        <td>{itunesSong["im:artist"]["label"]}</td>
    </tr>
    </>
  )

}

export default ItunesSong;