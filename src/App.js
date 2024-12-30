import "./App.css";
import { FAQs } from "./components/FAQs";
import Accordion from "./components/Accordion";

function App() {
  const renderFAQs = () => {
   return FAQs.map((faq) => {
      return (
        <Accordion key={faq.id} question={faq.question} answer={faq.answer} id={faq.id} />
      );
    });
  };
  return <div className="App">{renderFAQs()}</div>;
}

export default App;
