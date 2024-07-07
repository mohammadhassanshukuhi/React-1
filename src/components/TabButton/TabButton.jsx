import "./TabButton.css";
function TabButton({ children, onSelect, isSelected }) {
  function handleClick() {
    onSelect();
  }

  return (
    <button className={isSelected ? "active" : undefined} onClick={handleClick}>
      {children}
    </button>
  );
}
export default TabButton;