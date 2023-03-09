import { UseFormRegister } from "react-hook-form";

type Props = {
  labelName: string;
  placeholder: string;
  register: UseFormRegister<any>;
  name: string;
  type: string;
  autoComplete: string;
  error: string | undefined;
};

const ZodBasicInput = ({
  labelName,
  placeholder,
  register,
  name,
  type,
  autoComplete,
  error,
}: Props) => {
  return (
    <>
      <label htmlFor={name}>{labelName}</label>
      <input
        className="block w-full mb-2 mt-1 text-xl text-gray-900 border-gray-300 bg-gray-50 focus:ring-teal focus:border-teal dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500"
        placeholder={placeholder}
        id={name}
        type={type}
        autoComplete={autoComplete}
        {...register(name, { valueAsNumber: type === "number" })}
      />
      {error && <p className="text-red-400 p-2">{error}</p>}
    </>
  );
};
export default ZodBasicInput;
