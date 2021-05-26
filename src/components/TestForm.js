import React, { useState } from "react";

const TestForm = () => {
  const labelArray = [
    "Name",
    "Destination",
    "Total number of visits",
    "Best thing about the city",
    "Favourite attraction",
    "Best thing about the destination's dining options",
    "Method of transport to destination",
    "Age group",
    "Income level",
    "Purpose of visit",
    "Occupation",
    "Opinion of cost of accommodation",
  ];

  /* For the sake of simplification and time-saving, I would use a preconfigured array
  
 Normally, instead of the plug-array, it will be something like:

  const [answers, setAnswers] = useState([]);

  const fetchAnswers = () => {
    axios
      .get("url")
      .then((response) => {
        setAnswers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(fetchAnswers, []);

  and then I would map over the answers array etc., just as I am doing now */

  const correctAnswers = [
    {
      id: "1",
      name: "1",
      correctAnswer: "Three times",
      hint: "",
      hintPosition: "after",
    },
    {
      id: "2",
      name: "2",
      correctAnswer: "Amazing weather",
      hint: "",
      hintPosition: "after",
    },
    {
      id: "3",
      name: "3",
      correctAnswer: "Town Hall",
      hint: "",
      hintPosition: "after",
    },
    {
      id: "4",
      name: "4",
      correctAnswer: "Variety",
      hint: "",
      hintPosition: "after",
    },
    {
      id: "5",
      name: "5",
      correctAnswer: "Plane",
      hint: "by",
      hintPosition: "before",
    },
    {
      id: "6",
      name: "6",
      correctAnswer: "Over forty",
      hint: "",
      hintPosition: "after",
    },
    {
      id: "7",
      name: "7",
      correctAnswer: "Mid-range",
      hint: "",
      hintPosition: "after",
    },
    {
      id: "8",
      name: "8",
      correctAnswer: "Tourism",
      hint: "on business and",
      hintPosition: "before",
    },
    {
      id: "9",
      name: "9",
      correctAnswer: "Computer programmer",
      hint: "+ writer for a travel magazine",
      hintPosition: "after",
    },
    {
      id: "10",
      name: "10",
      correctAnswer: "Good value",
      hint: "",
      hintPosition: "after",
    },
  ];

  // --------------- Button click handlers --------------------- //

  const [score, setScore] = useState(0);

  const handleCheck = (e) => {
    e.preventDefault();
    let points;
    points = 0;

    document
      .querySelector(".test-results")
      .setAttribute("style", "visibility: visible");

    const givenAnswers = Array.from(
      document.querySelectorAll(".test-field-input")
    );

    givenAnswers.map((givenAnswer, index) => {
      if (givenAnswer.value === correctAnswers[index].correctAnswer) {
        givenAnswer.setAttribute("style", "color: #88c652");
        points++;
      } else {
        givenAnswer.setAttribute("style", "color: #f06a22");
      }
      setScore(score + points);
      return null;
    });
  };

  const handleShow = (e) => {
    e.preventDefault();
    const testFields = Array.from(
      document.querySelectorAll(".test-field-input")
    );
    correctAnswers.map((answer, index) => {
      testFields[index].value = answer.correctAnswer;
      return null;
    });
  };

  const handleClear = (e) => {
    e.preventDefault();
    setScore(0);
    const testFields = Array.from(
      document.querySelectorAll(".test-field-input")
    );
    testFields.map((field) => (field.value = null));
  };

  // --------------------------------------------------------- //

  return (
    <div className="test-form-window">
      <form className="test-form">
        <div className="test-label-side">
          {labelArray.map((label) => {
            {
              /* Rendering the left side with labels and hints */
            }
            return (
              <div
                key={labelArray.indexOf(label).toString()}
                className="text-label-wrapper"
              >
                <p className="text-label">{label}</p>
              </div>
            );
          })}
        </div>

        <div className="test-form-side">
          <div className="test-field">
            <p className="example-answer">Robert Goddard</p>
            <div className="example-logo-wpapper">
              <div className="example-logo">example</div>
            </div>
          </div>
          <div className="test-field">
            <p className="test-field__hint">Melbourne</p>
          </div>

          {/* Rendering the right side with inputs and hints */}
          {correctAnswers.map((answer) => {
            if (!answer.hint) {
              return (
                <div className="test-field">
                  <input
                    key={answer.correctAnswer}
                    className="test-field-input"
                    type="text"
                    id={answer.id}
                    name={answer.id}
                  />
                </div>
              );
            } else if (answer.hintPosition === "before") {
              return (
                <div className="test-field">
                  <p className="test-field__hint">{answer.hint}</p>
                  <input
                    key={answer.correctAnswer}
                    className="test-field-input"
                    type="text"
                    id={answer.id}
                    name={answer.id}
                  />
                </div>
              );
            } else {
              return (
                <div className="test-field">
                  <input
                    key={answer.correctAnswer}
                    className="test-field-input"
                    type="text"
                    id={answer.id}
                    name={answer.id}
                  />
                  <p className="test-field__hint">{answer.hint}</p>
                </div>
              );
            }
          })}
        </div>
      </form>
      <div className="test-results">
        You have scored {score * 10} % ( {score} / 10 )
      </div>
      <div className="form-controls">
        <button className="check-button" onClick={handleCheck}>
          Check
        </button>
        <button className="show-button" onClick={handleShow}>
          Show
        </button>
        <button className="clear-button" onClick={handleClear}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default TestForm;
