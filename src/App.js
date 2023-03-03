import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import ScanQrPage from './pages/ScanQrPage';
import DetailsPage from './pages/DetailsPage';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
          <Route index element={<LoginPage />} />
          <Route path="/scanqr" element={<ScanQrPage />} />
          <Route path="/Profile" element={<ScanQrPage />} />
          <Route path="/details" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;