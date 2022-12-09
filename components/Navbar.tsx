import Link from "next/link";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Navbar = () => {
  const user = {
    username: "Aseel",
    photoURL:
      "https://i0.wp.com/clownfishtv.com/wp-content/uploads/2022/09/snakebust-gsb_ex_16.jpg?resize=1104%2C810&ssl=1",
  };

  const username = null;
  const [showBurger, setShowBurger] = useState(false);
  return (
    <nav>
      <div className="bg-white flex px-2 py-2 items-center justify-between ">
        {/* Logo & Title */}
        <Link href="/" className="flex items-center space-x-1">
          <img src="/ProwlerLogo.svg" alt="" className="h-14" />
          <span className="akashi text-3xl text-[#FD73C4]">Prowler</span>
        </Link>

        {/* Navigation Items in burger menu if small */}
        <div
          className={
            "space-y-2 md:hidden transition-all 2s ease-in " + `${showBurger ? "rotate-90" : ""}`
          }
          onClick={() => setShowBurger(!showBurger)}
        >
          <div className={"w-10 h-0.5 " + `${showBurger ? "bg-[#01CFFA]" : "bg-gray-600"}`}></div>
          <div className={"w-10 h-0.5 " + `${showBurger ? "bg-[#01CFFA]" : "bg-gray-600"}`}></div>
          <div className={"w-10 h-0.5 " + `${showBurger ? "bg-[#01CFFA]" : "bg-gray-600"}`}></div>
        </div>

        {/* Navigation Items in regular menu if medium or larger */}
        <ul className="hidden md:flex items-center space-x-4">
          <li>
            <Link href="/admin">
              <PlusIcon className="h-10 text-white px-1 bg-[#01CFFA] rounded-xl" />
            </Link>
          </li>
          <li>
            <Link href={`/${username}`}>
              <img
                className="h-10 w-10 rounded-full"
                src={user?.photoURL}
                alt={`${username}'s profile`}
              />
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={
          showBurger
            ? "bg-white flex items-center justify-between p-3 transition-all 2s ease-in border"
            : "hidden"
        }
      >
        <Link href="/admin" className="text-2xl text-white px-3 py-2 rounded-md bg-[#01CFFA]">
          Add Post
        </Link>

        <Link href={`/${username}`}>
          <img
            className="h-10 w-10 rounded-full"
            src={user?.photoURL}
            alt={`${username}'s profile`}
          />
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
