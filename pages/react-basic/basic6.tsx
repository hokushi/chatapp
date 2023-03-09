import React from "react";
import InputHookform from "../../components/input-hookform";
import { SubmitHandler, useForm } from "react-hook-form";

const basic6 = () => {
  const {
    register,
    handleSubmit /* これでバリデーションをしている */,
    formState: { errors },
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
        <div>
          <h1 className="ml-8 text-red-500 text-2xl">基本的な使い方</h1>
          <p className="ml-8 mt-5">名前</p>
          <input
            type="text"
            className="block w-10/12 p-2 pl-2 text-sm mx-8 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-700 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
            placeholder="ほくし"
            {...register("username", {
              maxLength: { value: 5, message: "※5文字以内でご記入ください" },
              required: "※名前は必須です。",
            })}
          />
          {errors.username && (
            <p className="ml-8 text-red-500">{errors.username.message}</p>
          )}
          <h1 className="ml-8 mt-20 text-red-500 text-2xl">
            コンポーネントで使う
          </h1>
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
        </div>
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

export default basic6;
