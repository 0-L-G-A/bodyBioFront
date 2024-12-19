import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MedAppointment from './Appointment';
import { fetchUsersAppointments } from 'store/actions/medApp';

const MyMedicalHistory = () => {
  const dispatch = useDispatch();
  const { appointmentsArray } = useSelector((state) => state.medApp);
  const { userData } = useSelector((state) => state.auth);

  const [selectedBodySystem, setSelectedBodySystem] = useState('');
  const [selectedRecordType, setSelectedRecordType] = useState('appointment');

  useEffect(() => {
    if (userData?.id) {
      dispatch(fetchUsersAppointments(userData?.id));
    }
  }, [dispatch, userData]);

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
      <div className="fixed top-[72px] left-0 w-full bg-lightTheme-lightBlue border-b border-lightTheme-darkSeaWave shadow-md p-2 z-10 flex justify-between items-center">
        <select
          value={selectedBodySystem}
          onChange={handleBodySystemChange}
          disabled={selectedRecordType === 'appointment'}
          className="min-w-[150px] px-4 py-2 border border-lightTheme-darkSeaWave rounded-md focus:outline-none text-lightTheme-darkSecondaryText"
        >
          <option value="">Вибрати систему тіла</option>
          <option value="06297b53-5b31-4505-8843-5f7fcd50046a">
            Респіраторна
          </option>
          <option value="b53e2df3-00c6-40ab-91b5-8fdb16d7c70b">
            Серцево-судинна
          </option>
        </select>

        <select
          value={selectedRecordType}
          onChange={handleRecordTypeChange}
          className="min-w-[150px] px-4 py-2 border border-lightTheme-darkSeaWave rounded-md focus:outline-none text-lightTheme-darkSecondaryText"
        >
          <option value="appointment">Медичні записи</option>
          <option value="diagnoze">Діагнози</option>
          <option value="finding">Симптоми</option>
          <option value="lab">Дослідження</option>
        </select>
      </div>

      <div className="mt-[60px]">
        {' '}
        {appointmentsArray
          ?.filter((appointment) => {
            if (selectedRecordType !== 'appointment') {
              return (
                appointment.recordType === selectedRecordType &&
                (selectedBodySystem
                  ? appointment.usedBodySystems.includes(selectedBodySystem)
                  : true)
              );
            }
            return true;
          })
          .map((appointment) => (
            <MedAppointment key={appointment.id} appointment={appointment} />
          ))}
      </div>
    </div>
  );
};

export default MyMedicalHistory;
