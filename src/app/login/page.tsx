import Image from "next/image";
import HankoAuth from "../component/HankoAuth";

export default function LoginPage() {
  return (
    <div className="flex h-screen">
      {/* Left Side Image */}
      <div className="relative flex-1">
        <Image
          src="/main.jpg" // Ensure this path is correct
          alt="Login Visual"
          layout="fill"
          objectFit="fill"
          className="w-full h-full"
        />
      </div>

      {/* Right Side Login Section */}
      <div className="flex flex-col justify-center items-start flex-1 px-10 max-w-md">
        <h2 className="text-4xl text-black font-bold mb-4">Welcome Back</h2>
        <p className="text-lg text-gray-600 mb-8">Please log in to continue</p>
        <HankoAuth />
      </div>
    </div>
  );
}
