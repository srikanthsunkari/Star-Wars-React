import './Planets.css';
import { useHistory } from "react-router-dom";
import Grid from '../Grid';
import { useDispatch, useSelector } from 'react-redux';
import { onFilmsSelected, onPlanetSelected, onPlanetsLoaded, onPlanetsUpdated, onResidentsSelected } from '../../common/appSlicer';
import { useEffect, useState } from 'react';
import PlanetUpdateModal from './../PlanetUpdateModal/PlanetUpdateModal';
import 'bootstrap/dist/css/bootstrap.min.css';

function Planets() {
  let history = useHistory();
  let dispatch = useDispatch();
  const [openUpdateModal, setOpenUpdateModel] = useState(false);
  let planets = useSelector((state) => state.app.planets);
  const toggle = () => setOpenUpdateModel(!openUpdateModal);
  useEffect(() => {
    console.log('planets', planets);
    (async () => {
      const response = await fetch('https://swapi.dev/api/planets');
      const data = await response.json();
      console.log('planets', data);
      dispatch(onPlanetsLoaded(data.results));
    })();
  }, []);
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
    values: planets,
    actions: [
      {
        label: 'Go to Films',
        action: (row) => {
          dispatch(onPlanetSelected(row));
          history.push('/films');
          // console.log(`redirect to grid with ${row.films.length} Films`)
        }
      },
      {
        label: 'Go to Residents',
        action: (row) => {
          dispatch(onPlanetSelected(row));
          history.push('/residents');
          // console.log(`redirect to grid with ${row.residents.length} Residents`) 
        }
      },
      {
        label: 'Planet Details',
        action: (row) => {
          dispatch(onPlanetSelected(row));
          history.push('/planet-details');
          // console.log(`redirect to grid with ${row.residents.length} Residents`) 
        }
      },
      {
        label: 'Update Planet Details',
        action: (row) => {
          // history.push('/planet-details');
          console.log(`redirect to grid with ${row} Residents`, row);
          dispatch(onPlanetSelected(row));
          setOpenUpdateModel(true);
        }
      }
    ]
  }

  return (
    <div className='App'>
      <Grid data={data} />
      <PlanetUpdateModal open={openUpdateModal} toggle={toggle} />
    </div>
  );
}

export default Planets;
