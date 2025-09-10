export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Starts adding items to your packing list 🚀</em>
      </footer>
    );

  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.isPacked).length;
  const percentage = Math.round((numPackedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈"
          : `💼 You have ${numItems} items on your list and you already packed
          ${numPackedItems} (${percentage}%)`}
      </em>
    </footer>
  );
}
