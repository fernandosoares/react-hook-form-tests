import { FormControl, TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { ICustonInput } from "./types";

export const CustonInput = (props: ICustonInput) => {
  const { id, label } = props;

  const {
    register,
    formState: { errors },
    getFieldState,
  } = useFormContext();

  const errorMessage = getFieldState(id).error?.message || errors[id]?.message;

  return (
    <FormControl>
      <TextField
        fullWidth
        variant="outlined"
        label={label}
        id={id}
        {...register(id, {
          required: `Field ${label.toUpperCase()} is required`,
        })}
        error={!!errorMessage}
        helperText={errorMessage}
      />
    </FormControl>
  );
};
