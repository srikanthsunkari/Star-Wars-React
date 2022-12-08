import './Residents.css';

import Grid from '../Grid';
import { Col, Container, Row, Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { onResidentsSelected } from '../../common/appSlicer';

function Residents() {
  const history = useHistory();
  const dispatch = useDispatch();
  let planets = useSelector((state) => state.app.planets);
  const selectedPlanet = useSelector(state => state.app.selectedPlanet);
  const [residents, setResidentsData] = useState([]);
  useEffect(() => {
    (async () => {
      console.log('residents data selectedPlanet', selectedPlanet);

      const residents = await Promise.all(selectedPlanet.residents.map((residentlink, index) => {
        return fetch(residentlink)
          .then(response => response.json());
      }));
      console.log('residents data', residents);
      setResidentsData(residents);
    })();
  }, [selectedPlanet]);
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
    values: residents,
    actions: [
      {
        label: 'Details',
        action: (row) => {
          dispatch(onResidentsSelected(row));
          history.push('/residents-details');
        }
      }
    ]
  }

  return (
    <div className='App'>
      <Container style={{ marginTop: '30px' }}>
        <Row xs="4">
          <Col>
            <h2 className='heading-text'>Residents</h2>
          </Col>
          <Col></Col>
          <Col></Col>
          <Col>
            <Button onClick={() => {
              history.goBack();
            }}>Back</Button>
          </Col>
        </Row>
      </Container>
      <Grid data={data} />
    </div>
  );
}

export default Residents;
