import { useState } from "react"

export default function UserInput() {
  const [totalInvestment, setTotalInvestment] = useState(10000);
  const [annualInvestment, setAnnualInvestment] = useState(1200);
  const [expectedReturn, setExpectedReturn] = useState(6);
  const [duration, setDuration] = useState(10);

  function handleTotalInvestmentChange(event) {
    setTotalInvestment((prevValue) => event.target.value);
  }

  function handleAnnualInvestmentChange(event) {
    setAnnualInvestment((prevValue) => event.target.value);
  }

  function hanldeExpectedReturnChange(event) {
    setExpectedReturn((prevValue) => event.target.value);
  }

  function handleDurationChange(event) {
    setDuration((prevValue) => event.target.value);
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Intial Investment</label>
          <input type='number' onChange={handleTotalInvestmentChange} value={totalInvestment}  required/>
        </p>
        <p>
          <label>Annual Investment</label>
          <input type='number' onChange={handleAnnualInvestmentChange} value={annualInvestment} required/>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input type='number' onChange={hanldeExpectedReturnChange} value={expectedReturn} required/>
        </p>
        <p>
          <label>Duration</label>
          <input type='number' onChange={handleDurationChange} value={duration} required/>
        </p>
      </div>
    </section>
  )   
}