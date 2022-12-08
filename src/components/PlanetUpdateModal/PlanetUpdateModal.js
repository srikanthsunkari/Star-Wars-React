import './PlanetUpdateModal.css';
import { useHistory } from "react-router-dom";
import Grid from '../Grid';
import { useDispatch, useSelector } from 'react-redux';
import { onFilmsSelected, onPlanetsAdded, onPlanetSelected, onPlanetsUpdated, onResidentsSelected } from '../../common/appSlicer';
import { useEffect, useState } from 'react';
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from 'reactstrap';
import { Col, Container, Row } from 'reactstrap';

function PlanetUpdateModal(props) {
  let history = useHistory();
  let dispatch = useDispatch();

  // const [open, setOpen] = React.useState(false);


  const selectedPlanet = useSelector((state) => state.app.selectedPlanet);

  useEffect(() => {
    console.log('INSIDE USEEFFECT 1', newPlanet);
    setUpdatedPlanet(selectedPlanet)
    console.log('INSIDE USEEFFECT 2', newPlanet);
  }, [selectedPlanet]);
  const [newPlanet, setUpdatedPlanet] = useState(selectedPlanet);

  console.log('selectedPlanet', newPlanet);

  return (
    <Modal isOpen={props.open}
      toggle={props.toggle}
    >
      <ModalHeader toggle={props.toggle} >
        Update Planet Details
      </ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="planetName">
              Planet Name
            </Label>
            <Input
              id="planetName"
              name="planetName"
              placeholder="Planet Name"
              type="text"
              value={newPlanet?.name}
              onChange={(e) => setUpdatedPlanet({
                ...newPlanet,
                name: e.target.value,
              })}
            />
            <Label for="rotationPeriod">
              Rotation Period
            </Label>
            <Input
              id="rotationPeriod"
              name="rotationPeriod"
              placeholder="Rotation Period"
              type="number"
              value={newPlanet?.rotation_period}
              onChange={(e) => setUpdatedPlanet({
                ...newPlanet,
                rotation_period: e.target.value,
              })}
            />
            <Label for="orbitalPeriod">
              Orbital Period
            </Label>
            <Input
              id="orbitalPeriod"
              name="orbitalPeriod"
              placeholder="Orbital Period"
              type="number"
              value={newPlanet?.orbital_period}
              onChange={(e) => setUpdatedPlanet({
                ...newPlanet,
                'orbital_period': e.target.value,
              })}
            />
            <Label for="diameter">
              Diameter
            </Label>
            <Input
              id="diameter"
              name="diameter"
              placeholder="Diameter"
              type="number"
              value={newPlanet?.diameter}
              onChange={(e) => setUpdatedPlanet({
                ...newPlanet,
                'diameter': e.target.value,
              })}
            />
            <Label for="surface_water">
              Surface Water
            </Label>
            <Input
              id="surface_water"
              name="surface_water"
              placeholder="Surface Water"
              type="number"
              value={newPlanet?.surface_water}
              onChange={(e) => setUpdatedPlanet({
                ...newPlanet,
                'surface_water': e.target.value,
              })}
            />
            <Label for="climate">
              Climate
            </Label>
            <Input
              id="climate"
              name="climate"
              placeholder="Climate"
              type="text"
              value={newPlanet?.climate}
              onChange={(e) => setUpdatedPlanet({
                ...newPlanet,
                'climate': e.target.value,
              })}
            />
            <Label for="gravity">
              Gravity
            </Label>
            <Input
              id="gravity"
              name="gravity"
              placeholder="Gravity"
              value={newPlanet?.gravity}
              type="text"
              onChange={(e) => setUpdatedPlanet({
                ...newPlanet,
                'gravity': e.target.value,
              })}
            />
            <Label for="population">
              Population
            </Label>
            <Input
              id="population"
              name="population"
              placeholder="Population"
              type="text"
              value={newPlanet?.population}
              onChange={(e) => setUpdatedPlanet({
                ...newPlanet,
                'population': e.target.value,
              })}
            />
            <Label for="terrain">
              Terrain
            </Label>
            <Input
              id="terrain"
              name="select"
              placeholder="Terrain"
              type="select"
              value={newPlanet?.terrain}
              multiple
              onChange={(e) => setUpdatedPlanet({
                ...newPlanet,
                'terrain': e.target.value,
              })}
            >
              <option>
                desert
              </option>
              <option>
                grasslands, mountains
              </option>
              <option>
                jungle, rainforests
              </option>
              <option>
                tundra, ice caves, mountain ranges
              </option>
              <option>
                swamp, jungles
              </option>
              <option>
                gas giant
              </option>
              <option>
                forests, mountains, lakes
              </option>
              <option>
                grassy hills, swamps, forests, mountains
              </option>
            </Input>
            <Container style={{ marginTop: '30px' }}>
              <Row xs="4">
                <Col>
                  <Button
                    onClick={() => {
                      if (props.operation === 'add') {
                        dispatch(onPlanetsAdded(newPlanet));
                      } else {
                        dispatch(onPlanetsUpdated(newPlanet));
                      }
                      props.toggle();
                    }}
                  >
                    Submit
                  </Button>
                </Col>
                <Col></Col>
                <Col></Col>
                <Col>
                  <Button
                    onClick={() => {
                      props.toggle();
                    }}
                  >
                    Cancel
                  </Button>
                </Col>
              </Row>
            </Container>

          </FormGroup>
        </Form>
      </ModalBody>
    </Modal>
  );
}

export default PlanetUpdateModal;
