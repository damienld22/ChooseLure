import { useReducer } from 'react';
import { Container } from '@mui/material';
import './App.css';
import Header from './components/Header';
import TargetFishSelector from './components/selectors/TargetFishSelector/TargetFishSelector';
import SeasonSelector from './components/selectors/SeasonSelector/SeasonSelector';

const initialState = {
  targetFishSelectOpen: true,
  seasonSelectOpen: false,
  targetFish: null,
  season: null
}

function reducer(state, action) {
  switch(action.type) {
    case 'setTargetFish':
      return {
        ...state,
        targetFish: action.payload,
        targetFishSelectOpen: false,
        seasonSelectOpen: true
      }
    case 'setSeason':
      return {
        ...state,
        season: action.payload,
        seasonSelectOpen: false
      }
    case 'setStateOpenSelector':
      return {
        ...state,
        [action.payload.selector]: action.payload.open
      }
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Container>
      <Header />

      <div style={{marginTop: '10%'}}>
        <TargetFishSelector
          isOpen={state.targetFishSelectOpen}
          onOpenChange={open => dispatch({type: 'setStateOpenSelector', payload: {selector: 'targetFishSelectOpen', open}})}
          onSelected={value => dispatch({type: 'setTargetFish', payload: value})}
          selected={state.targetFish} />

        <SeasonSelector
          isOpen={state.seasonSelectOpen}
          onOpenChange={open => dispatch({type: 'setStateOpenSelector', payload: {selector: 'seasonSelectOpen', open}})}
          onSelected={value => dispatch({type: 'setSeason', payload: value})}
          selected={state.season} />
      </div>

    </Container>
  );
}

export default App;
