//This was from the white board challenge i missed this version as i tried to create and variable with the info and pass through
//on the bottom line. 

console.log('Challenge: 4')

const netflix = {
  id: 1,
  name: 'Game of Thrones',
  seasonInfo: {								//this section was where i missed. Here we were asked to create season info with array of episode info nested in this object
    episodeInfo: [
      {episodeNumber: 1, episodeName: 'Winter is Coming'},
      {episodeNumber: 2, episodeName: 'The Kingsroad'}
    ]
  }
}
