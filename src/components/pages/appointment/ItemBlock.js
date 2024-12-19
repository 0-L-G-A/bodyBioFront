import CheckboxWithLabel from 'components/commonComponents/CheckboxWithLabel';
import { CATALOG_TYPE } from 'components/types/CatalogType';
import {
  FaEdit,
  FaStickyNote,
  FaTrash,
  FaFileContract,
  FaRegFileImage,
} from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addUsersAppointment } from 'store/actions/medApp';

const ItemBlock = ({
  item,
  type,
  bodySystem,
  id,
  name,
  checked,
  onEdit,
  onNote,
  onDelete,
}) => {
  const dispatch = useDispatch();
  const currentAppointment = useSelector(
    (state) => state.catalog.currentAppointment,
  );
  const currentUser = useSelector((state) => state.auth.userData);

  const onChange = () => {
    const usedBodySystems = currentAppointment?.usedBodySystems
      ? [...currentAppointment.usedBodySystems]
      : [];
    const usersFindings = currentAppointment?.usersFindings
      ? [...currentAppointment.usersFindings]
      : [];
    const usersDiagnozes = currentAppointment?.usersDiagnozes
      ? [...currentAppointment.usersDiagnozes]
      : [];
    const usersLabs = currentAppointment?.usersLabs
      ? [...currentAppointment.usersLabs]
      : [];

    if (type === CATALOG_TYPE.FINDING) {
      usersFindings.push(item.id);
    } else if (type === CATALOG_TYPE.DIAGNOZE) {
      usersDiagnozes.push(item.id);
    } else if (type === CATALOG_TYPE.LAB) {
      usersLabs.push(item.id);
    }

    const payload = {
      user: currentUser.id,
      author: currentUser.id,
      usedBodySystems: bodySystem?.id
        ? [...usedBodySystems, bodySystem.id]
        : usedBodySystems,
      usersFindings: [...new Set(usersFindings)],
      usersDiagnozes: [...new Set(usersDiagnozes)],
      usersLabs: [...new Set(usersLabs)],
    };
    console.log('ItemBlock onChange clearPayload', payload);
    // dispatch(addUsersAppointment(payload));
  };

  console.log('ItemBlock', {
    item,
    type,
    bodySystem,
    id,
    name,
    checked,
    onChange,
    onEdit,
    onNote,
    onDelete,
    currentAppointment,
  });

  return (
    <div className="border border-lightTheme-darkSeaWave px-2 rounded-md flex items-center justify-between mb-2">
      {/* Чекбокс з міткою */}
      <CheckboxWithLabel
        id={id}
        label={item?.name}
        checked={checked}
        onChange={onChange}
      />

      {/* Екшини */}
      <div className="flex space-x-3 text-lightTheme-darkSeaWave">
        <button
          onClick={onNote}
          className="p-2 rounded-full hover:bg-lightTheme-lightBlue focus:outline-none"
          title="Note"
        >
          <FaStickyNote />
        </button>
        <button
          onClick={() => {}}
          className="p-2 rounded-full hover:bg-lightTheme-lightBlue focus:outline-none"
          title="File"
        >
          <FaFileContract />
        </button>
        <button
          onClick={() => {}}
          className="p-2 rounded-full hover:bg-lightTheme-lightBlue focus:outline-none"
          title="Image"
        >
          <FaRegFileImage />
        </button>
        {/* <button
          onClick={onEdit}
          className="p-2 rounded-full hover:bg-lightTheme-lightBlue focus:outline-none"
          title="Edit"
        >
          <FaEdit />
        </button>
        <button
          onClick={onDelete}
          className="p-2 rounded-full hover:bg-lightTheme-lightBlue focus:outline-none"
          title="Delete"
        >
          <FaTrash />
        </button> */}
      </div>
    </div>
  );
};

export default ItemBlock;
