import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const linkStyle =
  'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded';

const logoStyle = 'text-lightTheme-lightMainText text-lg font-bold';
const wrapperStyle = 'container mx-auto flex justify-between items-center';
const navStyle = 'bg-lightTheme-darkSeaWave p-4';

export default function Navigation() {
  const { t } = useTranslation();
  const { userData } = useSelector((state) => state.auth);
  return (
    <nav className={navStyle}>
      <div className={wrapperStyle}>
        <div className={logoStyle}>{t('COMMON.bodyBio')}</div>
        <div className="space-x-4">
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
        </div>
      </div>
    </nav>
  );
}
