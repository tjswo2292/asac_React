import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import "./jobDetailCategory.css";

const JobDetailCategory = () => {
  return (
    <div className="job-category-wrap">
      <div className="job-prev-btn">
        <button>
          <AiOutlineLeft className="left-btn" />
        </button>
      </div>
      <ul className="job-category-container">
        <li className="job-category-item">
          <button>
            <span>연봉이 최고의 복지 🎄</span>
          </button>
        </li>
        <li className="job-category-item">
          <button>
            <span>재택근무 🏠</span>
          </button>
        </li>
        <li className="job-category-item">
          <button>
            <span>퇴사율 10% 이하 📍</span>
          </button>
        </li>
        <li className="job-category-item">
          <button>
            <span>급성장 중 📈</span>
          </button>
        </li>
        <li className="job-category-item">
          <button>
            <span>병역특례 👦</span>
          </button>
        </li>
        <li className="job-category-item">
          <button>
            <span>50인 이하 ⬇️</span>
          </button>
        </li>
        <li className="job-category-item">
          <button>
            <span>50인 이상 ⬆️</span>
          </button>
        </li>
        <li className="job-category-item">
          <button>
            <span>업력 5년 이상 🏢</span>
          </button>
        </li>
        <li className="job-category-item">
          <button>
            <span>유연근무 🕚</span>
          </button>
        </li>
      </ul>
      <div className="job-more-container">
        <button>
          <AiOutlineRight className="right-btn" />
        </button>
      </div>
    </div>
  );
};

export default JobDetailCategory;
