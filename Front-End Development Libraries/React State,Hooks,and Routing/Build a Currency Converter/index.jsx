const { useState, useMemo } = React;

export function CurrencyConverter() {
  const rates = {
    USD: 1,
    EUR: 0.92,
    GBP: 0.78,
    JPY: 156.7,
  };

  const [amount, setAmount] = useState(100);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");

  const amountInUsd = useMemo(() => {
    return Number(amount) / rates[fromCurrency];
  }, [amount, fromCurrency]);

  const convertedAmount = amountInUsd * rates[toCurrency];

  return (
    <div>
      <h1>Currency Converter</h1>

      <input
        type="number"
        value={amount}
        onChange={(event) => setAmount(event.target.value)}
      />

      <select
        value={fromCurrency}
        onChange={(event) => setFromCurrency(event.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
      </select>

      <select
        value={toCurrency}
        onChange={(event) => setToCurrency(event.target.value)}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
      </select>

      <p>
        {convertedAmount.toFixed(2)} {toCurrency}
      </p>
    </div>
  );
}