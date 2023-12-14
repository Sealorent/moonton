import { useState , useRef } from "react";
import { Link } from "@inertiajs/react";


export default function TopBar({ name }) {

    const [dropdownOpen, setDropdownOpen] = useState(true);
    const dropdownTarget = useRef();

    const toggleDropdown = () => {
        if(dropdownOpen) {
            dropdownTarget.current.classList.remove('hidden');
        }else{
            dropdownTarget.current.classList.add('hidden');
        }
        setDropdownOpen(!dropdownOpen);
    }



  return (
    <div className="flex justify-between items-center cursor-pointer">
        <input
          name="search"
          className="top-search  focus:border-alerange focus:ring-transparent focus:ring-0 focus:outline-alerange focus:outline-none"
          placeholder="Search movie, cast, genre"
          style={{
            backgroundImage: "url('/icons/ic_search.svg')",
            // Add other styles if needed
          }}
        />
        <div className="flex items-center gap-4">
          <span className="text-black text-sm font-medium">
            Welcome, {name}
          </span>
          <div className="collapsible-dropdown flex flex-col gap-2 relative">
            <a
              className="outline outline-2 outline-gray-2 p-[5px] rounded-full w-[60px] dropdown-button"
            >
              <img 
                  src="/images/avatar.png" 
                  className="rounded-full object-cover w-full" 
                  alt="" 
                  onClick={toggleDropdown}
              />
            </a>
            <div
              className="bg-white rounded-2xl text-black font-medium flex flex-col gap-1 absolute z-[999] right-0 top-[80px] min-w-[180px] hidden overflow-hidden"
              ref={dropdownTarget}
            >
              <a href="#!" className="transition-all hover:bg-sky-100 p-4">
                Dashboard
              </a>
              <a href="#!" className="transition-all hover:bg-sky-100 p-4">
                Settings
              </a>
              <Link 
                href={route('logout')} 
                method="post"
                className="transition-all hover:bg-sky-100 p-4"
              >
                Sign Out
              </Link>
            </div>
          </div>
        </div>
    </div>
  );
}
