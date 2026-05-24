/**
 * Card.jsx
 *
 * Reusable container component.
 *
 * Key React concept:
 * - `children` lets a component wrap any JSX passed between opening/closing tags.
 */

function Card({ title, children }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "16px", borderRadius: "8px" }}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default Card;