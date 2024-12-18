import { useState } from 'react';
import {
  FaPlus,
  FaEdit,
  FaStickyNote,
  FaChevronDown,
  FaChevronUp,
  FaTrash,
} from 'react-icons/fa';
import ItemBlock from './ItemBlock';
import { CATALOG_TYPE } from 'components/types/CatalogType';

const CollapsibleBodySystemSubBlock = ({ item, id, type, bodySystem }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(
    bodySystem.nameKey === 'familyMedicine' && {
      id,
      type,
      bodySystem,
    },
  );
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div
      className={`border border-lightTheme-darkSeaWave rounded-md shadow-customSmRD p-2 mb-4 transition-max-h duration-500 ease-in-out ${isOpen ? 'max-h-[1000px] overflow-visible' : 'max-h-[60px] overflow-hidden'}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={toggleOpen}
            className="mr-3 p-1 rounded-full text-lightTheme-darkSeaWave hover:bg-lightTheme-lightBlue focus:outline-none"
          >
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          <h2 className="text-lg font-medium text-lightTheme-darkMainText">
            {item?.name}
          </h2>
        </div>
        <div className="flex space-x-4 text-lightTheme-darkSeaWave">
          <button
            className="p-2 rounded-full hover:bg-lightTheme-lightBlue focus:outline-none"
            title="Add item"
          >
            <FaPlus />
          </button>
          <button
            className="p-2 rounded-full hover:bg-lightTheme-lightBlue focus:outline-none"
            title="Edit"
          >
            <FaEdit />
          </button>
          <button
            className="p-2 rounded-full hover:bg-lightTheme-lightBlue focus:outline-none"
            title="Note"
          >
            <FaStickyNote />
          </button>
          <button
            className="p-2 rounded-full hover:bg-lightTheme-lightBlue focus:outline-none"
            title="Delete"
          >
            <FaTrash />
          </button>
        </div>
      </div>
      {Boolean(bodySystem.diagnozes?.length) &&
        type === CATALOG_TYPE.DIAGNOZE &&
        isOpen && (
          <>
            <h3 className="text-md font-semibold text-lightTheme-darkMainText">
              Діагнози:
            </h3>
            {bodySystem.diagnozes?.map(
              (diagnoze) =>
                Boolean(diagnoze.level === 2) && (
                  <ItemBlock
                    item={diagnoze}
                    id={diagnoze.id}
                    type={CATALOG_TYPE.DIAGNOZE}
                    bodySystem={bodySystem}
                  />
                ),
            )}
          </>
        )}
      {Boolean(bodySystem.laboratories?.length) &&
        type === CATALOG_TYPE.LAB &&
        isOpen && (
          <>
            <h3 className="text-md font-semibold text-lightTheme-darkMainText">
              Лабораторні дослідження:
            </h3>
            {bodySystem.laboratories?.map(
              (lab) =>
                Boolean(lab.level === 2) && (
                  <ItemBlock
                    item={lab}
                    id={lab.id}
                    type={CATALOG_TYPE.LAB}
                    bodySystem={bodySystem}
                  />
                ),
            )}
          </>
        )}
      {Boolean(bodySystem.findings?.length) &&
        type === CATALOG_TYPE.FINDING &&
        isOpen && (
          <>
            <h3 className="text-md font-semibold text-lightTheme-darkMainText">
              Симптоми:
            </h3>
            {bodySystem.findings?.map(
              (fin) =>
                Boolean(fin.level === 2) && (
                  <ItemBlock
                    item={fin}
                    id={fin.id}
                    type={CATALOG_TYPE.FINDING}
                    bodySystem={bodySystem}
                  />
                ),
            )}
          </>
        )}
    </div>
  );
};

export default CollapsibleBodySystemSubBlock;
