import React, { useState, useContext, useEffect } from "react";
import { useInput } from "./WordCount";

export default function Input() {
  //   const [text, setText] = useState("");
  const text = useInput("");
  const [charCount, setCharCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);
  const [paragraphCount, setParagraphCount] = useState(0);

  const isWord = (str) => {
    var alphaNumericFound = false;
    for (var i = 0; i < str.length; i++) {
      var code = str.charCodeAt(i);
      if (
        (code > 47 && code < 58) ||
        (code > 64 && code < 91) ||
        (code > 96 && code < 123)
      ) {
        alphaNumericFound = true;
        return alphaNumericFound;
      }
    }
    return alphaNumericFound;
  };

  const handleWordCount = () => {
    let input = text.toString();
    let newText = input.split("  ");
    let count = 0;
    for (let i = 0; i < newText.length; i++) {
      if (newText[i] !== " " && isWord(newText[i])) {
        count++;
      }
    }
    setWordCount(count);
  };

  const handleSentenceCount = () => {
    let input = text.toString();
    let newText = input.split(".");
    let count = 0;
    for (let i = 0; i < newText.length; i++) {
      if (newText[i] !== " " && isWord(newText[i])) {
        count++;
      }
    }
    setSentenceCount(count);
  };

  const handleParagraphCount = () => {
    let input = text.toString();
    let newText = input.split(/\r?\n|\r/);
    let count = 0;
    for (let i = 0; i < newText.length; i++) {
      if (newText[i] !== " " && isWord(newText[i])) {
        count++;
      }
    }
    setParagraphCount(count);
  };

  //   const handleWordCount=() =>{
  //     // console.log(typeof(text))
  //     let input = text.toString();
  //     console.log(typeof(input))
  //     input = input.replace(/(^\s*)|(\s*$)/gi,"");
  //     input = input.replace(/[ ]{2,}/gi," ");
  //     input = input.replace(/\n /,"\n");
  //     let newCount=  input.split('  ').length;
  //     // console.log(input.replace(/\n /,"\n"))
  //      setWordCount(newCount)

  //  }

  useEffect(() => {
    handleWordCount();
    handleSentenceCount();
    handleParagraphCount();
  }, []);


  return (
    <div>
      <textarea
        type="text"
        rows={5}
        className="full_height_Width"
        onChange={(e) => setCharCount(e.target.value.length)}
      />
      <p>
        {" "}
        <strong>Character Count:</strong> {charCount}
      </p>
      <br />
      <p>
        {" "}
        <strong>Word Count:</strong> {wordCount}
      </p>
      <br />
      <p>
        {" "}
        <strong>Sentence Count:</strong> {sentenceCount}
      </p>
      <br />
      <p>
        {" "}
        <strong>Paragraph Count:</strong> {paragraphCount}
      </p>
      <br />
    </div>
  );
}
