import ArrayInputWithAddButton from 'components/commonComponents/arrayInputWithAddButton';
import Button from 'components/commonComponents/button';
import InputWithValidation from 'components/commonComponents/inputWithValidation';
import SelectWithValidation from 'components/commonComponents/selectWithValidation';
import { LANGUAGES } from 'components/types/lang';
import { USER_ROLE_TYPES } from 'components/types/roles';
import { SEX_TYPES } from 'components/types/sex';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const Home = () => {
  const { t } = useTranslation();
  const { userData, loading } = useSelector((state) => state.auth);
  const [isEditing, setIsEditing] = useState(false);

  const [data, setData] = useState({
    name: userData?.name || '',
    surname: userData?.surname || '',
    role: userData?.role || '',
    email: userData?.email || '',
    contactNumber: userData?.contactNumber || '',
    insuranceId: userData?.insuranceId || '',
    patientsIds: userData?.patientsIds || [],
    doctorsIds: userData?.doctorsIds || [],
    adminsIds: userData?.adminsIds || [],
    trustPersonsIds: userData?.trustPersonsIds || [],
    isAlive: userData?.isAlive || true,
    sex: userData?.sex || '',
    preferedLanguage: userData?.preferedLanguage || 'ENG',
  });

  const toggleEditMode = () => {
    if (isEditing) {
      console.log(data);
    }
    setIsEditing(!isEditing);
  };

  const validateInput = (value) => value.trim().length > 1;
  const validateSelect = (value) => value !== '';

  return (
    <div className="bg-lightTheme-lightBlue max-w-screen-md mx-auto mt-10 flex flex-col align-center pt-2">
      <Button onClick={toggleEditMode} type="button" disabled={loading}>
        {isEditing ? t('COMMON.save') : t('COMMON.edit')}
      </Button>

      <InputWithValidation
        label={t('COMMON.name')}
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
        placeholder={t('LOGIN.enterYour') + ' ' + t('COMMON.name')}
        validate={validateInput}
        errorMessage={t('LOGIN.fieldIsRequired')}
        tooltipText={t('LOGIN.lengthShouldBeLonger') + ' 2'}
        disabled={!isEditing}
      />

      <InputWithValidation
        label={t('COMMON.surname')}
        value={data.surname}
        onChange={(e) => setData({ ...data, surname: e.target.value })}
        placeholder={t('LOGIN.enterYour') + ' ' + t('COMMON.surname')}
        validate={validateInput}
        errorMessage={t('LOGIN.fieldIsRequired')}
        tooltipText={t('LOGIN.lengthShouldBeLonger') + ' 2'}
        disabled={!isEditing}
      />

      <InputWithValidation
        label={t('COMMON.contactNumber')}
        value={data.contactNumber}
        onChange={(e) => setData({ ...data, contactNumber: e.target.value })}
        placeholder={t('LOGIN.enterYour') + ' ' + t('COMMON.contactNumber')}
        validate={validateInput}
        errorMessage={t('LOGIN.fieldIsRequired')}
        tooltipText={t('LOGIN.lengthShouldBeLonger') + ' 2'}
        disabled={!isEditing}
      />

      <InputWithValidation
        label={t('COMMON.insuranceId')}
        value={data.insuranceId}
        onChange={(e) => setData({ ...data, insuranceId: e.target.value })}
        placeholder={t('LOGIN.enterYour') + ' ' + t('COMMON.insuranceId')}
        validate={validateInput}
        errorMessage={t('LOGIN.fieldIsRequired')}
        tooltipText={t('LOGIN.lengthShouldBeLonger') + ' 2'}
        disabled={!isEditing}
      />

      <SelectWithValidation
        label={t('COMMON.role')}
        value={data.role}
        options={USER_ROLE_TYPES}
        onChange={(e) => setData({ ...data, role: e.target.value })}
        validate={validateSelect}
        errorMessage={t('LOGIN.fieldIsRequired')}
        tooltipText={t('LOGIN.selectYourRole')}
        disabled={!isEditing}
      />

      <SelectWithValidation
        label={t('COMMON.sex')}
        value={data.sex}
        options={SEX_TYPES}
        onChange={(e) => setData({ ...data, sex: e.target.value })}
        validate={validateSelect}
        errorMessage={t('LOGIN.fieldIsRequired')}
        disabled={!isEditing}
      />

      <SelectWithValidation
        label={t('COMMON.language')}
        value={data.preferedLanguage}
        options={LANGUAGES}
        onChange={(e) => setData({ ...data, preferedLanguage: e.target.value })}
        validate={validateSelect}
        errorMessage={t('LOGIN.fieldIsRequired')}
        disabled={!isEditing}
      />

      <ArrayInputWithAddButton
        label={t('COMMON.doctors')}
        arrayValues={data.doctorsIds}
        setArrayValues={(newValues) =>
          setData({ ...data, doctorsIds: newValues })
        }
        placeholder={t('LOGIN.enterYour') + ' ' + t('COMMON.doctors')}
        isEditing={isEditing}
        validate={validateInput}
        errorMessage={t('LOGIN.fieldIsRequired')}
      />

      <ArrayInputWithAddButton
        label={t('COMMON.trustPersons')}
        arrayValues={data.trustPersonsIds}
        setArrayValues={(newValues) =>
          setData({ ...data, trustPersonsIds: newValues })
        }
        placeholder={t('LOGIN.enterYour') + ' ' + t('COMMON.trustPersons')}
        isEditing={isEditing}
        validate={validateInput}
        errorMessage={t('LOGIN.fieldIsRequired')}
      />

      <ArrayInputWithAddButton
        label={t('COMMON.admins')}
        arrayValues={data.adminsIds}
        setArrayValues={(newValues) =>
          setData({ ...data, adminsIds: newValues })
        }
        placeholder={t('LOGIN.enterYour') + ' ' + t('COMMON.admins')}
        isEditing={isEditing}
        validate={validateInput}
        errorMessage={t('LOGIN.fieldIsRequired')}
      />

      <ArrayInputWithAddButton
        label={t('COMMON.patients')}
        arrayValues={data.patientsIds}
        setArrayValues={(newValues) =>
          setData({ ...data, patientsIds: newValues })
        }
        placeholder={t('LOGIN.enterYour') + ' ' + t('COMMON.patients')}
        isEditing={isEditing}
        validate={validateInput}
        errorMessage={t('LOGIN.fieldIsRequired')}
      />
    </div>
  );
};

export default Home;
