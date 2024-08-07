function ShoppingList({ items }) {
  function getEmptyMessage() {
    if (items.length === 0) {
      return "Список покупок пуст";
    }
    return null;
  }
  return (
    <div>
      {getEmptyMessage() ? (
        <p>{getEmptyMessage()}</p>
      ) : (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ShoppingList;
