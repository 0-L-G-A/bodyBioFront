import React, { useState } from 'react';

const ArrayInputWithAddButton = ({
  label,
  arrayValues,
  setArrayValues,
  placeholder,
  isEditing,
  validate,
  errorMessage,
}) => {
  const handleInputChange = (index, value) => {
    const newValues = [...arrayValues];
    newValues[index] = value;
    setArrayValues(newValues);
  };

  const handleAddInput = () => {
    setArrayValues([...arrayValues, '']);
  };

  return (
    <div className="relative mb-2 flex flex-row items-start">
      {label && (
        <label
          className="w-1/3 block text-lightTheme-darkSecondaryText text-md font-large mb-2"
          style={{ minWidth: '120px' }}
          htmlFor={label}
        >
          {label}
        </label>
      )}
      <div className="flex ml-10 flex-col items-start">
        {arrayValues.length === 0 && (
          <input
            disabled={!isEditing}
            type="text"
            value=""
            onChange={(e) => handleInputChange(0, e.target.value)}
            placeholder={placeholder}
            className="min-w-[300px] mb-2 px-4 py-2 border-2 rounded-md text-lightTheme-darkSecondaryText placeholder-lightTheme-darkSecondaryText focus:outline-none border-lightTheme-darkSeaWave opacity-25"
          />
        )}

        {arrayValues.map((value, index) => (
          <div key={index} className="flex items-center mb-2 w-full">
            <input
              type="text"
              value={value}
              onChange={(e) => handleInputChange(index, e.target.value)}
              placeholder={placeholder}
              className={`min-w-[300px] px-4 py-2 border-2 rounded-md placeholder-opacity-50 focus:outline-none ${
                validate && !validate(value)
                  ? 'border-lightTheme-error'
                  : 'border-lightTheme-darkSeaWave'
              } text-lightTheme-darkSecondaryText placeholder-lightTheme-darkSecondaryText`}
              disabled={!isEditing}
            />
            {isEditing && index === arrayValues.length - 1 && (
              <div
                className="ml-3 w-7 h-6 rounded-full bg-lightTheme-darkSeaWave flex items-center justify-center cursor-pointer opacity-75"
                onClick={handleAddInput}
                style={{ pointerEvents: isEditing ? 'auto' : 'none' }}
              >
                <span className="text-white font-bold">+</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArrayInputWithAddButton;
