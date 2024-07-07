import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import ConceptItem from "./components/conceptItem.jsx";
import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";
import { useState } from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState();

  const handleTabSelect = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <Header />
      <main>
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
        <section id="examples">
          <menu>
            <TabButton
              isSelected={selectedTab === "components"}
              onSelect={() => handleTabSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTab === "jsx"}
              onSelect={() => handleTabSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTab === "props"}
              onSelect={() => handleTabSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTab === "state"}
              onSelect={() => handleTabSelect("state")}
            >
              State
            </TabButton>
          </menu>
          {selectedTab ? (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTab].title}</h3>
              <p>{EXAMPLES[selectedTab].description}</p>
              <code>{EXAMPLES[selectedTab].code}</code>
            </div>
          ) : (
            <div>Please select a tab</div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
