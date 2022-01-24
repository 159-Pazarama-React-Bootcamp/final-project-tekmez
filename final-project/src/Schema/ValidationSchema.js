import * as Yup from "yup";

const validationSchema = Yup.object({
  firstName: Yup.string().required("Can not empty"),
  lastName: Yup.string().required("Can not empty"),
  age: Yup.number().required("Can not empty").positive().integer(),
  tc: Yup.number().required("Can not empty").positive().integer(),
  reason: Yup.string().required("Can not empty"),
  address: Yup.string().required("Can not empty"),
});

export default validationSchema;
