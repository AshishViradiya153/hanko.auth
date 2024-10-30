"use client";

import { useHanko } from "../utils/useHanko";

export default function AuthLayout(props: { children: React.ReactNode }) {
  const { logout, user } = useHanko();
  console.log("🚀 ~ AuthLayout ~ user:", user);

  return (
    <>
      <div className="flex flex-col h-screen place-items-center bg-white">
        <nav className="flex w-full bg-gray-800 p-4 shadow-md">
          <div className="flex-1 flex justify-between items-center">
            <h1 className="text-white text-xl font-bold">Hanko auth Example</h1>
            <div>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition duration-200"
                onClick={logout}
                type="button"
              >
                {user ? "Logout" : "Register"}
              </button>
            </div>
          </div>
        </nav>
        <div className="container">{props.children}</div>
      </div>
    </>
  );
}
