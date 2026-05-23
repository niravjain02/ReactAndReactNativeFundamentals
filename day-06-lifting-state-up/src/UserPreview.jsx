/**
 * UserPreview.jsx
 *
 * Child component responsible for displaying user data.
 *
 * Important React concept:
 * - This component is read-only.
 * - It receives data from parent through props.
 * - It re-renders automatically when parent state changes.
 */

function UserPreview({ user }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: "16px", borderRadius: "8px" }}>
      <h2>User Preview</h2>

      <p>
        <strong>Name:</strong> {user.name || "Not provided"}
      </p>

      <p>
        <strong>Role:</strong> {user.role || "Not provided"}
      </p>

      <pre style={{ background: "#f6f6f6", padding: "12px", borderRadius: "6px" }}>
        {JSON.stringify(user, null, 2)}
      </pre>
    </div>
  );
}

export default UserPreview;