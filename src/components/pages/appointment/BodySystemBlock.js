import { useState } from 'react';
import {
  FaPlus,
  // FaEdit,
  FaStickyNote,
  FaChevronDown,
  FaChevronUp,
} from 'react-icons/fa';
// import { MdCreateNewFolder } from 'react-icons/md';
import CollapsibleBodySystemSubBlock from './BodySystemSubBlock';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBodySystem } from 'store/actions/catalog';
import { CATALOG_TYPE } from 'components/types/CatalogType';
import { createPortal } from 'react-dom';
import Modal from './addElementModal';

const CollapsibleBodySystemBlock = ({ nameKey }) => {
  const catalogState = useSelector((state) => state.catalog);
  const dispatch = useDispatch();
  const bodySystem = catalogState[nameKey];

  const {
    id,
    name,
    doctorsSpecializations = [],
    diagnozes,
    findings,
    laboratories,
  } = bodySystem;

  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const toggleOpen = () => {
    dispatch(fetchBodySystem(id));
    setIsOpen(!isOpen);
  };

  // const addAppointment = () => {}

  return (
    <div
      className={`border border-lightTheme-darkSeaWave rounded-md shadow-custom p-4 mb-4 transition-max-h duration-500 ease-in-out ${isOpen ? 'max-h-[1000px] overflow-visible' : 'max-h-[60px] overflow-hidden'}`}
    >
      <div className="flex items-center justify-between">
        {isModalOpen &&
          createPortal(
            <Modal
              isOpen={isModalOpen}
              onClose={toggleModal}
              bodySystem={bodySystem}
            />,
            document.getElementById('modal-root'),
          )}
        <div className="flex items-center">
          <button
            onClick={toggleOpen}
            className="mr-3 p-1 rounded-full text-lightTheme-darkSeaWave hover:bg-lightTheme-lightBlue focus:outline-none"
          >
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          <h2 className="text-lg font-medium text-lightTheme-darkMainText">
            {name}
          </h2>
        </div>
        <div className="flex space-x-4 text-lightTheme-darkSeaWave">
          <button
            onClick={toggleModal}
            className="p-2 rounded-full hover:bg-lightTheme-lightBlue focus:outline-none"
            title="Add item"
          >
            <FaPlus />
          </button>
          {/* <button
            onClick={addAppointment}
            className="p-2 rounded-full hover:bg-lightTheme-lightBlue focus:outline-none"
            title="Add appointment"
          >
            <MdCreateNewFolder />
          </button> */}
          {/* <button
            className="p-2 rounded-full hover:bg-lightTheme-lightBlue focus:outline-none"
            title="Edit"
          >
            <FaEdit />
          </button> */}
          <button
            className="p-2 rounded-full hover:bg-lightTheme-lightBlue focus:outline-none"
            title="Note"
          >
            <FaStickyNote />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="mt-4">
          <h3 className="text-md font-semibold text-lightTheme-darkMainText">
            Лікарі:
          </h3>
          {doctorsSpecializations.length > 0 ? (
            <ul className="list-disc ml-6 text-lightTheme-darkSecondaryText">
              {doctorsSpecializations.map((doctor) => (
                <li key={doctor.id}>{doctor.name}</li>
              ))}
            </ul>
          ) : (
            <p className="text-lightTheme-darkSecondaryText">Немає лікарів</p>
          )}
          {
            <CollapsibleBodySystemSubBlock
              items={diagnozes}
              type={CATALOG_TYPE.DIAGNOZE}
              bodySystem={bodySystem}
            />
          }
          {
            <CollapsibleBodySystemSubBlock
              items={laboratories}
              type={CATALOG_TYPE.LAB}
              bodySystem={bodySystem}
            />
          }
          {
            <CollapsibleBodySystemSubBlock
              items={findings}
              type={CATALOG_TYPE.FINDING}
              bodySystem={bodySystem}
            />
          }
        </div>
      )}
    </div>
  );
};

export default CollapsibleBodySystemBlock;
