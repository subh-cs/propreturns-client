import { useState } from "react"; // import state

export default function Experiment() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <div className="w-screen px-4 py-4">
    <div className="flex items-center justify-between p-2">
      <div className="flex justify-center items-center ml-2">
        <img src="https://s3-us-west-2.amazonaws.com/cbi-image-service-prd/modified/0d47393a-dc4b-4cde-9ee4-551623cfd14c.png" alt="logo" width="200"/>
      </div>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <div className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <div className="border-b border-gray-400 my-8 uppercase">
                <a href="/about">About</a>
              </div>
              <div className="border-b border-gray-400 my-8 uppercase">
                <a href="/portfolio">Portfolio</a>
              </div>
              <div className="border-b border-gray-400 my-8 uppercase">
                <a href="/contact">Contact</a>
              </div>
            </div>
          </div>
        </section>
        <div className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <div>
            <a href="/about">About</a>
          </div>
          <div>
            <a href="/portfolio">Portfolio</a>
          </div>
          <div>
            <a href="/contact">Contact</a>
          </div>
          <div>
            <img src="/user.svg" width="30"></img>
          </div>
        </div>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
    </div>
  );
}