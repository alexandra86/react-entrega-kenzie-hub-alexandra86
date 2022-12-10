import * as yup from "yup";

export const modalEditSchema = yup.object().shape({
  title: yup.string().required("Campo obrigatório!"),

  status: yup.string().required("Campo obrigatório!"),
});
