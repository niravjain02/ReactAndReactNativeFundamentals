/**
 * Day 07: Component Composition
 *
 * Key React concept:
 * - Build small reusable components
 * - Compose them together
 * - Use `children` to create flexible UI containers
 */

import Card from "./Card";
import Section from "./Section";
import ReusableButton from "./ReusableButton";

function App() {
  const handleClick = () => {
    alert("Reusable button clicked!");
  };

  return (
    <div style={{ padding: "24px", maxWidth: "800px" }}>
      <h1>Day 07: Component Composition</h1>

      {/* Reusable layout wrapper */}
      <Section heading="Reusable Card Component">
        {/* Card wraps arbitrary child content */}
        <Card title="Profile Card">
          <p>Name: Nirav</p>
          <p>Role: Staff iOS Engineer</p>

          {/* Reusable button component */}
          <ReusableButton
            label="Show Message"
            onClick={handleClick}
          />
        </Card>
      </Section>

      <Section heading="Another Card Example">
        <Card title="Learning Progress">
          <ul>
            <li>JavaScript Fundamentals</li>
            <li>Props & Components</li>
            <li>useState</li>
            <li>useEffect</li>
            <li>Forms & Controlled Inputs</li>
          </ul>
        </Card>
      </Section>
    </div>
  );
}

export default App;