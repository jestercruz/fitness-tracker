const DisplayHistory = ({ history }) => {
  console.log(history);
  return (
    <div>
      <table>
        <tr>
          <th>Exercise</th>
          <th>Weight</th>
          <th>Sets</th>
          <th>Reps</th>
        </tr>

        {history.map((el, key) => (
          <tr key={key}>
            <td>{el.exercise}</td>
            <td>{el.weight}</td>
            <td>{el.sets}</td>
            <td>{el.reps}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default DisplayHistory;
