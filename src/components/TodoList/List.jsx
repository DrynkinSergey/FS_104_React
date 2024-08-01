export const List = () => {
  return (
    <ul>
      {[].map(item => (
        <li key={item.id}>
          <p>{item.todo}</p>
          <button>Delete</button>
        </li>
      ))}
    </ul>
  );
};
