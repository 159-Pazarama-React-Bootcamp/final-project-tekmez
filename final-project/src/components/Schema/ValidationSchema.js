import * as Yup from "yup";

const validationSchema = Yup.object({
  firstName: Yup.string().required("Do not empty"),
  lastName: Yup.string().required("Do not empty"),
  age: Yup.number().required("Do not empty").positive().integer(),
  tc: Yup.number().required("Do not empty").positive().integer(),
  reason: Yup.string().required("Do not empty"),
  address: Yup.string().required("Do not empty"),
});

export default validationSchema;
