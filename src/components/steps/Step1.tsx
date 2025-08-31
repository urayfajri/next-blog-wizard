import InputField from "@/components/fields/InputField";
import { useFormCtx } from "@/context/BlogFormContext";

export default function Step1() {
  const {
    state,
    set,
    state: { errors },
  } = useFormCtx();

  return (
    <div>
      <InputField
        label="Blog Title"
        name="title"
        required
        value={state.title}
        onChange={set("title")}
        error={errors.title}
      />
      <InputField
        label="Author Name"
        name="author"
        required
        value={state.author}
        onChange={set("author")}
        error={errors.author}
      />
    </div>
  );
}
