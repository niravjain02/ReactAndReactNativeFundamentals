/**
 * UserForm.jsx
 *
 * Child component responsible for editing user data.
 *
 * Important React concept:
 * - This component does NOT own the state.
 * - It receives data from parent through props.
 * - It sends changes back to parent through callback functions.
 */

function UserForm({ user, onUserChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    onUserChange({
      ...user,
      [name]: value
    });
  };

  return (
    <div style={{ border: "1px solid #ddd", padding: "16px", borderRadius: "8px" }}>
      <h2>User Form</h2>

      <div style={{ marginBottom: "12px" }}>
        <label>
          Name:
          <input
            name="name"
            value={user.name}
            onChange={handleChange}
            style={{ marginLeft: "8px", padding: "6px" }}
          />
        </label>
      </div>

      <div style={{ marginBottom: "12px" }}>
        <label>
          Role:
          <input
            name="role"
            value={user.role}
            onChange={handleChange}
            style={{ marginLeft: "8px", padding: "6px" }}
          />
        </label>
      </div>
    </div>
  );
}

export default UserForm;