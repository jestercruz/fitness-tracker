import "../stylesheets/AutoCompletePanel.css";

const AutoCompletePanel = ({ data, key }) => {
  // const obj = { name: "Jester", age: 12, favoriteFood: "Pizza" };
  // const keys = Object.entries(obj);
  // console.log(keys);
  console.log("complete data object" + data + typeof data);
  console.log("data zero at key" + data[0][key]);
  console.log(Object.entries(data));
  // console.log("data 0 key" + data[key]);
  return (
    <div className="auto-complete-panel">
      <ul>
        {data.map((el) => (
          <li>{el[key]}</li>
        ))}
      </ul>
    </div>
  );
};

export default AutoCompletePanel;
