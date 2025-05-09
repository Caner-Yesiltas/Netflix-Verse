"use client";
import React, { useState, useEffect, Fragment } from "react";
import { Disclosure, Menu, MenuButton, MenuItem, MenuItems, Transition } from "@headlessui/react";
import Link from "next/link";
import { useAuthContext } from "@/context/AuthContext";
import { useDebounce } from "use-debounce";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [showBackground, setShowBackground] = useState(false);
  const { currentUser, logOut } = useAuthContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const TOP_OFFSET = 60;
      setShowBackground(window.scrollY >= TOP_OFFSET);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (debouncedSearchTerm && currentUser) {
      router.push(`/search/${debouncedSearchTerm}`);
    } else if (router.pathname === "/search" && !debouncedSearchTerm && currentUser) {
      router.push("/movies");
    }
  }, [debouncedSearchTerm, router, currentUser]);

  return (
    <Disclosure as="nav" className="text-white fixed top-0 z-20 w-full ">
      <div
        className={`w-full px-4 md:px-16 py-4 flex items-center justify-between transition duration-500  ${
          showBackground ? "bg-zinc-900 bg-opacity-90" : ""
        }`}
      >
        {/* Left - Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <img src="/images/logo.png" className="h-5 lg:h-7" alt="Logo" />
          </Link>
        </div>

        {/* Center - Search */}
        {currentUser && (
          <div className="flex-1 flex justify-center px-2">
            <input
              type="search"
              placeholder="Search Movie"
              className="bg-gray-700 text-white placeholder-gray-400 text-sm rounded-md p-2 w-full max-w-[180px] sm:max-w-[250px] focus:outline-none focus:ring-2 focus:ring-red-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        )}

        {/* Right - Profile */}
        <div className="flex items-center gap-2">
          {currentUser && (
            <h5 className="capitalize text-sm max-[530px]:hidden">
              {currentUser.displayName}
            </h5>
          )}

          <Menu as="div" className="relative">
            <MenuButton className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <img
                className="h-8 w-8 rounded-full"
                src={currentUser?.photoURL || "/images/default-slate.png"}
                alt="user"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </MenuButton>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {!currentUser ? (
                  <>
                    <MenuItem>
                      <Link
                        href="/register"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                      >
                        Register
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link
                        href="/login"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                      >
                        Login
                      </Link>
                    </MenuItem>
                  </>
                ) : (
                  <>
                    <MenuItem>
                      <Link
                        href="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                      >
                        Profile
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <span
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 cursor-pointer"
                        onClick={logOut}
                      >
                        Logout
                      </span>
                    </MenuItem>
                  </>
                )}
              </MenuItems>
            </Transition>
          </Menu>
        </div>
      </div>
    </Disclosure>
  );
};

export default Navbar;
