import Button from 'components/commonComponents/button';
import InputWithValidation from 'components/commonComponents/inputWithValidation';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from 'store/actions/auth';

const LogIn = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userData, loading, error } = useSelector((state) => state.auth);
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (userData?.id && !error && !loading) {
      navigate('/home');
    }
  }, [userData, error, loading, navigate]);

  const validateInput = (value) => value.trim().length > 1;

  const handleSubmit = () => {
    dispatch(loginUser(data));
  };

  return (
    <div className="bg-lightTheme-lightBlue max-w-screen-md mx-auto mt-10 flex flex-col align-center pt-2">
      <InputWithValidation
        label={t('COMMON.email')}
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
        placeholder={t('LOGIN.enterYour') + ' ' + t('COMMON.email')}
        validate={validateInput}
        errorMessage={t('LOGIN.fieldIsRequired')}
        tooltipText={t('LOGIN.lengthShouldBeLonger') + ' 2'}
        tooltipPosition="bottom"
      />

      <InputWithValidation
        label={t('COMMON.password')}
        value={data.password}
        onChange={(e) => setData({ ...data, password: e.target.value })}
        placeholder={t('LOGIN.enterYour') + ' ' + t('COMMON.password')}
        validate={validateInput}
        errorMessage={t('LOGIN.fieldIsRequired')}
        tooltipText={t('LOGIN.lengthShouldBeLonger') + ' 2'}
      />
      <Button onClick={handleSubmit} type="submit" disabled={loading}>
        {t('NAVIGATION.logIn')}
      </Button>
    </div>
  );
};

export default LogIn;
