type Option = { value: string; label: string };

type Props = {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  options: Option[];
  placeholder?: string;
  error?: string;
};

export default function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  placeholder,
  error,
}: Props) {
  return (
    <div className="mb-3">
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <select
        id={name}
        className="input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="" disabled>
          {placeholder ?? "Select an option"}
        </option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {error && <div className="text-sm text-red-600 mt-1">{error}</div>}
    </div>
  );
}
