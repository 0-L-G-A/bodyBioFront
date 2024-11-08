import { useState } from 'react';

const InputWithValidation = ({
  label,
  placeholder,
  value,
  onChange,
  validate,
  errorMessage,
  tooltipText,
  tooltipPosition = 'top', // top or bottom
}) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const isError = validate && !validate(value);

  return (
    <div className="relative mb-2 flex flex-row items-center">
      {label && (
        <label
          className="w-1/3 block text-lightTheme-darkSecondaryText text-md font-large mb-2"
          style={{ minWidth: '120px' }}
          htmlFor={label}
        >
          {label}
        </label>
      )}
      <div className="w-2/4 relative mb-2 flex flex-col">
        {isError && (
          <p className="text-sm text-lightTheme-error mb-1 ml-8">
            {errorMessage}
          </p>
        )}
        <div className="flex items-center">
          <div
            className="relative mr-3 flex items-center justify-center w-7 h-6 border-2 border-lightTheme-error rounded-full cursor-pointer"
            onMouseEnter={() => setTooltipVisible(true)}
            onMouseLeave={() => setTooltipVisible(false)}
          >
            <span className="text-lightTheme-error">?</span>
            {isTooltipVisible && (
              <div
                className={`absolute w-48 p-2 bg-lightTheme-brightLightBlue border border-lightTheme-darkSeaWave rounded shadow-md z-50 ${
                  tooltipPosition === 'top'
                    ? 'bottom-full mb-2'
                    : 'top-full mt-2'
                }`}
                style={{ zIndex: 100 }}
              >
                <p className="text-lightTheme-darkSecondaryText text-xs">
                  {tooltipText}
                </p>
              </div>
            )}
          </div>
          <input
            type="text"
            value={value}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder={placeholder}
            className={`min-w-[300px] px-4 py-2 border-2 rounded-md placeholder-opacity-50 focus:outline-none ${
              isError
                ? isFocused
                  ? 'border-lightTheme-error'
                  : 'border-lightTheme-error opacity-25'
                : isFocused
                  ? 'border-lightTheme-darkSeaWave'
                  : 'border-lightTheme-darkSeaWave opacity-25'
            } text-lightTheme-darkSecondaryText placeholder-lightTheme-darkSecondaryText`}
          />
        </div>
      </div>
    </div>
  );
};

export default InputWithValidation;
