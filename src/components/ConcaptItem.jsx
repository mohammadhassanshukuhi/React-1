import ConceptItem from "./conceptItem";
import { CORE_CONCEPTS } from "../data";

function ConcaptItem() {
  return (
    <section id="core-concepts">
      <h2>Time to get started!</h2>
      <ul>
        <ConceptItem {...CORE_CONCEPTS[0]} />
        <ConceptItem {...CORE_CONCEPTS[1]} />
        <ConceptItem {...CORE_CONCEPTS[2]} />
        <ConceptItem
          title={CORE_CONCEPTS[3].title}
          image={CORE_CONCEPTS[3].image}
          description={CORE_CONCEPTS[3].description}
        />
      </ul>
    </section>
  );
}
export default ConcaptItem;
