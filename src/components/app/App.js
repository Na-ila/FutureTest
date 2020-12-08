import './App.css';
import {Route, Switch} from 'react-router-dom';
import Header from '../header/header';
import Choice from '../choice/choice';
import Table from '../table/table';

function App() {

  return (
    <>
      <Header/>
        <Switch>
          <Route exact path='/' component={Choice}/>
          <Route exact path='/database' component={Table}/>
        </Switch>
    </>
  );
}

export default App;
