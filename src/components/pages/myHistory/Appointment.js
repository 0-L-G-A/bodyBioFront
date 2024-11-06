import React, { useEffect } from 'react';
import AppointmentWrapper from './AppointmentItemWrapper';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBodySystems } from 'store/actions/catalog';

const MedAppointment = ({ appointment }) => {
  const dispatch = useDispatch();
  const { bodySystemsObj, bodySystemsArray } = useSelector(
    (state) => state.catalog,
  );
  const { creationDate, usedBodySystems, author } = appointment;

  useEffect(() => {
    if (!bodySystemsArray) {
      dispatch(fetchBodySystems());
    }
  }, [dispatch, appointment, bodySystemsArray]);

  return (
    <div className="border border-lightTheme-darkSeaWave rounded-md shadow-customSmRD p-4 mb-4">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-lightTheme-darkMainText text-sm">
            <strong>Дата створення:</strong>{' '}
            {new Date(creationDate).toLocaleDateString()}
          </p>
          <p className="text-lightTheme-darkSecondaryText text-sm">
            <strong>Автор:</strong> {author.name + ' ' + author.surname}
          </p>
        </div>

        <div>
          <h4 className="text-lightTheme-darkMainText text-sm mb-2">
            Використані системи організму:
          </h4>
          <ul className="list-disc pl-4 text-lightTheme-darkSecondaryText text-sm">
            {usedBodySystems.map((systemId) => (
              <li key={systemId}>{bodySystemsObj[systemId]?.nameKey}</li>
            ))}
          </ul>
        </div>
      </div>

      <AppointmentWrapper appointment={appointment} />
    </div>
  );
};

export default MedAppointment;
