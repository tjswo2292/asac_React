import NewSignUpTitle from "../molecules/newSignUp/NewSignUpTitle";
import NewSignUpForm from "../molecules/newSignUp/NewSignUpForm";

import "./newSignUpSection.css";

const NewSignUpSection = () => {
  return (
    <div className="new-sign-up-section-wrap">
      <NewSignUpTitle />
      <div className="new-sign-up-section">
        <NewSignUpForm />
      </div>
    </div>
  );
};

export default NewSignUpSection;
