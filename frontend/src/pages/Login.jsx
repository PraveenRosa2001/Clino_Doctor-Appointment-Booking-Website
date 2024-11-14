import React, { useState } from "react";

const Login = () => {
  const [state, setSate] = useState("Sign Up");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <form className="min-h-[80vh] flex items-center">
      <div
        className="flex flex-col gap-4 m-auto items-start p-8 min-w-[340px] min-h-[420px] sm:min-w-[400px] sm:min-h-[425px] border rounded-xl text-zinc-900 text-base shadow-2xl border-zinc-400">
        <p className="text-2xl font-extrabold ">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </p>
        <p className="font-medium text-gray-600">
          Please {state === "Sign Up" ? "Sign Up" : "Login"} to book appointment
        </p>
        {state === "Sign Up" && (
          <div className="w-full">
            <p className="font-bold">Full Name</p>
            <input
              className="border border-zinc-500 rounded w-full p-2 mt-1"
              type="text"
              onChange={(e) => setName(e.target.name)}
              value={name}
              required
            />
          </div>
        )}

        <div className="w-full">
          <p className="font-bold">Email</p>
          <input
            className="border border-zinc-500 rounded w-full p-2 mt-1"
            type="text"
            onChange={(e) => setEmail(e.target.email)}
            value={email}
            required
          />
        </div>

        <div className="w-full">
          <p className="font-bold">Password</p>
          <input
            className="border border-zinc-500 rounded w-full p-2 mt-1"
            type="text"
            onChange={(e) => setPassword(e.target.password)}
            value={password}
            required
          />
        </div>

        <button className="bg-primary text-white w-full py-2 rounded-md text-base font-bold ">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>
        {state === "Sign Up" ? (
          <p className="font-medium text-gray-600 text-base">
            Already have an account?{" "}
            <span
              onClick={() => setSate("Login")}
              className="text-primary underline cursor-pointer font-bold text-base"
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="font-medium text-gray-600 text-base">
            Create An New Account?{" "}
            <span
              onClick={() => setSate("Sign Up")}
              className="text-primary underline cursor-pointer font-bold text-base"
            >
              Click Here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
