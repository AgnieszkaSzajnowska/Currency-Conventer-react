import React, { useState } from "react";
import { Result } from "./Result";
import { Button, Header, Field, LabelText, Loading, Failure } from "./styled";
import { useRatesData } from "./useRatesData";

export const Form = () => {
  const [result, setResult] = useState();
  const ratesData = useRatesData();

  const calculateResult = (currency, amount) => {
    const rate = ratesData.rates[currency].value;
    
    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
    });
  }

  const [currency, setCurrency] = useState("EUR");
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  }

  return (
    <form onSubmit={onSubmit}>
      <Header>Przelicznik Walut</Header>
      {ratesData.state === "loading" 
        ? (
          <Loading>Ładuję kursy walut. Proszę czekać</Loading>
        )
        : (
          ratesData.state === "error" ? (
            <Failure>Coś poszło nie tak. Spróbuj ponownie później.</Failure>
          ) : (
            <>
              <p>
                <label>
                  <LabelText>Kwota w zł:</LabelText>
                  <Field
                    value={amount}
                    onChange={({ target }) => setAmount(target.value)}
                    placeholder="Wpisz wartość w zł"
                    type="number"
                    required
                    step="0.01"
                    min="0.01"
                  />
                </label>
              </p>
              <p>
                <label>
                  <LabelText>Waluta:</LabelText>
                  <Field
                    as="select"
                    value={currency}
                    onChange={({ target }) => setCurrency(target.value)}
                  >
                      {!!ratesData.rates && Object.keys(ratesData.rates).map(((currency) => (
                      <option
                        key={currency}
                        value={currency}
                      >
                        {currency}
                      </option>
                    )))}
                  </Field>
                </label>
              </p>
              <p>
                <Button>Przelicz</Button>
              </p>
              <Result result={result} />
            </>
          )
        )}
    </form>
  );
};

