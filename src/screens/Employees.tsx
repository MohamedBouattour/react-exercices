import { useState } from 'react';
import { EmployeesList } from '../components/EmployeesList';

export const Employees = () => {
  const [employee, setEmployee] = useState({
    name: '',
    birthday: '',
    job: '',
  });

  const handleFormUpdate = (e: any) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const [list, setList] = useState<any[]>([]);

  const handleSaveEmployee = () => {
    setList([...list, employee]);
  };

  return (
    <>
      <form>
        <label>Name </label>
        <input
          name="name"
          type="text"
          value={employee.name}
          onChange={handleFormUpdate}
        />
        <br />
        <label>Birthday </label>
        <input
          name="birthday"
          type="date"
          value={employee.birthday}
          onChange={handleFormUpdate}
        />
        <br />
        <label>Job </label>
        <select name="job" value={employee.job} onChange={handleFormUpdate}>
          <option>Developer</option>
          <option>QA Tester</option>
        </select>
        <br />
      </form>
      <button onClick={handleSaveEmployee}> Save </button>
      <EmployeesList dataList={list} />
    </>
  );
};
