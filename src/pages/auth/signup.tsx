import { NextPage } from "next";
import { useState } from "react";

const SignUp: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const signUp = async () => {
    console.log(email, password, surname, name, passwordCheck);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-full min-h-full w-full items-center justify-center bg-gray-800 text-white">
      <div className="flex min-h-[300px] flex-col gap-10 rounded-lg bg-gray-600 p-20 shadow-md">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className="relative">
              <input
                type="text"
                id="default-search"
                onBlur={(parametr) => {
                  setName(parametr.target.value);
                }}
                className="block w-full border-b bg-transparent  p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Jméno"
                required
              />
            </div>
            <div className="relative">
              <input
                type="text"
                id="default-search"
                onBlur={(parametr) => {
                  setSurname(parametr.target.value);
                }}
                className="block w-full border-b bg-transparent  p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Příjmení"
                required
              />
            </div>
          </div>
          <div className="relative">
            <input
              type="text"
              id="default-search"
              onBlur={(parametr) => {
                setEmail(parametr.target.value);
              }}
              className="block w-full border-b bg-transparent  p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="e-mail"
              required
            />
          </div>
          <div className="relative">
            <input
              type="password"
              id="default-search"
              className="block w-full border-b  bg-transparent  p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="heslo"
              required
              onBlur={(parametr) => {
                setPassword(parametr.target.value);
              }}
            />
          </div>
          <div className="relative">
            <input
              type="password"
              id="default-search"
              className="block w-full border-b  bg-transparent  p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Kontrola hesla"
              required
              onBlur={(parametr) => {
                setPasswordCheck(parametr.target.value);
              }}
            />
          </div>
        </div>

        <button
          onClick={async () => {
            await signUp();
            console.log("sign in");
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignUp;
