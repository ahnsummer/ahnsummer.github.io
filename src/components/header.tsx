import { useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

export const Header = () => {
  const [categories, setCategories] = useState<string[]>([
    "blog",
    "tech",
    "resume",
  ]);

  const [toggle, setToggle] = useState<boolean>(false);

  const onClickHamburger = () => {
    setToggle(!toggle);
  };

  const closeHamburger = () => {
    // toggle이 true일 때 false로 바꿔준다.
    toggle && setToggle(false);
  };

  return (
    <div className="w-full flex-center bg-primary bebas">
      <div className="w-full m-4 flex-center bg-white rounded-[4px] text-2xl">
        <div className="w-full flex-center p-4 md:px-8">
          <Link
            to="/"
            onClick={closeHamburger}
            className="text-[2rem] md:text-4xl"
          >
            AHNSUMMER
          </Link>
          <ul className="hidden md:flex justify-end items-center grow">
            {categories.map((category, idx) => (
              <li className="px-8" key={idx}>
                <Link to={`/${category}`}>{category}</Link>
              </li>
            ))}
          </ul>
          <div>
            <p className="hidden md:flex py-2 px-8 ml-4 bg-black rounded-3xl text-white">
              CONTACT
            </p>
          </div>
          {/* mobile */}
          <div className="flex justify-end grow md:hidden">
            <div
              className={classNames("hamburger", toggle ? "active-1" : "")}
              onClick={onClickHamburger}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div
            className={classNames(
              "absolute w-full px-4 top-24 md:hidden origin-top transition-transform duration-700 ease-in-out",
              toggle ? "scale-1" : "scale-y-0"
            )}
          >
            <ul className="w-full py-4 bg-white rounded-[4px]">
              {categories.map((category, idx) => (
                <li key={idx} className="py-2">
                  <Link to={`/${category}`} onClick={closeHamburger}>
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
