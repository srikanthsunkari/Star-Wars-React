import './ResidentsDetails.css';

import Grid from '../Grid';
import { Col, Container, Row, Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import DetailsGrid from '../DetailsGrid';

function ResidentsDetails() {
  const selectedResidents = useSelector(state => state.app.selectedResidents);

  console.log('selectedResidents', selectedResidents);
  const data = {
    header: [
     '',
     ''
    ],
    values: selectedResidents,
    actions: [
    ]
  }
  const history = useHistory();

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
      <DetailsGrid data={data} />
    </div>
  );
}

export default ResidentsDetails;
