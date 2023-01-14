import { useState } from "react";

export const Header = () => {
  const [categories, setCategories] = useState<string[]>([
    "blog",
    "resume",
    "etc",
  ]);

  return (
    <div className="w-full flex-center bg-primary bebas">
      <div className="w-full m-4 flex-center bg-white rounded-[4px] text-2xl">
        <div className="w-full flex-center py-4 px-4 md:px-8">
          <div className="text-2xl md:text-4xl">AHNSUMMER</div>
          <ul className="hidden md:flex justify-end items-center grow">
            {categories.map((category, idx) => (
              <li className="px-8" key={idx}>
                {category}
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
            <div className="bg-gray-300">햄버거</div>
          </div>
        </div>
      </div>
    </div>
  );
};
