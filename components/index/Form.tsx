"use client";

import { useSubmitForm } from "@/apis/Form/hooks";
import { type Form } from "@/lib/types";
import { Field, Formik } from "formik";

export default function Form() {
  const { submit } = useSubmitForm();

  const vlidateSalonName = (value: string) => {
    let error;

    if (!value) error = "نام سالن خود را وارد کنید!";

    return error;
  };
  const vlidateAdress = (value: string) => {
    let error;

    if (!value) error = "آدرس سالن خود را وارد کنید!";

    return error;
  };
  const vlidatePhone = (value: string) => {
    let error;

    const regex = new RegExp("^(\\+98|0)?9\\d{9}$");

    if (!value) error = "شماره تماس خود را وارد کنید!";
    else if (!regex.test(value)) error = "شماره تماس خود را صحیح وارد کنید!";

    return error;
  };

  return (
    <div className="w-full px-8 py-14 flex justify-center items-center">
      <Formik
        initialValues={{
          salon_name: "",
          address: "",
          phone_number: "",
          preferences: "",
        }}
        onSubmit={(values) => {
          const data: Form = {
            phone: values.phone_number,
            address: values.address,
            salon_name: values.salon_name,
            description: "",
            message: values.preferences,
            is_active: true,
          };

          submit({
            data,
            onSuccess() {
              window.alert(
                "اطلاعات شما با موفقیت ثبت شد. با شما در تماس خواهیم بود!"
              );
            },
            onError() {
              window.alert(
                "متاسفانه مشکلی پیش آمده است. لطفا بعدا امتحان کنید!"
              );
            },
          });
        }}
      >
        {({ errors, handleSubmit }) => (
          <form
            className="flex flex-col gap-8 items-center mt-3"
            onSubmit={handleSubmit}
          >
            <span className="text-3xl">اطلاعات خود را برای ما بفرستید</span>
            <div className="flex flex-col gap-2">
              <Field
                className={`w-80 pt-3 pb-2 px-4 bg-black rounded-xl text-lg placeholder:text-gray_002 text-white`}
                placeholder="نام سالن*"
                name="salon_name"
                validate={vlidateSalonName}
              />
              <Field
                className={`w-80 pt-3 pb-2 px-4 bg-black rounded-xl text-lg placeholder:text-gray_002 text-white`}
                placeholder="آدرس سالن*"
                name="address"
                validate={vlidateAdress}
              />
              <Field
                className={`w-80 pt-3 pb-2 px-4 bg-black rounded-xl text-lg placeholder:text-gray_002 text-white`}
                placeholder="شماره تماس*"
                name="phone_number"
                validate={vlidatePhone}
              />
              <Field
                as="textarea"
                className="w-80 h-44 pt-3 pb-2 px-4 bg-black rounded-xl text-lg placeholder:text-gray_002 text-white"
                placeholder="موضوعات مهم خود را مطرح کنید..."
                name="preferences"
              />
              {(errors.salon_name || errors.address || errors.phone_number) && (
                <span className="w-full text-error bg-black rounded-xl text-lg pt-3 pb-2 px-4">
                  {errors.salon_name || errors.address || errors.phone_number}
                </span>
              )}
            </div>
            <button
              type="submit"
              className="bg-black rounded-full text-xl py-2 w-full transition-all duration-200 hover:bg-primary px-6 border border-gray_004 hover:!border-primary hover:text-white"
            >
              تایید
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
