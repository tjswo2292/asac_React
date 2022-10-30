import "./newSignUpForm.css";

const NewSignUpForm = () => {
  return (
    <div className="new-sign-up-form">
      <form>
        <label htmlFor="new-email">이메일</label>
        <input id="new-email-input" type="text" />
        <label htmlFor="new-email">이름</label>
        <input
          id="new-name-input"
          type="text"
          placeholder="이름을 입력해주세요."
        />
        <label htmlFor="new-email">휴대폰 번호</label>
        <select id="phoneNumberSelect" name="phoneNumber">
          <option>South Korea +82</option>
        </select>
        <div className="certification-number-box">
          <input id="new-number-input" type="number" />
          <button>
            <span>인증번호 받기</span>
          </button>
        </div>
        <input
          id="new-certification-input"
          type="text"
          placeholder="인증번호를 입력해주세요"
        />
        <label htmlFor="new-email">이메일</label>
        <input
          id="new-pw-input"
          type="number"
          placeholder="비밀번호를 입력해주세요"
        />
        <input
          id="new-check-pw-input"
          type="number"
          placeholder="비밃번호를 다시 한번 입력해주세요"
        />
        <p className="pw-input-warning">
          영문 대소문자,숫자,특수문자를 3가지 이상으로 조합해 8자 이상 16자
          이하로 입력해주세요.
        </p>
        <div className="agree-wrap">
          <div className="agree-box">
            <input id="all-agree" type="checkbox" />
            <label htmlFor="all-agree">전체 동의</label>
          </div>
          <hr />
          <div className="agree-box">
            <input id="all-agree" type="checkbox" />
            <label htmlFor="all-agree">만 14세 이상힙니다. (필수)</label>
          </div>
          <div className="agree-box">
            <div className="id-agree-box">
              <input id="all-agree" type="checkbox" />
              <label htmlFor="all-agree">oneID 이용약관 동의 (필수)</label>
            </div>
            <span>자세히</span>
          </div>
          <div className="agree-box">
            <div className="info-agree-box">
              <input id="all-agree" type="checkbox" />
              <label htmlFor="all-agree">
                개인정보 및 수집 이용 동의 (필수)
              </label>
            </div>
            <span>자세히</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewSignUpForm;
