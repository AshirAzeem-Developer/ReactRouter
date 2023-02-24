import Button from "@mui/material/Button";
import { useState } from "react";

function TextForm(props) {
  const handleChange = (event) => {
    setText(event.target.value);
    // console.log(event.target.value);
  };

  const HandleTextVariant = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const clearTextField = () => {
    setText("");
  };

  let [text, setText] = useState("Enter Text Here");
  let { placeHolder } = props;

  return (
    <>
      <div className="container">
        <div className="row">
          <h1>Enter the text To Analyze Below</h1>
          <textarea
            name=""
            onChange={handleChange}
            placeholder={placeHolder}
            value={text}
            id=""
            cols="140"
            rows="8"
          ></textarea>
          <div className="d-flex ">
            <Button
              onClick={HandleTextVariant}
              variant="contained"
              className="w-25 p-2 m-2"
            >
              Convert To UpperCase
            </Button>
            <Button
              onClick={clearTextField}
              variant="contained"
              color="error"
              className="w-25 p-2   m-2"
            >
              Clear
            </Button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <h1>Your Text Summary</h1>
          <p>
            {text.split(" ").length}
            &nbsp; Words &nbsp; {text.length} &nbsp; Letters
          </p>
        </div>
      </div>
    </>
  );
}

export default TextForm;
