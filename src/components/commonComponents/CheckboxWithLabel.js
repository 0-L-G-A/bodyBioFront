const CheckboxWithLabel = ({ id, label, checked, onChange }) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="mr-2 cursor-pointer"
      />
      <label
        htmlFor={id}
        className="cursor-pointer text-lightTheme-darkSecondaryText"
      >
        {label}
      </label>
    </div>
  );
};

export default CheckboxWithLabel;
