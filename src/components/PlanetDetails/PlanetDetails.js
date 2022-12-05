import './PlanetDetails.css';

import Grid from '../Grid';
import { useSelector } from 'react-redux';

function PlanetDetails() {
  const selectedPlanet = useSelector(state => state.app.selectedPlanet);
  const data = {
    header: [
      { name: 'name' },
      { name: 'rotation_period', type: "number" },
      { name: 'orbital_period', type: "number" },
      { name: 'diameter', type: "number" },
      { name: 'climate', type: "string" },
      { name: 'gravity', type: "string" },
      { name: 'terrain', type: "number" },
      { name: 'surface_water', type: "number" },
      { name: 'population', type: "number" }
    ],
    values: [selectedPlanet],
    actions: [
    ]
  }

  return (
    <div className='App'>
      <Grid data={data} />
    </div>
  );
}

export default PlanetDetails;
