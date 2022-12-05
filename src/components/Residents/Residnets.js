import './Residents.css';

import Grid from '../Grid';

function Residents() {

  const data = {
    header: [
      { name: 'name', type: 'string' },
      { name: 'height', type: 'number' },
      { name: 'mass', type: 'number' },
      { name: 'hair_color', type: 'string' },
      { name: 'skin_color', type: 'string' },
      { name: 'eye_color', type: 'string' },
      { name: 'birth_year', type: 'string' },
      { name: 'gender', type: 'string' },
    ],
    values: [{
      "name": "Luke Skywalker",
      "height": "172",
      "mass": "77",
      "hair_color": "blond",
      "skin_color": "fair",
      "eye_color": "blue",
      "birth_year": "19BBY",
      "gender": "male",
      "homeworld": "https://swapi.dev/api/planets/1/",
      "films": [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/6/"
      ],
      "species": [],
      "vehicles": [
        "https://swapi.dev/api/vehicles/14/",
        "https://swapi.dev/api/vehicles/30/"
      ],
      "starships": [
        "https://swapi.dev/api/starships/12/",
        "https://swapi.dev/api/starships/22/"
      ],
      "created": "2014-12-09T13:50:51.644000Z",
      "edited": "2014-12-20T21:17:56.891000Z",
      "url": "https://swapi.dev/api/people/1/"
    }],
    actions: [
      // {
      //   label: 'Go to Films',
      //   action: (row) => { console.log(`redirect to grid with ${row.films.length} Films`) }
      // },
      // {
      //   label: 'Go to Residents',
      //   action: (row) => { console.log(`redirect to grid with ${row.residents.length} Residents`) }
      // }
    ]
  }

  return (
    <div className='App'>
      <Grid data={data} />
    </div>
  );
}

export default Residents;
