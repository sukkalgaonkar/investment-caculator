import InvestmentImage from '../assets/investment-calculator-logo.png'

export default function Header() {
  return (
    <div id='header'>
      <img src={InvestmentImage}></img>
      <h1>Investment Calculator</h1>
    </div>
  )   
}