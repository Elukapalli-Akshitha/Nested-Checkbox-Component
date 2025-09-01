import React from "react";
import ItemCheckbox from "./ItemCheckbox";

export default function CategoryCheckbox({
  label,
  category,
  items,
  checked,
  handleCategory,
  handleItem,
}) {
  return (
    <div className="mt-3">
      <label className="block font-medium">
        <input
          type="checkbox"
          checked={checked[category]}
          onChange={() => handleCategory(category, items)}
        />{" "}
        {label}
      </label>
      <div className="ml-6">
        {items.map((item) => (
          <ItemCheckbox
            key={item}
            label={item.charAt(0).toUpperCase() + item.slice(1)}
            item={item}
            category={category}
            items={items}
            checked={checked}
            handleItem={handleItem}
          />
        ))}
      </div>
    </div>
  );
}
