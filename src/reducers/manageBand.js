import uuid from 'uuid'

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      const newBand = {
        id: uuid(),
        name: action.name
      }
      return { ...state, bands: [...state.bands, newBand] }
    
    case 'DELETE_BAND':
      const newArray = [...state.bands].filter(band => band.id !== action.id)

      return {...state, bands: newArray}
      
    default:
      return state;
  }
};
