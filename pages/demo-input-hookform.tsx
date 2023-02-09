import React from "react";
import InputHookform from "../components/input-hookform";
import { SubmitHandler, useForm } from "react-hook-form";

const DemoInputHookform = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm<InputType>();

  type InputType = {
    username: string;
    age: number;
  };

  const sendProfile: SubmitHandler<InputType> = (data) => {
    console.log(data.username);
    console.log(data.age);
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(sendProfile)} className="mt-5">
        <InputHookform
          entries="名前"
          placeholder="ほくし"
          //reigster関数をpropsで渡す
          register={register}
          name="username"
          errors={errors.username}
          RegisterOptions={{
            maxLength: { value: 5, message: "※5文字以内でご記入ください" },
            required: "※名前は必須です。",
          }}
        />
        <InputHookform
          entries="年齢"
          placeholder="20"
          register={register}
          name="age"
          errors={errors.age}
          RegisterOptions={{
            required: "※年齢は必須です。",
            pattern: {
              value: /^[0-9]{2}$/,
              message: "※正確な年齢をご記入ください",
            },
          }}
        />
        <div className="grid grid-cols-11">
          <button
            type="submit"
            className="bg-gray-500 hover:bg-gray-400 text-white font-bold py-2 px-4 mt-8 border-b-4 border-gray-700 hover:border-gray-500 rounded col-start-3 col-end-10"
          >
            送信
          </button>
        </div>
      </form>
    </div>
  );
};

export default DemoInputHookform;
