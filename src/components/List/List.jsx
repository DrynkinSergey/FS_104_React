const List = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map(item => (
          <li key={item.story_id}>
            <a href={item.url} target='_blank'>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default List;
