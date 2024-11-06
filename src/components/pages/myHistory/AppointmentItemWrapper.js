import React, { useEffect } from 'react';
import AppointmentItem from './AppointmentItem';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDiagnozesByIds } from 'store/actions/catalog';

const AppointmentWrapper = ({ appointment }) => {
  const dispatch = useDispatch();
  const { diagnozesObj } = useSelector((state) => state.catalog);
  const { usersDiagnozes } = appointment;

  useEffect(() => {
    const usersDiagnozesIds = usersDiagnozes.map((d) => d?.childDiagnozeId);
    dispatch(fetchDiagnozesByIds(usersDiagnozesIds));
  }, [dispatch, usersDiagnozes]);

  return (
    <>
      <div
        className="mt-4 border-t border-lightTheme-darkSeaWave pt-4"
        key="AppointmentWrapper"
      >
        {usersDiagnozes.map((diagnosis) => (
          <AppointmentItem
            key={diagnosis.id}
            diagnosis={diagnosis}
            catalogItem={diagnozesObj?.[diagnosis.childDiagnozeId]}
          />
        ))}
      </div>
    </>
  );
};

export default AppointmentWrapper;
