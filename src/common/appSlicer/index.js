import { createSlice } from '@reduxjs/toolkit'

export const appSlicer = createSlice({
  name: 'app',
  initialState: {
    planets:[],
    selectedFilms: [],
    selectedResidents: [],
    selectedPlanet: undefined,
  },
  reducers: {
    // onFilmsSelected: (state, action) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.selectedFilms = action.payload;
    //   state.selectedPlanet = action.payload;
    // },
    // onResidentsSelected: (state, action) => {
    //   state.selectedResidents = action.payload
    //   state.selectedPlanet = action.payload
    // },
    onPlanetSelected: (state, action) => {
      state.selectedPlanet = action.payload
    },
    onPlanetsUpdated: (state, action) => {
      const index = state.planets.findIndex(planet => planet.name === state.selectedPlanet.name);
      state.planets.splice(index, 1, action.payload);
    },
    onPlanetsLoaded: (state, action) => {
      state.planets = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  // onFilmsSelected, onResidentsSelected,

  onPlanetSelected, onPlanetsUpdated,
  onPlanetsLoaded } = appSlicer.actions

export default appSlicer.reducer