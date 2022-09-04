import s from '../Filter/Filter.module.css'

const Filter = ({filter, onChange}) => {
  return (
    <input className={s.filter}
      type="text"
      name="filter"
      value={filter}
      onChange={({ target }) => onChange(target.value)}
      placeholder="Find contact by name ←"
    />
  );
};

export default Filter;