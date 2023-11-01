import { useState } from "react";
import { DropdownList } from "../DropdownList/DropdownList";
import { listData } from "../../data/data-list";

export function Dropdown() {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdownClick = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className="container">
      <div className="dropdown-wrapper">
        <button type="button" className="btn" onClick={handleDropdownClick}>
          <span>Account Settings</span>
          <span className="material-icons">public</span>
        </button>
        <DropdownList listData={listData} isActive={dropdown} />
      </div>
    </div>
  );
}
