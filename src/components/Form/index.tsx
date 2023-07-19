/* eslint-disable @typescript-eslint/no-misused-promises */
import { Box, Button, Grid } from "@mui/material";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { CustonInput } from "./CustomInput";
import { IForm, IFormProviderWrapper } from "./types";
import { initialValues } from "./initialValues";
import { useState } from "react";

export const Form = () => {
  const [isBankFields] = useState<boolean>(true);

  const methods = useForm<IForm>({
    defaultValues: initialValues,
    mode: "onBlur",
    reValidateMode: "onBlur",
  });
  const onSubmit: SubmitHandler<IForm> = (data) => console.log(data);

  const FormProviderWrapper = ({ children }: IFormProviderWrapper) => {
    return <FormProvider {...methods}>{children}</FormProvider>;
  };

  return (
    <FormProviderWrapper>
      <Box component="form" onSubmit={methods.handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CustonInput id="name.first" label="First name" />
            <CustonInput id="name.last" label="Last name" />
            {isBankFields ? (
              <CustonInput id="cheque.superior.banco" label="Bank" />
            ) : null}
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" fullWidth>
              Send Information
            </Button>
          </Grid>
        </Grid>
      </Box>
    </FormProviderWrapper>
  );
};
