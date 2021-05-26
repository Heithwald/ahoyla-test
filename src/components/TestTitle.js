import React from "react";

const TestHeader = () => {
  return (
    <div className="test-header">
      <h3 className="test-header__title">Question 1-10</h3>
      <div className="test-info">
        <div className="test-info__icon"></div>
        <p className="test-info__text">
          Play ► and Listen the audio, complete the notes below by
          <strong> filling the gaps</strong>.
          <br />
          Write <strong>no more than two words</strong> for each answer.
        </p>
      </div>
    </div>
  );
};

export default TestHeader;
