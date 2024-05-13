import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [deposit, setDeposit] = useState(0);
  const [riskAmount, setRiskAmount] = useState(0);
  const [riskPercentage, setRiskPercentage] = useState(1);
  const [riskMovePercentage, setRiskMovePercentage] = useState(0);
  const [shoulder, setShoulder] = useState(1);
  const [position, setPosition] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    setRiskAmount((deposit * riskPercentage) / 100);
  }, [deposit, riskPercentage]);

  const handleDepositChange = (e) => setDeposit(e.target.value);

  const handleRiskInputChange = (e) => setRiskPercentage(e.target.value);

  const handleRiskMovePercentage = (e) => setRiskMovePercentage(e.target.value);

  const handleShoulderChange = (e) => setShoulder(e.target.value);

  const handleButtonClick = () => {
    if (!deposit || !riskAmount || !riskMovePercentage) {
      setError("Вставь валидные значения");
      return;
    }
    const result = (deposit / riskMovePercentage / shoulder).toFixed(0);
    if (result) {
      setPosition((deposit / riskMovePercentage / shoulder).toFixed(0));
      setError("");
    }
  };

  return (
    <div className="main">
      <div className="paper">
        <div className="wrapper">
          <div className="calculation">
            <div className="deposit cell">
              <span>Депозит</span>
              <div>
                <input
                  className="input deposit-input"
                  type="number"
                  value={deposit}
                  onChange={handleDepositChange}
                />
                $
              </div>
            </div>
            <div className="risk cell">
              <div>
                <span>Риск</span>
                <input
                  className="input risk-percentage-input"
                  type="number"
                  value={riskPercentage}
                  onChange={handleRiskInputChange}
                />
                <span>%</span>
              </div>
              <div>
                <input
                  className="input risk-result-input"
                  type="number"
                  value={riskAmount}
                  onChange={() => {}}
                />
                $
              </div>
            </div>
            <div className="risk-percentage-move cell">
              <span>Риск % от движения</span>
              <div>
                <input
                  className="input risk-percentage-move-input"
                  type="number"
                  value={riskMovePercentage}
                  onChange={handleRiskMovePercentage}
                />
                %
              </div>
            </div>
            <div className="shoulder cell">
              <span>Плечо</span>
              <div>
                <input
                  className="input shoulder-input"
                  type="number"
                  value={shoulder}
                  onChange={handleShoulderChange}
                />
                x
              </div>
            </div>
          </div>
          <div className="results">
            <div className="position">
              <p>Размер позиции</p>
              <p className="position-value">{position}$</p>
            </div>
          </div>
        </div>
        <div className="button">
          <button type="button" onClick={handleButtonClick}>
            Рассчитать
          </button>
        </div>
        <div className="error">
          <p>{error}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
