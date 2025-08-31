import TextAreaField from "@/components/fields/TextAreaField";
import SelectField from "@/components/fields/SelectField";
import { CATEGORIES } from "@/lib/utils";
import { useFormCtx } from "@/context/BlogFormContext";

export default function Step2() {
  const {
    state,
    set,
    state: { errors },
  } = useFormCtx();
  return (
    <div>
      <TextAreaField
        label="Blog Summary"
        name="summary"
        required
        value={state.summary}
        onChange={set("summary")}
        error={errors.summary}
      />
      <SelectField
        label="Category"
        name="category"
        required
        value={state.category}
        onChange={set("category")}
        options={CATEGORIES}
        error={errors.category}
      />
    </div>
  );
}
