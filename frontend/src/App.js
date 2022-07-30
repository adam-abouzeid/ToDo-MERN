import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './screens/LandingPage/LandingPage.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyNotes from './screens/MyNotes/MyNotes';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import CreateNote from './screens/CreateNote/createNote';

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      {/* <!--Routes--> */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/mynotes" element={<MyNotes />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/createnote" element={<CreateNote />} />
    </Routes>

    <Footer />
  </BrowserRouter>
);

export default App;
