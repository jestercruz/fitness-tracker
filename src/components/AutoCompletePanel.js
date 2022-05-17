import "../stylesheets/AutoCompletePanel.css";

const AutoCompletePanel = ({ data, dataKey, onClick, setShowAutoComplete }) => {
  return (
    <div className={`auto-complete-panel ${dataKey}`} tabIndex="0">
      <ul>
        {data.map((el) => {
          return (
            <li
              tabIndex="0"
              className="auto-complete-item"
              onClick={() => {
                setShowAutoComplete(false);
                onClick({ target: { value: el[dataKey] } });
              }}
            >
              {el[dataKey]}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AutoCompletePanel;
