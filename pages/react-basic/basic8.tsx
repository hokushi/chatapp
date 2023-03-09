import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

/** 1. まずフォームで必要なものを定義する。(例: emailとpasswordなど) */
const InputSchema = z.object({
  name: z
    .string()
    .min(1, { message: "名前は必須です。" })
    .max(5, { message: "名前は5文字以内で入力してください。" }),
  email: z
    .string()
    .min(1, { message: "メールアドレスは必須です。" })
    .email({ message: "メールアドレスの形式が正しくありません。" }),
});

/** 2. TypeScriptの型を定義している。InputSchemaから型を想像してくれる */
type InputType = z.infer<typeof InputSchema>;

const ReactBasic7 = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InputType>({ resolver: zodResolver(InputSchema) });

  const loginWithEmailAndPassword: SubmitHandler<InputType> = (data) => {
    try {
      console.log("成功");
    } catch (e) {
      console.log("失敗");
    }
  };

  return (
    <>
      <div className="mt-20 px-4">
        <div className="text-3xl text-red-600">zodの使い方</div>
        <form
          className="space-y-2 mt-5"
          onSubmit={handleSubmit(loginWithEmailAndPassword)}
        >
          <label htmlFor="email">"名前"</label>
          <input
            className="block w-full mb-2 mt-1 text-xl text-gray-900 border-gray-300 bg-gray-50 focus:ring-teal focus:border-teal dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
            placeholder="ほくし"
            id="name"
            type="text"
            {...register("name")}
          />
          {errors.name && (
            <p className="text-red-400 p-2">{errors.name.message}</p>
          )}
          <label htmlFor="email">"メールアドレス"</label>
          <input
            className="block w-full mb-2 mt-1 text-xl text-gray-900 border-gray-300 bg-gray-50 focus:ring-teal focus:border-teal dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
            placeholder="pinoko@icloud.com"
            id="email"
            type="text"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-400 p-2">{errors.email.message}</p>
          )}
          <button>送信</button>
        </form>
      </div>
    </>
  );
};

export default ReactBasic7;
