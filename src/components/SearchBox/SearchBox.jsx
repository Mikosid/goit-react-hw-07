import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter, changeFilter } from "../../redux/filtersSlice";

import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={`${css.form} ${css.formGroup}`}>
      <p className={css.label}>Search by name</p>
      <input
        className={css.input}
        type="text"
        value={filterValue}
        onChange={handleFilterChange}
      />
    </div>
  );
}
