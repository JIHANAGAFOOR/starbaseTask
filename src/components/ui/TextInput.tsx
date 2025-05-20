import type { TextInputProps } from "../../types/textInput";

const TextInput = ({
  name,
  type,
  value,
  onChange,
  placeholder,
  label,
}: TextInputProps) => {
  return (
    <div className="m-4">
      {label && (
        <label htmlFor={name} className="sr-only">
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        id={name}
        className="w-full border-1 border-blue-900 rounded h-12 p-3 "
        placeholder={placeholder}
        value={value}
        required
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
