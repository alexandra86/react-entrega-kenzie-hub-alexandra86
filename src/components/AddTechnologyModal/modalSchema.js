import * as yup from "yup";

export const modalSchema = yup.object().shape({
  title: yup.string().required("Campo obrigatório!"),

  status: yup.string().required("Campo obrigatório!"),
});
