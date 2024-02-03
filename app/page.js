import Navbar from "./Components/Navbar";
import HomePage from "./Components/Home/Home";

export default function Home() {
  return (
    <main className="h-screen flex flex-col text-black dark:text-white  dark:bg-black bg-[#ffffff]">
      <div>
        <Navbar />
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <HomePage />
      </div>
    </main>
  );
}
