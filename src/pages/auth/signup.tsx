import { NextPage } from "next";
import { useState } from "react";
import { api } from "@/utils/api";

import LoadingOverlay from "@/common/modules/components/LoadingOverlay/LoadingOverlay";

const SignUp: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const { mutateAsync, isPending } = api.user.register.useMutation();

  const signUp = async () => {
    console.log(email, password, surname, name, passwordCheck);
    if (password !== passwordCheck) {
      alert("Hesla se neshodují");
      return;
    }

    const response = await mutateAsync({
      email: email,
      password: password,
      name: name,
      surname: surname,
    });

    if (!response) {
      alert("User not created");
      return;
    }
    console.log(response);
    setName("");
    setSurname("");
    setPasswordCheck("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-full min-h-full w-full items-center justify-center bg-gray-800 text-white">
      <LoadingOverlay isPending={isPending} />
      <div className="flex min-h-[300px] flex-col gap-10 rounded-lg bg-gray-600 p-20 shadow-md">
        <div className="flex flex-col">
          <div className="flex flex-row">
            <div className="relative">
              <input
                type="text"
                id="default-search"
                value={name}
                onChange={(parametr) => {
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
                value={surname}
                onChange={(parametr) => {
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
              value={email}
              onChange={(parametr) => {
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
              value={password}
              className="block w-full border-b bg-transparent p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="heslo"
              required
              onChange={(parametr) => {
                setPassword(parametr.target.value);
              }}
            />
          </div>
          <div className="relative">
            <input
              type="password"
              id="default-search"
              value={passwordCheck}
              className="block w-full border-b  bg-transparent  p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Kontrola hesla"
              required
              onChange={(parametr) => {
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
