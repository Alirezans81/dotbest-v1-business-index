import { Form } from "@/lib/types";
import { submitForm } from "./apis";

interface UseSubmitFormProps {
  data: Form;
  onSuccess?: () => void;
  onError?: () => void;
}
export const useSubmitForm = () => {
  const submit = async ({ data, onSuccess, onError }: UseSubmitFormProps) => {
    try {
      const response = await submitForm(data);
      onSuccess?.();
      return response.data;
    } catch (error) {
      console.error("Error submitting form:", error);
      onError?.();
      throw error;
    }
  };

  return { submit };
};
