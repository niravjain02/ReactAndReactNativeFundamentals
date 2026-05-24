/**
 * ReusableButton.jsx
 *
 * Reusable button component.
 *
 * Props:
 * - label: text shown inside button
 * - onClick: callback function triggered on click
 */

function ReusableButton({ label, onClick }) {
  return (
    <button onClick={onClick} style={{ padding: "8px 12px", cursor: "pointer" }}>
      {label}
    </button>
  );
}

export default ReusableButton;