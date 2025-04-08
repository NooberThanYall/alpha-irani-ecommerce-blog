"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

type Errors = {
  confirm?: string;
  general?: string;
  zod?: string;
};

export type State = {
  success: boolean;
  errors: Errors;
  message: string;
  state: string;
  userData: object;
  loading: boolean;
};

const initialState: State = {
  loading: false,
  success: false,
  errors: {},
  message: "",
};

const Page = () => {
  const [state, setState] = useState<State>(initialState);
  const params = useSearchParams();
  const [emailField, seteEmailField] = useState(() => {
    return params.get("email");
  })
  
  const router = useRouter();

  async function handleRegisterSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState((prev) => {
      return { ...prev, loading: true };
    });

    const formData = new FormData(e.currentTarget);
    const values = Object.fromEntries(formData.entries());

    console.log(values)

    if (values.password !== values.confirmPassword) {
      setState({ ...state, errors: { confirm: "پسورد ها یکی نیستند!" } });
    }

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const { token } = await response.json();

      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 120);
      document.cookie = `session=${token}; path=/; Secure; SameSite=Strict; Expires=${expirationDate.toUTCString()};`;

      router.replace("/?subscription=success");
    } catch (error) {
      setState({ ...state, errors: { general: error.message } });
    } finally {
      setState((prev) => {
        return { ...prev, loading: false };
      });
    }
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form
        className={`space-y-4 ${
          state.loading ? "opacity-50" : ""
        } md:space-y-6 w-[400px] border-2 border-red-600 p-6 rounded-lg`}
        onSubmit={handleRegisterSubmit}
      >
        <h1 className="text-3xl mb-4 text-center font-bold text-red-600">
          ثبت نام
        </h1>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-white"
          >
            نام
          </label>
          <input
            type="text"
            name="name"
            
            required
            id="email"
            className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-green-600"
            placeholder="نام شما"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            ایمیل
          </label>
          <input
            type="email"
            name="email"
            value={emailField}
            onChange={e => seteEmailField(e.currentTarget)}
            required
            id="email"
            className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="ایمیل شما"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            پسورد
          </label>
          <input
            type="password"
            name="password"
            required
            id="password"
            placeholder="حداقل 8 کاراکتر"
            className="bg-gray-50 border  outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="confirm-password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            تکرار پسورد
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirm-password"
            placeholder="••••••••"
            required
            className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-red-600 text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-lightblue dark:focus:ring-primary-800"
        >
          ثبت نام{" "}
        </button>
        {state.errors.confirm && (
          <p className="text-red-500">{state.errors.confirm}</p>
        )}

        {state.errors.general && (
          <p className="text-red-500">{state.errors.general}</p>
        )}
        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          از قبل اکانت داری؟{" "}
          <Link
            href="/auth/login"
            className="font-medium text-primary-600 hover:underline dark:text-red-600"
          >
            ورود
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Page;
