import { useState } from "react";
import Menu from "./Menu";

const Header = () => {
  const [isMenuShow, setIsMenuShow] = useState(false);

  const handleMenuShow = () => {
    setIsMenuShow((prev) => !prev);
  };

  return (
    <header className="custom-container flex items-center justify-between pt-5 sm:pt-10">
      <a
        href="#"
        className="text-logo flex w-max gap-x-1 text-2xl font-bold uppercase sm:text-3xl"
      >
        Stefan
        <span className="bg-logodot mt-1 block h-[6px] w-[6px] rounded-full sm:h-2 sm:w-2"></span>
      </a>
      <nav
        className={`from-page fixed top-0 right-0 bottom-0 md:static md:bg-none md:pt-0 ${isMenuShow ? "left-0" : "left-full"} z-50 bg-gradient-to-b to-slate-700 pt-5 duration-400 ease-out sm:pt-10`}
      >
        <div className="custom-container md:max-w-fit md:px-0">
          <div
            className="ml-auto w-max cursor-pointer opacity-70 hover:opacity-100 md:hidden"
            onClick={handleMenuShow}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="36"
              height="36"
              fill="rgba(255,255,255,1)"
            >
              <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
            </svg>
          </div>
          <ul className="flex flex-col md:flex-row md:gap-x-10">
            <Menu text="services" />
            <Menu text="portofolio" />
            <Menu text="contact" />
            <Menu text="about" />
          </ul>
        </div>
      </nav>
      <div
        onClick={handleMenuShow}
        className="cursor-pointer hover:opacity-70 md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="-1 -1 32 32"
          id="Align-Right--Streamline-Plump"
          height="32"
          width="32"
        >
          <desc> Align Right Streamline Icon: https://streamlinehq.com </desc>
          <g id="align-right--rag-paragraph-text-alignment-align-right-formatting-left">
            <path
              id="Rectangle 1098"
              stroke="#ffffff"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M28.08625 4.085c-0.079375 -0.5543750000000001 -0.5912499999999999 -0.8250000000000001 -1.15125 -0.8450000000000001C25.608125 3.19375 22.394375000000004 3.125 15 3.125c-7.39375 0 -10.608125 0.06875 -11.935 0.11499999999999999 -0.56 0.019375 -1.0718750000000001 0.290625 -1.150625 0.8450000000000001A4.28375 4.28375 0 0 0 1.875 4.6875c0 0.235625 0.015 0.43499999999999994 0.039375 0.6025 0.07875 0.5543750000000001 0.590625 0.8250000000000001 1.1500000000000001 0.8450000000000001C4.3925 6.18125 7.60625 6.25 15 6.25c7.39375 0 10.608125 -0.06875 11.935 -0.11499999999999999 0.56 -0.019375 1.0718750000000001 -0.290625 1.15125 -0.8450000000000001 0.02375 -0.1675 0.03875 -0.36687499999999995 0.03875 -0.6025s-0.015 -0.43499999999999994 -0.039375 -0.6025Z"
              strokeWidth="2"
            ></path>

            <path
              id="Rectangle 70"
              stroke="#ffffff"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M28.1025 18.93875c-0.05875 0.61 -0.59625 0.931875 -1.20875 0.954375 -1.2531249999999998 0.045625 -4.04375 0.10687500000000001 -10.01875 0.10687500000000001 -5.9750000000000005 0 -8.765625 -0.06125 -10.01875 -0.10625000000000001 -0.6125 -0.023125 -1.1500000000000001 -0.34500000000000003 -1.20875 -0.9550000000000001A5.231249999999999 5.231249999999999 0 0 1 5.625 18.4375c0 -0.19 0.00875 -0.35624999999999996 0.0225 -0.50125 0.05875 -0.61 0.59625 -0.931875 1.20875 -0.954375C8.109375 16.93625 10.9 16.875 16.875 16.875c5.9750000000000005 0 8.765625 0.06125 10.01875 0.10625000000000001 0.6125 0.023125 1.1500000000000001 0.34500000000000003 1.20875 0.9550000000000001 0.013749999999999998 0.14500000000000002 0.0225 0.31125 0.0225 0.50125 0 0.19 -0.00875 0.35624999999999996 -0.0225 0.50125Z"
              strokeWidth="2"
            ></path>
            <path
              id="Rectangle 75"
              stroke="#ffffff"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M28.116875 11.91375c-0.03375 0.690625 -0.600625 1.0918750000000002 -1.291875 1.11875 -1.1075 0.043750000000000004 -3.283125 0.0925 -7.45 0.0925s-6.342499999999999 -0.04875 -7.45 -0.0925c-0.69125 -0.026874999999999996 -1.258125 -0.42812500000000003 -1.291875 -1.11875a7.179375 7.179375 0 0 1 0 -0.7025000000000001c0.03375 -0.690625 0.600625 -1.0918750000000002 1.291875 -1.11875C13.0325 10.04875 15.208124999999999 10 19.375 10s6.342499999999999 0.04875 7.45 0.0925c0.69125 0.026874999999999996 1.258125 0.42812500000000003 1.291875 1.11875a7.179375 7.179375 0 0 1 0 0.7025000000000001Z"
              strokeWidth="2"
            ></path>
          </g>
        </svg>
      </div>
    </header>
  );
};

export default Header;
