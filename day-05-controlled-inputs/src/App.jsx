/**
 * Day 05: Controlled Inputs + Form Handling
 *
 * React pattern:
 * - Input value is stored in state
 * - Input changes update state via onChange
 * - UI always reflects state (single source of truth)
 *
 * React Native mapping:
 * - <input />  => <TextInput />
 * - onChange   => onChangeText
 * - value prop is the same concept
 */

import { useState } from "react";

function App() {
  // State for a simple form (multiple fields)
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "iOS Engineer",
    active: true
  });

  // A place to store submitted data (like "saved profile")
  const [submitted, setSubmitted] = useState(null);

  /**
   * Generic change handler for text inputs and selects
   * - e.target.name matches the key in form state
   * - e.target.value is the new value
   */
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update state immutably (important React rule)
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  /**
   * Checkbox uses e.target.checked instead of value
   */
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: checked
    }));
  };

  /**
   * Form submit handler
   * Prevents full page reload (browser default behavior)
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation example
    if (!form.name.trim()) {
      alert("Please enter a name");
      return;
    }

    // Save submitted snapshot
    setSubmitted(form);
  };

  const handleReset = () => {
    setForm({
      name: "",
      email: "",
      role: "iOS Engineer",
      active: true
    });
    setSubmitted(null);
  };

  return (
    <div style={{ padding: "24px", maxWidth: "720px" }}>
      <h1>Day 05: Controlled Inputs + Form Handling</h1>

      <form onSubmit={handleSubmit} style={{ border: "1px solid #ddd", padding: "16px", borderRadius: "8px" }}>
        <div style={{ marginBottom: "12px" }}>
          <label>
            Name:
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              style={{ marginLeft: "8px", padding: "6px", width: "260px" }}
            />
          </label>
        </div>

        <div style={{ marginBottom: "12px" }}>
          <label>
            Email:
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="name@example.com"
              style={{ marginLeft: "8px", padding: "6px", width: "260px" }}
            />
          </label>
        </div>

        <div style={{ marginBottom: "12px" }}>
          <label>
            Role:
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              style={{ marginLeft: "8px", padding: "6px" }}
            >
              <option value="iOS Engineer">iOS Engineer</option>
              <option value="Frontend Engineer">Frontend Engineer</option>
              <option value="React Native Developer">React Native Developer</option>
            </select>
          </label>
        </div>

        <div style={{ marginBottom: "12px" }}>
          <label>
            Active:
            <input
              type="checkbox"
              name="active"
              checked={form.active}
              onChange={handleCheckboxChange}
              style={{ marginLeft: "8px" }}
            />
          </label>
        </div>

        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset} style={{ marginLeft: "8px" }}>
          Reset
        </button>
      </form>

      <hr style={{ margin: "16px 0" }} />

      <h3>Live Preview (state)</h3>
      <pre style={{ background: "#f6f6f6", padding: "12px", borderRadius: "8px" }}>
        {JSON.stringify(form, null, 2)}
      </pre>

      {submitted && (
        <>
          <h3>Submitted Snapshot</h3>
          <pre style={{ background: "#f0fff2", padding: "12px", borderRadius: "8px" }}>
            {JSON.stringify(submitted, null, 2)}
          </pre>
        </>
      )}
    </div>
  );
}

export default App;
