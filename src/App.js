import SignUp from 'components/pages/signUp';
import './App.css';
import LogIn from 'components/pages/logIn';
import Home from 'components/pages/home';
import Appointment from 'components/pages/appointment';
import NotFound from 'components/pages/404';
import { Navigate, Route, Routes } from 'react-router-dom';
import Navigation from 'components/navigation';
import { useSelector } from 'react-redux';
import MyMedicalHistory from 'components/pages/myHistory';

function App() {
  const { userData } = useSelector((state) => state.auth);
  return (
    <div className="mt-[72px] bg-lightTheme-lightBlue h-screen">
      <Navigation />
      <Routes>
        {userData?.id ? (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/medhis" element={<MyMedicalHistory />} />
            <Route path="/" element={<Navigate to="/home" />} />
          </>
        ) : (
          <>
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/logIn" element={<LogIn />} />
            <Route path="/" element={<Navigate to="/logIn" />} />
          </>
        )}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
