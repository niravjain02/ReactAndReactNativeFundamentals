/**
 * Section.jsx
 *
 * Reusable layout wrapper.
 * Similar to creating a reusable SwiftUI container View.
 */

function Section({ heading, children }) {
  return (
    <section style={{ marginBottom: "20px" }}>
      <h1>{heading}</h1>
      {children}
    </section>
  );
}

export default Section;