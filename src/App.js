import { useReducer } from 'react';
import { Button, Container } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import Header from './components/Header/Header';
import TargetFishSelector from './components/selectors/TargetFishSelector/TargetFishSelector';
import SeasonSelector from './components/selectors/SeasonSelector/SeasonSelector';
import Results from './components/Results/Results';
import styles from './App.module.scss'
import { getResultsFromContext, putElementInMiddle } from './utils';
import WeatherSelector from './components/selectors/WeatherSelector/WeatherSelector';
import WaterColorSelector from './components/selectors/WaterColorSelector/WaterColorSelector';

const initialState = {
  targetFishSelectOpen: true,
  seasonSelectOpen: false,
  weatherSelectOpen: false,
  waterColorSelectOpen: false,
  targetFish: null,
  season: null,
  weather: null,
  waterColor: null,
  showResults: false
}

function reducer(state, action) {
  switch (action.type) {
    case 'setTargetFish':
      putElementInMiddle('seasonSelector'); // Put next selector to middle
      return {
        ...state,
        targetFish: action.payload,
        targetFishSelectOpen: false,
        seasonSelectOpen: true,
        showResults: action.payload && state.season && state.weather && state.waterColor
      }
    case 'setSeason':
      putElementInMiddle('weatherSelector'); // Put next selector to middle
      return {
        ...state,
        season: action.payload,
        seasonSelectOpen: false,
        weatherSelectOpen: true,
        showResults: state.targetFish && action.payload && state.weather && state.waterColor
      }
    case 'setWeather':
      return {
        ...state,
        weather: action.payload,
        weatherSelectOpen: false,
        waterColorSelectOpen: true,
        showResults: state.targetFish && action.payload && state.season && state.waterColor
      }
    case 'setWaterColor':
      return {
        ...state,
        waterColor: action.payload,
        waterColorSelectOpen: false,
        showResults: state.targetFish && action.payload && state.season && state.weather
      }
    case 'setStateOpenSelector':
      return {
        ...state,
        [action.payload.selector]: action.payload.open
      }
    case 'setResultsOpen':
      return { ...state, showResults: action.payload }
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

      <div style={{ marginTop: '10%' }}>
        <TargetFishSelector
          isOpen={state.targetFishSelectOpen}
          onOpenChange={open => dispatch({ type: 'setStateOpenSelector', payload: { selector: 'targetFishSelectOpen', open } })}
          onSelected={value => dispatch({ type: 'setTargetFish', payload: value })}
          selected={state.targetFish} />

        <div id="seasonSelector" className={styles.seasonSelector}>
          <SeasonSelector
            isOpen={state.seasonSelectOpen}
            onOpenChange={open => dispatch({ type: 'setStateOpenSelector', payload: { selector: 'seasonSelectOpen', open } })}
            onSelected={value => dispatch({ type: 'setSeason', payload: value })}
            selected={state.season} />
        </div>
        
        <div id="weatherSelector" className={styles.weatherSelector}>
          <WeatherSelector
            isOpen={state.weatherSelectOpen}
            onOpenChange={open => dispatch({ type: 'setStateOpenSelector', payload: { selector: 'weatherSelectOpen', open } })}
            onSelected={value => dispatch({ type: 'setWeather', payload: value })}
            selected={state.weather} />
        </div>
        
        <div id="waterColorSelector" className={styles.waterColorSelector}>
          <WaterColorSelector
            isOpen={state.waterColorSelectOpen}
            onOpenChange={open => dispatch({ type: 'setStateOpenSelector', payload: { selector: 'waterColorSelectOpen', open } })}
            onSelected={value => dispatch({ type: 'setWaterColor', payload: value })}
            selected={state.waterColor} />
        </div>
      </div>

      <div className={styles.results}>
        {
          state.showResults ? (
            <>
              <Results results={getResultsFromContext({season: state.season, targetFish: state.targetFish})} />
              <Button
                variant="outlined"
                onClick={() => dispatch({ type: 'clear' })}
                startIcon={<ClearIcon />}>
                Réinitialiser
              </Button>
            </>
          ) : (
            <div>
              <Button
                color="success"
                disabled={!state.targetFish || !state.season}
                onClick={() => dispatch({ type: 'setResultsOpen', payload: true })}
                variant='contained'>
                Voir les résultats
              </Button>
            </div>
          )
        }
      </div>



    </Container>
  );
}

export default App;
