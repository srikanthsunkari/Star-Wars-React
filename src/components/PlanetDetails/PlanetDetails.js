import './PlanetDetails.css';

import Grid from '../Grid';
import { useSelector } from 'react-redux';
import { Button, Col, Container, Row } from 'reactstrap';
import { useHistory } from 'react-router-dom';

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

  const history = useHistory();

  return (
    <div className='App'>
      <Container style={{ marginTop: '30px' }}>
        <Row xs="2">
          <Col>
            <h2 className='heading-text'>Planet Details</h2>
          </Col>
          <Col>
            <Button onClick={() => history.goBack()}>Back</Button>
          </Col>
        </Row>
      </Container>
      <Grid data={data} />
    </div>
  );
}


export default PlanetDetails;
