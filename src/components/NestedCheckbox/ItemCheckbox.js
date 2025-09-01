import React from "react";

export default function ItemCheckbox({
  label,
  item,
  category,
  items,
  checked,
  handleItem,
}) {
  return (
    <label className="block">
      <input
        type="checkbox"
        checked={checked[item]}
        onChange={() => handleItem(item, category, items)}
      />{" "}
      {label}
    </label>
  );
}
