import { IDropdownListProps } from "../../models";
import { useState } from "react";

export function DropdownList({ listData = [], isActive }: IDropdownListProps) {
  const [selectedItem, setSelectedItem] = useState("");
  const handleItemClick = (item: string): void => {
    setSelectedItem(item);
  };

  return (
    <ul className={`dropdown${!isActive ? " inactive" : " active"}`}>
      {listData.map((li, id) => {
        return (
          <li
            key={id}
            onClick={() => handleItemClick(li)}
            className={selectedItem === li ? "clicked" : ""}
          >
            {" "}
            <a href="#">{li}</a>
          </li>
        );
      })}
    </ul>
  );
}
