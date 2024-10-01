
import './App.css'

import ColorBox from '../ColorBox/ColorBox.jsx';

function App() {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <ColorBox />
        <ColorBox />
        <ColorBox />
      </div>
    </>
  );
}

export default App;