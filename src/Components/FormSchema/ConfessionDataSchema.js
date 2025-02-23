import { object, string } from "yup";

export const formSchema = object({
  name: string().required("Please Enter your Name"),
  text: string()
    .required("Please Enter your Confession")
    .min(10, "Please Enter minimum 10 word"),
});
