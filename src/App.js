import { useMemo, useState } from "react";

const Box = ({ style = {}, index }) => {
  const bgColor = index % 2 === 0 ? "#fff" : "#000";
  return (
    <div
      style={{ height: 40, width: 40, backgroundColor: bgColor, ...style }}
    ></div>
  );
};

const RenderRow = ({ index, value }) => {
  let boxComponent = useMemo(() => {
    let arr = [];
    for (let i = 0; i < value; i++) {
      arr.push(<Box key={index * i} index={i + index} />);
    }
    return arr;
  }, [value]);
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>{boxComponent}</div>
  );
};

const DrawBox = ({ value }) => {
  const rowComponent = useMemo(() => {
    let arr = [];
    for (let i = 0; i < value; i++) {
      arr.push(<RenderRow value={value} key={i} index={i} />);
    }
    return arr;
  }, [value]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {rowComponent}
    </div>
  );
};
export default function App() {
  const [value, setValue] = useState(8);

  return (
    <div>
      <input
        value={value}
        style={{ margin: 10 }}
        type="number"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <DrawBox value={value} />
    </div>
  );
}
