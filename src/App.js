
import './App.css';
import DocTitleOne from './components/DocTitleOne';
import Hello from './components/Hello';

import Reducer from './components/Reducer'

import {AdminProvider} from './context/AdminContext'




function App() {
  return (
    <div className="App">
<AdminProvider>

<Reducer/>
<Hello/>

</AdminProvider>


<DocTitleOne/>
    </div>
  );
}

export default App;
