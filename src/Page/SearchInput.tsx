import React, { useEffect, useRef, useState } from "react";

interface DataItem {
  name: string;
  // Add other properties of data items if necessary
}

interface SearchInputProps {
  onInput: (name: string, value: string) => void;
  onSelect: (item: DataItem) => void;
  data: DataItem[];
  title: string;
  placeholder: string;
  name: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  onInput,
  onSelect,
  data,
  title,
  placeholder,
  name,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isListVisible, setListVisibility] = useState<boolean>(false);
  const inputRef = useRef<HTMLDivElement>(null);

  const filteredCountries = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (item: DataItem) => {
    onInput(name, item.name);
    onSelect(item);
    setSearchTerm(item.name);
    setListVisibility(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setListVisibility(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={inputRef} className="flex flex-col ">
      <label className="text-xs">{title}</label>
      <div className="relative">
        <input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setListVisibility(true)}
          className="p-2 my-3"
        />
      </div>
      <div className="absolute   z-10  cursor-pointer  bg-white rounded-lg  ">
        {isListVisible && (
          <ul className=" overflow-scroll h-56 ">
            {filteredCountries.map((item) => (
              <li
                key={item.name}
                onClick={() => handleSelect(item)}
                className="p-3 px-5 hover:bg-blue-gray-100 hover:text-white rounded-lg"
              >
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchInput;
