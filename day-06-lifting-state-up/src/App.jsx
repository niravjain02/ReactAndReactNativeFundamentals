/**
 * Day 06: Lifting State Up
 *
 * Goal:
 * - Parent component owns shared state
 * - Child components receive data through props
 * - Child components communicate changes back using callbacks
 */

import { useState } from "react";
import UserForm from "./UserForm";
import UserPreview from "./UserPreview";

function App() {
  /**
   * App is the parent and single source of truth.
   *
   * UserForm can update this state.
   * UserPreview can read this state.
   */
  const [user, setUser] = useState({
    name: "Nirav",
    role: "Staff iOS Engineer"
  });

  return (
    <div style={{ padding: "24px", maxWidth: "800px" }}>
      <h1>Day 06: Lifting State Up</h1>

      <p>
        The parent component owns the state and passes it down to child
        components using props.
      </p>

      <div style={{ display: "grid", gap: "16px" }}>
        <UserForm user={user} onUserChange={setUser} />
        <UserPreview user={user} />
      </div>
    </div>
  );
}

export default App;