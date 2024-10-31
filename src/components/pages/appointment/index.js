import { useEffect } from 'react';
import CollapsibleBodySystemBlock from './BodySystemBlock';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBodySystems } from 'store/actions/catalog';

const Appointment = () => {
  const dispatch = useDispatch();
  const catalogState = useSelector((state) => state.catalog);

  useEffect(() => {
    dispatch(fetchBodySystems());
  }, []);

  return (
    <div className="h-screen overflow-y-auto p-4 bg-lightTheme-lightBlue">
      {catalogState?.bodySystemsArray?.map((bodySystem) => (
        <CollapsibleBodySystemBlock
          nameKey={bodySystem.nameKey}
          id={bodySystem.nameKey + bodySystem.id}
        />
      ))}
    </div>
  );
};

export default Appointment;
