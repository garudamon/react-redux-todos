import { forwardRef } from "react";

type TextInputProps = {
  label?: string;
  error?: string | null;
};

const TextInput = forwardRef((props: TextInputProps, ref) => {
  const { label, error, ...rest } = props;
  return (
    <div>
      {label && (
        <label
          htmlFor={label}
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          {label}
        </label>
      )}
      <input
        type="text"
        id={label}
        className={`rounded px-3 py-2 border-gray-400 border w-full focus:outline-none ${
          error ? "!border-red-500" : ""
        }`}
        ref={ref}
        placeholder={`Type ${label ? label.toLowerCase() : ""} here...`}
        {...rest}
      />
    </div>
  );
});

export default TextInput;
