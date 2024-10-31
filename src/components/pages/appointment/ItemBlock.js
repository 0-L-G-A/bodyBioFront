import CheckboxWithLabel from 'components/commonComponents/CheckboxWithLabel';
import { FaEdit, FaStickyNote, FaTrash } from 'react-icons/fa';

const ItemBlock = ({
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
}) => {
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
        </button>
      </div>
    </div>
  );
};

export default ItemBlock;
