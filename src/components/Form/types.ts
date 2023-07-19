import { ReactNode } from "react";

export interface IForm {
  name: {
    first: string;
    last: string;
  };
  cheque: {
    superior: {
      banco: string;
    };
  };
}

export interface IFormProviderWrapper {
  children: ReactNode;
}
