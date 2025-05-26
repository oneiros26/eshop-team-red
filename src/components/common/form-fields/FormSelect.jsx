import "./contactForm.css";

function FormSelect({ label, name, id, value, onChange, required, options }) {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={name} className="text-md text-slate-800 font-medium mb-1">
        {label}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="bg-gray-50 border border-gray-300 text-slate-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5"
      >
        <option value="">--Please select an option--</option>
        {options.map((option) => (
          <option key={option.id} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FormSelect;
