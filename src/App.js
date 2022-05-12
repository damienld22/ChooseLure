import { useReducer } from 'react';
import { Button, Container } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import Header from './components/Header';
import TargetFishSelector from './components/selectors/TargetFishSelector/TargetFishSelector';
import SeasonSelector from './components/selectors/SeasonSelector/SeasonSelector';
import Results  from './components/Results/Results';
import styles from './App.module.scss'

const initialState = {
  targetFishSelectOpen: true,
  seasonSelectOpen: false,
  targetFish: null,
  season: null,
  showResults: false
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
    case 'setResultsOpen':
      return {...state, showResults: action.payload}
    case 'clear':
      return initialState;
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Container className={styles.container}>
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

      {
        state.showResults ? (
          <>
            <Results />
            <Button
              variant="outlined"
              onClick={() => dispatch({type: 'clear'})}
              startIcon={<ClearIcon />}>
                Réinitialiser
            </Button>
          </>
        ) : (
          <Button
            color="success"
            disabled={!state.targetFish || !state.season}
            onClick={() => dispatch({type: 'setResultsOpen', payload: true})}
            variant='contained'>
              Voir les résultats
          </Button>
        )
      }


    </Container>
  );
}

export default App;
