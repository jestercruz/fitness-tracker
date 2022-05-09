const DisplayHistory = ({ history }) => {
  const formatDate = (date) => {
    const year = date.slice(0, 4);
    const month = date.slice(5, 7);
    const day = date.slice(8, 10);
    return `${month}/${day}/${year}`;
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Exercise</th>
            <th>Weight</th>
            <th>Sets</th>
            <th>Reps</th>
          </tr>
        </thead>
        {history.map((el, key) => (
          <tbody>
            <tr key={key}>
              <td>{formatDate(el.date)}</td>
              <td>{el.exercise}</td>
              <td>{el.weight}</td>
              <td>{el.sets}</td>
              <td>{el.reps}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default DisplayHistory;
