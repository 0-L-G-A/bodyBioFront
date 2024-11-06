import React from 'react';
import { FaFileAlt, FaImage } from 'react-icons/fa';

const AppointmentItem = ({ diagnosis, catalogItem }) => {
  const { recordType, linkedFiles, linkedImages, notes } = diagnosis;

  return (
    <div className="border border-lightTheme-darkSeaWave rounded-md p-4 mb-4">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-lightTheme-darkMainText text-md font-bold">
            {recordType}
          </p>
          <p className="text-lightTheme-darkSecondaryText text-sm">
            <strong>Parent ID:</strong> {catalogItem?.nameKey}
          </p>
        </div>

        <div className="flex space-x-4">
          {linkedFiles?.map((fileUrl, index) => (
            <a
              key={index}
              href={fileUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFileAlt
                className="text-lightTheme-darkSeaWave hover:text-lightTheme-brightLightBlue"
                title="Переглянути файл"
              />
            </a>
          ))}
          {linkedImages?.map((imageUrl, index) => (
            <a
              key={index}
              href={imageUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaImage
                className="text-lightTheme-darkSeaWave hover:text-lightTheme-brightLightBlue"
                title="Переглянути зображення"
              />
            </a>
          ))}
        </div>
      </div>

      {notes && (
        <div className="mt-2">
          <p className="text-lightTheme-darkSecondaryText text-sm">
            <strong>Нотатка:</strong> {notes}
          </p>
        </div>
      )}
    </div>
  );
};

export default AppointmentItem;
