import './Films.css';

import Grid from '../Grid';
import { useHistory } from 'react-router-dom';
import { Col, Container, Row, Button } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { onFilmsSelected } from '../../common/appSlicer';
import { useEffect } from 'react';

function Films() {
  const history = useHistory();
  const dispatch = useDispatch();
  const selectedPlanet = useSelector(state => state.app.selectedPlanet);
  const [films, setFilmsData] = useState([]);
  useEffect(() => {
    (async () => {
      console.log('films data selectedPlanet', selectedPlanet);

      const films = await Promise.all(selectedPlanet.films.map((link, index) => {
        return fetch(link)
          .then(response => response.json());
      }));
      console.log('residents data', films);
      setFilmsData(films);
    })();
  }, [selectedPlanet]);
  const data = {
    header: [
      { name: 'title', type: 'string' },
      { name: 'episode_id', type: 'number' },
      { name: 'opening_crawl', type: 'string' },
      { name: 'director', type: 'string' },
      { name: 'producer', type: 'string' },
      { name: 'release_date', type: 'string' },
    ],
    values: films,
    actions: [
      {
        label: 'Details',
        action: (row) => {
          dispatch(onFilmsSelected(row));
          history.push('/films-details');
        }
      }
    ]
  }

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
      <Grid data={data} />
    </div>
  );
}

export default Films;
