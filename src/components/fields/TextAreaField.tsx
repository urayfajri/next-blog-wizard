type Props = {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  error?: string;
  required?: boolean;
};

export default function TextAreaField({
  label,
  name,
  value,
  onChange,
  placeholder,
  error,
  required,
}: Props) {
  return (
    <div className="mb-3">
      <label className="label" htmlFor={name}>
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <textarea
        id={name}
        className={`textarea ${
          error ? "border-red-600 focus:ring-red-600" : ""
        }`}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <div className="text-sm text-red-600 mt-1">{error}</div>}
    </div>
  );
}
