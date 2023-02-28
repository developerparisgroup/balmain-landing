import MediaQuery from 'react-responsive';
import MobileView from './components/Landing/Mobile';
import ComputerView from './components/Landing/Computer';

import 'semantic-ui-css/semantic.min.css';
import './App.css';

const App = () => {
  return (
    <>
      <MediaQuery minWidth={768}>
        <div style={{ height: '100vh' }}>
          <ComputerView />
        </div>
      </MediaQuery>

      <MediaQuery maxWidth={767}>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <MobileView />
        </div>
      </MediaQuery>
    </>
  );
};


export default App;