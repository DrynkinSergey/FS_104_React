const SearchBar = ({ filterValue, handleChangeFilter }) => {
  return (
    <div>
      <input
        value={filterValue}
        placeholder='Search'
        type='search'
        onChange={e => handleChangeFilter(e.target.value)}
      />
    </div>
  );
};
export default SearchBar;
