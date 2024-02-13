import React, { FC } from "react";
import "./main-div.css";
interface TitleProps {}

const Title: FC<TitleProps> = () => {
  return (
    <>
      <div className="center">
        Password Generator<br></br>
        <div className="output">OUTPUT GOES HERE</div>
        <form>
          <label>Password Length:   <input type="number" name="Length"/></label><br></br>
          <label>Add Uppercase Letters <input type="checkbox"></input></label><br></br>
          <label>Add Lowercase Letters <input type="checkbox"></input></label><br></br>
          <label>Include Numbers <input type="checkbox"></input></label><br></br>
          <label>Include Symbols <input type="checkbox"></input></label><br></br>
          <button type="submit">Generate Password</button>
          
        </form>
      </div>
    </>
  );
};

export default Title;
