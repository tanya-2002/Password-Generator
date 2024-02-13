import React, { FC, useState } from "react";
import "./main-div.css";
interface TitleProps {}

const Title: FC<TitleProps> = () => {
  const [passwordLength, setPasswordLength] = useState<number>(6);
  const [uppercase, setUppercase] = useState<boolean>(false);
  const [lowercase, setLowercase] = useState<boolean>(false);
  const [number, includeNumber] = useState<boolean>(false);
  const [symbols, includeSymbols] = useState<boolean>(false);

  const handleLength = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setPasswordLength(value);
    }
  };
  const handleUppercase = () => {
    setUppercase(!uppercase);
  };
  const handleLowercase = () => {
    setLowercase(!lowercase);
  };
  const handleNumber = () => {
    includeNumber(!number);
  };
  const handleSymbols = () => {
    includeSymbols(!symbols);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    console.log("form submitted");
    console.log(passwordLength);
    console.log(uppercase);
    console.log(lowercase);
    console.log(number);
    console.log(symbols);
    // Submit the form data here
  };
  return (
    <>
      <div className="center">
        Password Generator<br></br>
        <div className="output">OUTPUT GOES HERE</div>
        <form onSubmit={handleSubmit}>
          <label>
            Password Length:{" "}
            <input
              type="number"
              id="Length"
              value={passwordLength}
              onChange={handleLength}
            />
          </label>
          <br></br>
          <label>
            Add Uppercase Letters{" "}
            <input
              type="checkbox"
              checked={uppercase}
              onChange={handleUppercase}
            ></input>
          </label>
          <br></br>
          <label>
            Add Lowercase Letters{" "}
            <input
              type="checkbox"
              checked={lowercase}
              onChange={handleLowercase}
            ></input>
          </label>
          <br></br>
          <label>
            Include Numbers{" "}
            <input
              type="checkbox"
              checked={number}
              onChange={handleNumber}
            ></input>
          </label>
          <br></br>
          <label>
            Include Symbols{" "}
            <input
              type="checkbox"
              checked={symbols}
              onChange={handleSymbols}
            ></input>
          </label>
          <br></br>
          <button type="submit">Generate Password</button>
        </form>
      </div>
    </>
  );
};

export default Title;
