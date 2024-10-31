import SignUp from 'components/pages/signUp';
import './App.css';
import LogIn from 'components/pages/logIn';
import Home from 'components/pages/home';
import Appointment from 'components/pages/appointment';
import NotFound from 'components/pages/404';
import { Route, Routes } from 'react-router-dom';
import Navigation from 'components/navigation';
import { useSelector } from 'react-redux';

function App() {
  const { userData } = useSelector((state) => state.auth);
  return (
    <>
      <Navigation />
      <Routes>
        {userData?.id && (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/appointment" element={<Appointment />} />
          </>
        )}
        {!userData?.id && (
          <>
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/logIn" element={<LogIn />} />
          </>
        )}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
