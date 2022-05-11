import { useState } from 'react';
import { Container } from '@mui/material';
import './App.css';
import Header from './components/Header';
import TargetFishSelector from './components/TargetFishSelector/TargetFishSelector';

function App() {
  const [targetFishSelectorOpen, setTargetFishSelectorOpen] = useState(true);
  const [targetFish, setTargetFish] = useState();

  return (
    <Container>
      <Header />

      <div style={{marginTop: '10%'}}>
        <TargetFishSelector
          isOpen={targetFishSelectorOpen}
          onOpenChange={setTargetFishSelectorOpen}
          onSelected={setTargetFish}
          selected={targetFish} />
      </div>

    </Container>
  );
}

export default App;
