function Section({ children, topContent, contentWrapper = "div", ...props }) {

const TopContentWrapper = contentWrapper

  return (
    <section {...props}>
      <TopContentWrapper>{topContent}</TopContentWrapper>
      {children}
    </section>
  );
}
export default Section;
