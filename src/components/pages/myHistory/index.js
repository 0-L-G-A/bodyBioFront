import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MedAppointment from './Appointment';
import { fetchUsersAppointments } from 'store/actions/medApp';

const MyMedicalHistory = () => {
  const dispatch = useDispatch();
  const { appointmentsArray } = useSelector((state) => state.medApp);
  const { userData } = useSelector((state) => state.auth);

  // Додано стани для селектів
  const [selectedBodySystem, setSelectedBodySystem] = useState('');
  const [selectedRecordType, setSelectedRecordType] = useState('appointment');

  useEffect(() => {
    if (userData?.id) {
      dispatch(fetchUsersAppointments(userData?.id));
    }
  }, [dispatch, userData]);

  // Обробники змін у селектах
  const handleBodySystemChange = (e) => {
    setSelectedBodySystem(e.target.value);
  };

  const handleRecordTypeChange = (e) => {
    setSelectedRecordType(e.target.value);
    if (e.target.value === 'appointment') {
      setSelectedBodySystem('');
    }
  };

  return (
    <div className="h-screen overflow-y-auto p-4 bg-lightTheme-lightBlue">
      {/* Toolbar */}
      <div className="fixed top-[72px] left-0 w-full bg-lightTheme-lightBlue border-b border-lightTheme-darkSeaWave shadow-md p-2 z-10 flex justify-between items-center">
        <select
          value={selectedBodySystem}
          onChange={handleBodySystemChange}
          disabled={selectedRecordType === 'appointment'}
          className="min-w-[150px] px-4 py-2 border border-lightTheme-darkSeaWave rounded-md focus:outline-none text-lightTheme-darkSecondaryText"
        >
          <option value="">Select Body System</option>
          {/* Замініть наступні <option> на реальні дані body systems */}
          <option value="06297b53-5b31-4505-8843-5f7fcd50046a">
            Respiratory
          </option>
          <option value="b53e2df3-00c6-40ab-91b5-8fdb16d7c70b">
            Cardiovascular
          </option>
        </select>

        <select
          value={selectedRecordType}
          onChange={handleRecordTypeChange}
          className="min-w-[150px] px-4 py-2 border border-lightTheme-darkSeaWave rounded-md focus:outline-none text-lightTheme-darkSecondaryText"
        >
          <option value="appointment">Appointment</option>
          <option value="diagnoze">Diagnosis</option>
          <option value="finding">Finding</option>
          <option value="lab">Laboratory</option>
        </select>
      </div>

      {/* Основний контент сторінки */}
      <div className="mt-[60px]">
        {' '}
        {/* відступ від тулбару */}
        {appointmentsArray
          ?.filter((appointment) => {
            // Логіка фільтрації записів
            if (selectedRecordType !== 'appointment') {
              return (
                appointment.recordType === selectedRecordType &&
                (selectedBodySystem
                  ? appointment.usedBodySystems.includes(selectedBodySystem)
                  : true)
              );
            }
            return true; // Показує всі апойнменти, якщо вибрано "appointment"
          })
          .map((appointment) => (
            <MedAppointment key={appointment.id} appointment={appointment} />
          ))}
      </div>
    </div>
  );
};

export default MyMedicalHistory;
