import axios from "axios";

/* axiosを使ってみよう */
const basic2 = () => {
  const axiosCheck = () => {
    const URL = "https://jsonplaceholder.typicode.com/todos";
    axios
      .get(URL)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <button className="mt-5" onClick={axiosCheck}>
        axios通信
      </button>
    </>
  );
};

export default basic2;
