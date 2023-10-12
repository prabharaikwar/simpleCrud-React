import './App.css';
import { Routes, Route } from "react-router-dom";
import Update from './Comp/Update.js';
import GetData from './Comp/GetData.js';
import Create from './Comp/Create.js';

function App() {
  return (
    <div className="App">
      {/* <GetData /> */}
      {/* <BrowserRouter> */}
      <Routes>
        <Route path='/' exact  element={<GetData />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />}>
        </Route>
      </Routes>
      {/* </BrowserRouter>  */}
    </div>
  );
}

export default App;
