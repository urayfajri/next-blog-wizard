type Props = {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  error?: string;
};

export default function InputField({
  label,
  name,
  value,
  onChange,
  placeholder,
  error,
}: Props) {
  return (
    <div className="mb-3">
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        className="input"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <div className="text-sm text-red-600 mt-1">{error}</div>}
    </div>
  );
}
