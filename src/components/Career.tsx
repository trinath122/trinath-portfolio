import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career, <span>education, &</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Engineer</h4>
                <h5>Dexcom</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Pioneered production-grade GenAI applications using GPT, Claude, LangChain, and LangGraph — fine-tuning LLMs (SFT, LoRA/PEFT) and architecting RAG systems integrating real-time data streams via Kafka and Spark/PySpark.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Engineer</h4>
                <h5>Virtusa</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Designed and deployed production ML solutions for credit-risk modeling and fraud detection using Python, PyTorch, XGBoost, and Scikit-learn. Built robust data pipelines using Spark/PySpark, Airflow, and Kafka.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Master's in Data Intelligence</h4>
                <h5>University of South Florida</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Focused on advanced coursework in Artificial Intelligence, Machine Learning, Data Structures, and Cloud Computing. Graduated with a strong foundation in scalable algorithms and software architecture.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor's in Electronics &amp; Communication</h4>
                <h5>Institute of Aeronautical Engineering</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Developed a strong foundation in hardware-software integration, signal processing, and foundational programming. Built early machine learning models for embedded systems.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
