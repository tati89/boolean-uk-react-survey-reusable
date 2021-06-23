import { useState } from "react";
import Checkbox from "./Checkbox";
import Checkboxes from "./Checkboxes";

const initialFormState = {
  username: "",
  email: "",
  logo: "",
  colour: "",
  consistency: "",
  timeSpent: [],
  review: "",
  bestFeatures: [],
  worstFeatures: []
};

const ANSWER_EXAMPLE = {
  username: "Nicolas",
  email: "nico@nico.las",
  logo: "4",
  colour: "2",
  consistency: "3",
  timeSpent: ["swimming", "chatting"],
  review: "I love my rubber ducky! ❤️",
  bestFeatures: ["colour", "size"],
  worstFeatures: ["sound"]
};

function Form(props) {
  const [answers, setAnswers] = useState({
    username: "",
    email: "",
    logo: "",
    colour: "",
    consistency: "4",
    timeSpent: ["bathing"],
    review: "",
    bestFeatures: [],
    worstFeatures: []
  });

  function handleSubmit(event) {
    event.preventDefault();
    props.addAnswer(answers);
    setAnswers(initialFormState);
  }

  function handleChange(event) {
    setAnswers({ ...answers, [event.target.name]: event.target.value });
  }

  function handleCheckboxGroupChange(event) {
    const updatedArray = event.target.checked
      ? [...answers[event.target.name], event.target.value]
      : answers[event.target.name].filter(
          (feature) => feature !== event.target.value
        );

    setAnswers({ ...answers, [event.target.name]: updatedArray });
  }

  // function handleWorstFeaturesChange(event) {
  //   const updatedWorstFeatures = event.target.checked
  //     ? [...answers.worstFeatures, event.target.value]
  //     : answers.worstFeatures.filter(
  //         (feature) => feature !== event.target.value
  //       );

  //   setAnswers({ ...answers, worstFeatures: updatedWorstFeatures });
  // }

  // function handleCheckboxChange(event) {
  //   setAnswers({ ...answers, [event.target.name]:  });
  // }

  // function handleEmailChange(event) {
  //   setAnswers({ ...answers, email: event.target.value });
  // }

  const bestFeaturesCheckbox = [
      {
      name:"bestFeatures",
      value:"colour",
      text: "It's yellow!"
  },
  {
      name:"bestFeatures",
      value:"sound",
      text: "It squeaks!"
  },
  {
      name:"bestFeatures",
      value:"logo",
      text: "It has a logo!"
  },
  {
      name:"bestFeatures",
      value:"size",
      text: "Its big!"
  }
]

const worstFeaturesCheckbox = [
      {
      name:"worstFeatures",
      value:"colour",
      text: "It's yellow!"
  },
  {
      name:"worstFeatures",
      value:"sound",
      text: "It squeaks!"
  },
  {
      name:"worstFeatures",
      value:"logo",
      text: "It has a logo!"
  },
  {
      name:"worstFeatures",
      value:"size",
      text: "Its big!"
  }
]

const timeSpentCheckbox = [
      {
      name:"timeSpent",
      value:"swimming",
      text: "Swimming"
  },
  {
      name:"timeSpent",
      value:"bathing",
      text: "Bathing"
  },
  {
      name:"timeSpent",
      value:"chatting",
      text: "Chatting"
  },
  {
      name:"timeSpent",
      value:"noTime",
      text: "I don't like to spend time with it"
  }
]

  

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Tell us what you think about your rubber duck!</h2>
      <div className="form__group">
        <h3>
          What would you say that are the best features of your rubber duck?
        </h3>
        <Checkboxes checkBoxList={bestFeaturesCheckbox} handleCheckboxGroupChange={handleCheckboxGroupChange} isItChecked={answers.bestFeatures}/>         
      </div>
      <div className="form__group">
        <h3>What would you say that are the worst bits of your rubber duck?</h3>
        <Checkboxes checkBoxList={worstFeaturesCheckbox} handleCheckboxGroupChange={handleCheckboxGroupChange} isItChecked={answers.worstFeatures}/>
      </div>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck consistency?</h3>
        <ul>
          <li>
            <input
              id="consistency1"
              type="radio"
              name="consistency"
              value="1"
              onChange={handleChange}
              checked={answers.consistency === "1"}
            />
            <label htmlFor="consistency1">1</label>
          </li>
          <li>
            <input
              id="consistency2"
              type="radio"
              name="consistency"
              value="2"
              onChange={handleChange}
              checked={answers.consistency === "2"}
            />
            <label htmlFor="consistency2">2</label>
          </li>
          <li>
            <input
              id="consistency3"
              type="radio"
              name="consistency"
              value="3"
              onChange={handleChange}
              checked={answers.consistency === "3"}
            />
            <label htmlFor="consistency3">3</label>
          </li>
          <li>
            <input
              id="consistency4"
              type="radio"
              name="consistency"
              value="4"
              onChange={handleChange}
              checked={answers.consistency === "4"}
            />
            <label htmlFor="consistency4">4</label>
          </li>
        </ul>
      </div>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        <ul>
          <li>
            <input
              id="colour1"
              type="radio"
              name="colour"
              value="1"
              onChange={handleChange}
            />
            <label htmlFor="colour1">1</label>
          </li>
          <li>
            <input
              id="colour2"
              type="radio"
              name="colour"
              value="2"
              onChange={handleChange}
            />
            <label htmlFor="colour2">2</label>
          </li>
          <li>
            <input
              id="colour3"
              type="radio"
              name="colour"
              value="3"
              onChange={handleChange}
            />
            <label htmlFor="colour3">3</label>
          </li>
          <li>
            <input
              id="colour4"
              type="radio"
              name="colour"
              value="4"
              onChange={handleChange}
            />
            <label htmlFor="colour4">4</label>
          </li>
        </ul>
      </div>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck logo?</h3>
        <ul>
          <li>
            <input
              id="logo1"
              type="radio"
              name="logo"
              value="1"
              onChange={handleChange}
            />
            <label htmlFor="logo1">1</label>
          </li>
          <li>
            <input
              id="logo2"
              type="radio"
              name="logo"
              value="2"
              onChange={handleChange}
            />
            <label htmlFor="logo2">2</label>
          </li>
          <li>
            <input
              id="logo3"
              type="radio"
              name="logo"
              value="3"
              onChange={handleChange}
            />
            <label htmlFor="logo3">3</label>
          </li>
          <li>
            <input
              id="logo4"
              type="radio"
              name="logo"
              value="4"
              onChange={handleChange}
            />
            <label htmlFor="logo4">4</label>
          </li>
        </ul>
      </div>
      <div className="form__group">
        <h3>How do you like to spend time with your rubber duck</h3>
        <Checkboxes checkBoxList={timeSpentCheckbox} handleCheckboxGroupChange={handleCheckboxGroupChange} isItChecked={answers.timeSpent}/>
      </div>
      <label>
        What else have you got to say about your rubber duck?
        <textarea
          name="review"
          cols="30"
          rows="10"
          onChange={handleChange}
          value={answers.review}
        ></textarea>
      </label>
      <label>
        Put your name here (if you feel like it):
        <input
          type="text"
          name="username"
          onChange={handleChange}
          value={answers.username}
        />
      </label>
      <label>
        Leave us your email pretty please??
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={answers.email}
        />
      </label>
      <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>
  );
}

export default Form;
