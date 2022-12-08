import './FilmsDetails.css';

import Grid from '../Grid';
import { useHistory } from 'react-router-dom';
import { Col, Container, Row, Button } from 'reactstrap';
import DetailsGrid from '../DetailsGrid';
import { useSelector } from 'react-redux';

function FilmsDetails() {
  const selectedFilms = useSelector(state => state.app.selectedFilms);
  console.log('selectedFilms', selectedFilms);
  const data = {
    header: [
      '',
      '',
    ],
    values: selectedFilms,
    actions: [
    ]
  }

  const history = useHistory();
  return (
    <div className='App'>
      <Container style={{ marginTop: '30px' }}>
        <Row xs="4">
          <Col>
            <h2 className='heading-text'>Films</h2>
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

export default FilmsDetails;
