import { useState } from "react";
import Form from "./Form";
import AnswersList from "./AnswersList";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answersList, setAnswersList] = useState([]);

  function addAnswer(answers) {
    setAnswersList([...answersList, answers]);
  }

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answersList} />
      </section>
      <section className="main__form"><Form addAnswer={addAnswer} /></section>
    </main>
  );
}

export default Main;
