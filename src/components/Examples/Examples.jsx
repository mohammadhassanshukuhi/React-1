import TabButton from "../TabButton/TabButton";
import { useState } from "react";
import { EXAMPLES } from "../../data";
import Section from "./Section";

function Examples() {
  const [selectedTab, setSelectedTab] = useState();

  const handleTabSelect = (tab) => {
    setSelectedTab(tab);
  };

  const tabContentJSX = selectedTab ? (
    <div id="tab-content">
      <h3>{EXAMPLES[selectedTab].title}</h3>
      <p>{EXAMPLES[selectedTab].description}</p>
      <code>{EXAMPLES[selectedTab].code}</code>
    </div>
  ) : (
    <div>Please select a tab</div>
  );

  const tabButtonsJSX = <>
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
        </TabButton></>

  return (
    <Section id="examples" topContent={tabButtonsJSX} contentWrapper="menu">
      {tabContentJSX}
    </Section>
  );
}
export default Examples;
