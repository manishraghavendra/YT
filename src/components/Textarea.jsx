function Textarea({ value, onChange, disabled, placeholder, onFocus }) {
  return (
    <textarea
      className="w-full resize-none p-3 border-2 shadow-custom my-2 rounded-e-lg rounded-b-lg max-h-fit text-mb outline-none font-normal bg-gray-950 text-blue-100"
      maxLength={1001}
      value={value}
      onChange={onChange}
      disabled={disabled}
      placeholder={placeholder}
      onFocus={onFocus}
    ></textarea>
  );
}

export default Textarea;
