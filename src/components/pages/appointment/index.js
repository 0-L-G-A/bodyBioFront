import { useEffect } from 'react';
import CollapsibleBodySystemBlock from './BodySystemBlock';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBodySystems } from 'store/actions/catalog';
import Button from 'components/commonComponents/button';

const Appointment = () => {
  const dispatch = useDispatch();
  const catalogState = useSelector((state) => state.catalog);

  useEffect(() => {
    dispatch(fetchBodySystems());
  }, []);

  return (
    <div className="h-screen overflow-y-auto p-4 bg-lightTheme-lightBlue">
      {/* <Button onClick={() => {}} type="button" disabled={false}>
        {false ? 'Finish appointment' : 'Start appointment'}
      </Button> */}
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
