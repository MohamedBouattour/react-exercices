export const EmployeesList = ({ dataList }: any) => {
    return (
      <>
        <table border={1}>
          <tr>
            <th>Name</th>
            <th>Birthday</th>
            <th>Job</th>
          </tr>
          {dataList.map((item: any) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.birthday}</td>
                <td>{item.job}</td>
              </tr>
            );
          })}
        </table>
      </>
    );
  };
  