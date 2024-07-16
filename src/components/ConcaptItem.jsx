import ConceptItem from "./conceptItem";
import { CORE_CONCEPTS } from "../data";
import Section from "./Examples/Section";

function ConcaptItem() {
  const ConceptItemsList = (
    <>
      <ConceptItem {...CORE_CONCEPTS[0]} />
      <ConceptItem {...CORE_CONCEPTS[1]} />
      <ConceptItem {...CORE_CONCEPTS[2]} />
      <ConceptItem
        title={CORE_CONCEPTS[3].title}
        image={CORE_CONCEPTS[3].image}
        description={CORE_CONCEPTS[3].description}
      />
    </>
  );

  return (
    <Section
      id="core-concepts"
      topContent={ConceptItemsList}
      contentWrapper="ul"
    />
  );
}
export default ConcaptItem;
