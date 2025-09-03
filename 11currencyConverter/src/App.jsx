import { useState } from "react";
import { currencyConverter } from "./Api/postApi";

const App = () => {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFormCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //handleConverCurrency

  const handleConverCurrency = async() => {
    try {
      const res = await currencyConverter(fromCurrency, toCurrency, amount);
      const data = await res.data
      setConvertedAmount(0);
      console.log(data);
      
    } catch (error) {
      setError('Error fetching conversion rate')
      console.log(error);
    }
  };

  return (
    <section className="currency-converter">
      <div className="currency-div">
        <h1>Currency Converter</h1>

        <div>
          <label htmlFor="currency_amount">
            Amount:
            <input
              type="number"
              id="currency_amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>
        </div>

        <div className="currency-selector">
          <div>
            <label>
              From:
              <select
                value={fromCurrency}
                onChange={(e) => setFormCurrency(e.target.value)}
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="INR">INR</option>
                <option value="GBP">GBP</option>
                <option value="AUD">AUD</option>
              </select>
            </label>
          </div>

          <div>
            <label>
              TO:
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
              >
                <option value="INR">INR</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="AUD">AUD</option>
              </select>
            </label>
          </div>
        </div>

        <button
          disabled={loading || amount <= 0}
          onClick={handleConverCurrency}
        >
          {loading ? "converting..." : "convert"}
        </button>

        <hr />

        {convertedAmount && (
          <div>
            <h2>
              {amount} {fromCurrency} = {convertedAmount.toFixed(2)}{" "}
              {toCurrency}
            </h2>
          </div>
        )}

        {error && <p>{error}</p>}
      </div>
    </section>
  );
};
export default App;
