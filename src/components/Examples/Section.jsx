function Section({ children, topContent, ...props }) {
  return (
    <section {...props}>
      <menu>{topContent}</menu>
      {children}
    </section>
  );
}
export default Section;
