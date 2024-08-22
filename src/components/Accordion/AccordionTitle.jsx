import { useAccordionContext } from "./Accordion.jsx";

export default function AccordionTitle({ className, id, children }) {
  const { toggleItem } = useAccordionContext();
  return (
    <h3 className={className} onClick={() => toggleItem(id)}>
      {children}
    </h3>
  );
}
