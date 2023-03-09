import { SubmitHandler, useForm } from "react-hook-form";

type InputType = {
  username: string;
  email: string;
};

const basic6 = () => {
  /** いったんこれは呪文とおぼえてもいいよ！ */
  const {
    register,
    handleSubmit /* これでバリデーションをしている */,
    formState: { errors },
  } = useForm<InputType>();

  const sendProfile: SubmitHandler<InputType> = (data) => {
    console.log(data.username);
    console.log(data.email);
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
              required: "※名前は必須です。",
              maxLength: { value: 5, message: "※5文字以内でご記入ください" },
            })}
          />
          {errors.username && (
            <p className="ml-8 text-red-500">{errors.username.message}</p>
          )}
          <p className="ml-8 mt-5">メアド</p>
          <input
            type="text"
            className="block w-10/12 p-2 pl-2 text-sm mx-8 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-700 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
            placeholder="hokiu@icloud.com"
            {...register("email", {
              required: "※メアドは必須です。",
              pattern: {
                value:
                  /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
                message: "※メアドの形式が違います",
              },
            })}
          />
          {errors.email && (
            <p className="ml-8 text-red-500">{errors.email.message}</p>
          )}
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
