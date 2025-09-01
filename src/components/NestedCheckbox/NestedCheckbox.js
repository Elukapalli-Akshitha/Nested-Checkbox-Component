import React, { useEffect, useMemo, useRef, useState } from "react";
import "./NestedCheckbox.css"; // optional – you can also keep styles inside ProductPage.css

const NestedCheckbox = () => {
  // tree state
  const [state, setState] = useState({
    fruits: { apple: false, banana: false, orange: false },
    vegetables: { carrot: false, broccoli: false, potato: false },
  });

  const allItems = useMemo(() => {
    const f = Object.values(state.fruits);
    const v = Object.values(state.vegetables);
    return [...f, ...v];
  }, [state]);

  const selectAllRef = useRef(null);
  const fruitsRef = useRef(null);
  const vegetablesRef = useRef(null);

  // helpers
  const setCategory = (cat, checked) =>
    setState((s) => ({
      ...s,
      [cat]: Object.fromEntries(Object.keys(s[cat]).map((k) => [k, checked])),
    }));

  const updateItem = (cat, key, checked) =>
    setState((s) => ({ ...s, [cat]: { ...s[cat], [key]: checked } }));

  // compute indeterminate/checked for category + selectAll
  const getCategoryInfo = (cat) => {
    const values = Object.values(state[cat]);
    const all = values.every(Boolean);
    const none = values.every((v) => !v);
    return { checked: all, indeterminate: !all && !none };
  };

  const selectAllInfo = useMemo(() => {
    const all = allItems.every(Boolean);
    const none = allItems.every((v) => !v);
    return { checked: all, indeterminate: !all && !none };
  }, [allItems]);

  // apply indeterminate flags
  useEffect(() => {
    if (selectAllRef.current) selectAllRef.current.indeterminate = selectAllInfo.indeterminate;
    if (fruitsRef.current) fruitsRef.current.indeterminate = getCategoryInfo("fruits").indeterminate;
    if (vegetablesRef.current) vegetablesRef.current.indeterminate = getCategoryInfo("vegetables").indeterminate;
  }, [selectAllInfo, state]);

  return (
    <div className="card checkbox-card">
      <h3>Customize Your Selection</h3>

      <label className="row">
        <input
          ref={selectAllRef}
          type="checkbox"
          checked={selectAllInfo.checked}
          onChange={(e) => {
            const checked = e.target.checked;
            setCategory("fruits", checked);
            setCategory("vegetables", checked);
          }}
        />
        <span>Select All</span>
      </label>

      {/* Fruits */}
      <div className="group">
        <label className="row">
          <input
            ref={fruitsRef}
            type="checkbox"
            checked={getCategoryInfo("fruits").checked}
            onChange={(e) => setCategory("fruits", e.target.checked)}
          />
        </label>
        <span className="group-title">Fruits</span>
        <div className="items">
          {Object.entries(state.fruits).map(([k, val]) => (
            <label className="row indented" key={k}>
              <input
                type="checkbox"
                checked={val}
                onChange={(e) => updateItem("fruits", k, e.target.checked)}
              />
              <span className="cap">{k}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Vegetables */}
      <div className="group">
        <label className="row">
          <input
            ref={vegetablesRef}
            type="checkbox"
            checked={getCategoryInfo("vegetables").checked}
            onChange={(e) => setCategory("vegetables", e.target.checked)}
          />
        </label>
        <span className="group-title">Vegetables</span>
        <div className="items">
          {Object.entries(state.vegetables).map(([k, val]) => (
            <label className="row indented" key={k}>
              <input
                type="checkbox"
                checked={val}
                onChange={(e) => updateItem("vegetables", k, e.target.checked)}
              />
              <span className="cap">{k}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NestedCheckbox;
