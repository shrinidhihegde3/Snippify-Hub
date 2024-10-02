import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Box from "./components/box/Box";
import Navbar from "./components/Navbar";
import HelloWorldCode from "./snippets/C++/bubbleSort"; // This is your bubble sort component


const App = () => {
  return (
    <Router>
      <Box>
        <div className="w-full flex flex-col items-center">
          <Navbar />
          <Routes>
            {/* Define your routes here */}
            <Route path='/' element={<HelloWorldCode />} />
            <Route path="/bubble-sort" element={<HelloWorldCode />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </Box>
    </Router>
  );
};

export default App;
