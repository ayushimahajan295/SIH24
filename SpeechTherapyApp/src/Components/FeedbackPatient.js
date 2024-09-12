import React from 'react';
import './FeedbackPatient.css'; // Optional: Create this CSS file for styling

const FeedbackPatient = () => {
  return (
    <div className="feedback-patient">
      <h2>Feedback</h2>
      <form>
        <div className="feedback-question">
          <p>How satisfied are you with the progress you've made in your speech therapy sessions?</p>
          <label><input type="radio" name="satisfaction" value="Very satisfied" /> Very satisfied</label>
          <label><input type="radio" name="satisfaction" value="Satisfied" /> Satisfied</label>
          <label><input type="radio" name="satisfaction" value="Neutral" /> Neutral</label>
          <label><input type="radio" name="satisfaction" value="Dissatisfied" /> Dissatisfied</label>
          <label><input type="radio" name="satisfaction" value="Very dissatisfied" /> Very dissatisfied</label>
        </div>

        <div className="feedback-question">
          <p>How well did the speech therapist explain the therapy goals and process to you?</p>
          <label><input type="radio" name="explanation" value="Extremely well" /> Extremely well</label>
          <label><input type="radio" name="explanation" value="Very well" /> Very well</label>
          <label><input type="radio" name="explanation" value="Moderately well" /> Moderately well</label>
          <label><input type="radio" name="explanation" value="Slightly well" /> Slightly well</label>
          <label><input type="radio" name="explanation" value="Not at all" /> Not at all</label>
        </div>

        <div className="feedback-question">
          <p>How comfortable did you feel during your speech therapy sessions?</p>
          <label><input type="radio" name="comfort" value="Very comfortable" /> Very comfortable</label>
          <label><input type="radio" name="comfort" value="Comfortable" /> Comfortable</label>
          <label><input type="radio" name="comfort" value="Neutral" /> Neutral</label>
          <label><input type="radio" name="comfort" value="Uncomfortable" /> Uncomfortable</label>
          <label><input type="radio" name="comfort" value="Very uncomfortable" /> Very uncomfortable</label>
        </div>

        <div className="feedback-question">
          <p>How would you rate the speech therapist's ability to listen to your concerns and adjust the therapy accordingly?</p>
          <label><input type="radio" name="listening" value="Excellent" /> Excellent</label>
          <label><input type="radio" name="listening" value="Good" /> Good</label>
          <label><input type="radio" name="listening" value="Average" /> Average</label>
          <label><input type="radio" name="listening" value="Poor" /> Poor</label>
          <label><input type="radio" name="listening" value="Very poor" /> Very poor</label>
        </div>

        <div className="feedback-question">
          <p>How effective do you find the exercises and activities used during your speech therapy sessions?</p>
          <label><input type="radio" name="effectiveness" value="Extremely effective" /> Extremely effective</label>
          <label><input type="radio" name="effectiveness" value="Very effective" /> Very effective</label>
          <label><input type="radio" name="effectiveness" value="Moderately effective" /> Moderately effective</label>
          <label><input type="radio" name="effectiveness" value="Slightly effective" /> Slightly effective</label>
          <label><input type="radio" name="effectiveness" value="Not effective" /> Not effective</label>
        </div>

        <div className="feedback-question">
          <p>How well do the therapy sessions fit into your schedule?</p>
          <label><input type="radio" name="scheduleFit" value="Very well" /> Very well</label>
          <label><input type="radio" name="scheduleFit" value="Well" /> Well</label>
          <label><input type="radio" name="scheduleFit" value="Neutral" /> Neutral</label>
          <label><input type="radio" name="scheduleFit" value="Poorly" /> Poorly</label>
          <label><input type="radio" name="scheduleFit" value="Very poorly" /> Very poorly</label>
        </div>

        <div className="feedback-question">
          <p>How likely are you to recommend our speech therapy services to others?</p>
          <label><input type="radio" name="recommendation" value="Very likely" /> Very likely</label>
          <label><input type="radio" name="recommendation" value="Likely" /> Likely</label>
          <label><input type="radio" name="recommendation" value="Neutral" /> Neutral</label>
          <label><input type="radio" name="recommendation" value="Unlikely" /> Unlikely</label>
          <label><input type="radio" name="recommendation" value="Very unlikely" /> Very unlikely</label>
        </div>

        <div className="feedback-question">
          <p>How would you rate the overall experience of the speech therapy clinic environment?</p>
          <label><input type="radio" name="clinicEnvironment" value="Excellent" /> Excellent</label>
          <label><input type="radio" name="clinicEnvironment" value="Good" /> Good</label>
          <label><input type="radio" name="clinicEnvironment" value="Average" /> Average</label>
          <label><input type="radio" name="clinicEnvironment" value="Poor" /> Poor</label>
          <label><input type="radio" name="clinicEnvironment" value="Very poor" /> Very poor</label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackPatient;
