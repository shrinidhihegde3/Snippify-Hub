import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Box from "./components/box/Box";
import Navbar from "./components/Navbar";
import HelloWorldCode from "./snippets/C++/bubbleSort"; // This is your bubble sort component
import MergeSortCode from './snippets/C++/MergeSortCode';

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
            <Route path="/merge-sort" element={<MergeSortCode />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </Box>
    </Router>
  );
};

export default App;
