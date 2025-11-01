import { useState } from 'react';
import { EmployeesList } from '../components/EmployeesList';

import styles from '../styles/buttons.module.css'

export const Employees = () => {
  const [employee, setEmployee] = useState({
    name: '',
    birthday: '',
    job: 'Developer',
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
          className="inputStyle"
        />
        <br />
        <label>Birthday </label>
        <input
          name="birthday"
          type="date"
          value={employee.birthday}
          onChange={handleFormUpdate}
          className="inputStyle"
        />
        <br />
        <label>Job </label>
        <select className="inputStyle" name="job" value={employee.job} onChange={handleFormUpdate}>
          <option>Developer</option>
          <option>QA Tester</option>
        </select>
        <br />
      </form>
      <button className={styles.primary}  onClick={handleSaveEmployee}> Save </button>
      {/* Condition  ? when ture  : when false */}
      {list.length ? <EmployeesList dataList={list} />:''}
    </>
  );
};
