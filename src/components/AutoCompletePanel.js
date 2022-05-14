import "../stylesheets/AutoCompletePanel.css";

const AutoCompletePanel = ({
  data,
  dataKey,
  setExercise,
  exercise,
  setShowAutoComplete,
}) => {
  // const obj = { name: "Jester", age: 12, favoriteFood: "Pizza" };
  // const keys = Object.entries(obj);
  // console.log(keys);
  // console.log("complete data object" + data + typeof data);
  console.log("data zero at key" + data[0][dataKey]);
  // console.log(Object.entries(data));
  // console.log("data 0 key" + data[key]);
  return (
    <div className={`auto-complete-panel ${dataKey}`} tabIndex="0">
      <ul>
        {data.map((el) => (
          <li
            tabIndex="0"
            className="auto-complete-item"
            onClick={(e) => {
              setShowAutoComplete(false);
              // if (dataKey === "group") {
              setExercise({ ...exercise, [dataKey]: el[dataKey] });
            }}
          >
            {el[dataKey]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AutoCompletePanel;
