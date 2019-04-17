import React, { Component, useState, useEffect } from 'react';

import Summary from './Summary';

const Character = props => {
  const [ loadedCharacter, setLoadedCharacter ] = useState({});
  const [ isLoading, setIsLoading ] = useState(false);

  console.log('Renndering...');

  const fetchData = () => {
    console.log(
      'Sending Http request for new character with id ' +
        props.selectedChar
    );
    setIsLoading(true);
  };

  useEffect(() => {
    fetchData();
    return () => {
      console.log('cleaning up...');
    };
  }, [props.selectedChar]);

  useEffect(() => {
    return () => {
      console.log('component did unmount');
    };
  }, []);


  let content = <p>Loading Character...</p>;

  if (!isLoading && loadedCharacter.id) {
    content = (
      <Summary
        name={loadedCharacter.name}
        gender={loadedCharacter.gender}
        height={loadedCharacter.height}
        hairColor={loadedCharacter.colors.hair}
        skinColor={loadedCharacter.colors.skin}
        movieCount={loadedCharacter.movieCount}
      />
    );
  } else if (!isLoading && !loadedCharacter.id) {
    content = <p>Failed to fetch character.</p>;
  }
  return content;

}

export default React.memo(Character);
