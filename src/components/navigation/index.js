import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from 'store/actions/auth';
import { FaSignOutAlt } from 'react-icons/fa';

const linkStyle =
  'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded';

const logoStyle = 'text-lightTheme-lightMainText text-lg font-bold';
const wrapperStyle = 'container mx-auto flex justify-between items-center';
const navStyle =
  'bg-lightTheme-darkSeaWave p-4 fixed top-0 left-0 w-full opacity-100 z-[101]';

export default function Navigation() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userData } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/logIn');
  };

  return (
    <nav className={navStyle}>
      <div className={wrapperStyle}>
        <div className={logoStyle}>{t('COMMON.bodyBio')}</div>
        <div className="space-x-4 flex justify-between items-center">
          {!userData?.id && (
            <>
              <Link to="/signUp" className={linkStyle}>
                {t('NAVIGATION.signUp')}
              </Link>
              <Link to="/logIn" className={linkStyle}>
                {t('NAVIGATION.logIn')}
              </Link>
            </>
          )}
          {userData?.id && (
            <>
              <Link to="/home" className={linkStyle}>
                {t('NAVIGATION.home')}
              </Link>
              <Link to="/appointment" className={linkStyle}>
                {t('NAVIGATION.appointment')}
              </Link>
              <Link to="/medhis" className={linkStyle}>
                {t('NAVIGATION.myMedicalHistory')}
              </Link>
            </>
          )}
          {userData?.id && (
            <div className="flex items-center">
              <span
                onClick={handleLogout}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded cursor-pointer flex items-center"
              >
                <FaSignOutAlt size={20} />
              </span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
