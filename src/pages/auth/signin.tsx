import LoadingOverlay from "@/common/modules/components/LoadingOverlay/LoadingOverlay";
import { NextPage } from "next";
import { useState } from "react";

const SignIn: NextPage = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState("");

  const signIn = async () => {
    setIsLoading(true);
    console.log(email, password);
    setEmail("");
    setPassword("");
    setIsLoading(false);
  };

  return (
    <div className="flex h-full min-h-full w-full items-center justify-center bg-gray-800 text-white">
      <LoadingOverlay isPending={isLoading} />
      <div className="flex min-h-[300px] flex-col gap-10 rounded-lg bg-gray-600 p-20 shadow-md">
        <div className="flex flex-col">
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
              className="block w-full border-b  bg-transparent  p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="password"
              required
              onChange={(parametr) => {
                setPassword(parametr.target.value);
              }}
            />
          </div>
        </div>

        <button
          onClick={async () => {
            await signIn();
            console.log("sign in");
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignIn;
