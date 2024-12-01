import { ChangeEvent, ChangeEventHandler } from "react";
import "./search-box.styles.jsx";
import { SearchBboxContainer } from "./search-box.styles.jsx";

interface ISearchBoxProps {
  className: string;
  placeholder?: string;
  // onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({
  // className,
  placeholder,
  onChangeHandler,
}: ISearchBoxProps) => {
  return (
    <SearchBboxContainer
      // className={`search-box ${className}`}
      className={"monster-search-box"}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
