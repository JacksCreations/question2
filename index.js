import React from 'react';
import { render } from 'react-dom';
import { useState } from 'react';

// END STATE
function Section({ movies, id }) {
  let movie = filterById(movies, id);

  return (
    <div>
      <h2>{movie.name}</h2>
      <p style={{ fontSize: '12px', lineHeight: '16px' }}>{movie.desc}</p>
      <a target="_blank" href={movie.url}>
        Visit movie link
      </a>
      <hr />
    </div>
  );
}
function filterById(jsonObject, id) {
  return jsonObject.filter(function (jsonObject) {
    return jsonObject['id'] == id;
  })[0];
}

function App() {
  const [movies, setMovies] = useState([
    {
      id: 'fant011',
      name: 'Fellowship of the Ring',
      desc: 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
      url: 'https://www.imdb.com/title/tt0120737/?ref_=fn_al_tt_1',
    },
    {
      id: 'fant012',
      name: 'The Return of the King ',
      desc: 'Gandalf and Aragorn lead the World of Men against Saurons army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.',
      url: 'https://www.imdb.com/title/tt0167260/?ref_=nv_sr_1?ref_=nv_sr_1',
    },
    ,
    {
      id: 'fant013',
      name: 'The Mighty armadillo ',
      desc: 'The mighty armadillos compete against the monkeys to take over the world!',
      url: 'https://www.imdb.com/title/tt0167260/?ref_=nv_sr_1?ref_=nv_sr_1',
    },
  ]);
  //console.log(filterById(movies, 'fant011'));

  return (
    <>
      <Section movies={(movies, 'fant011')} />
      <Section movies={movies} />
      <Section
        name="The Return of the King "
        desc="Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring."
        url="https://www.imdb.com/title/tt0167260/?ref_=nv_sr_1?ref_=nv_sr_1"
      />
    </>
  );
}

render(<App />, document.getElementById('my-app'));
