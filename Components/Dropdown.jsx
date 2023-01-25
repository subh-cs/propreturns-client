import React from "react";

const Dropdown = ({heading}) => {
  return (
    <div class="hidden md:block">
      <div class="dropdown inline-block relative">
        <button class="bg-gray-100 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
          <span class="mr-1">{heading}</span>
          <svg
            class="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
          </svg>
        </button>
        <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
          <li class="">
            <a
              class="rounded-t bg-gray-100 hover:bg-white py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              Dropdown1
            </a>
          </li>
          <li class="">
            <a
              class="rounded-t bg-gray-100 hover:bg-white py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
             Dropdown2
            </a>
          </li>
          <li class="">
            <a
              class="rounded-t bg-gray-100 hover:bg-white py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              Dropdown3
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
