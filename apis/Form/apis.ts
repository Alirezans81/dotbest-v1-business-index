import axios from "axios";
import { apiRoutes } from "../routes";
import { Form } from "@/lib/types";

const api = apiRoutes();

export const submitForm = (data: Form) => {
  const formData = new FormData();

  formData.append("phone", data.phone);
  formData.append("salon_name", data.salon_name);
  formData.append("address", data.address);
  formData.append("description", data.description);
  formData.append("message", data.message);

  return axios.post(api["form"], formData);
};
