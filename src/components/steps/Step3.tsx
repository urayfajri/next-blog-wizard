import TextAreaField from "@/components/fields/TextAreaField";
import { useFormCtx } from "@/context/BlogFormContext";

export default function Step3() {
  const {
    state,
    set,
    state: { errors },
  } = useFormCtx();
  return (
    <div>
      <TextAreaField
        label="Blog Content"
        name="content"
        required
        value={state.content}
        onChange={set("content")}
        error={errors.content}
      />
    </div>
  );
}
