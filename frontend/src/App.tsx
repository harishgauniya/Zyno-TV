import Landing from "./component/Landing";
import Room from './component/Room';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/room" element={<Room />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
