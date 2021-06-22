import React, { useState, useContext, useEffect } from "react";


export default function Input() {
  const [text, setText] = useState("");
  const [charCount, setCharCount] = useState(0);
//   const [wordCount, setWordCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);
  const [paragraphCount, setParagraphCount] = useState(0);



  const isWord = (str) => {
    var alphaNumericFound = false;
    for (var i = 0; i < str.length; i++) {
      var code = str.charCodeAt(i);
      if (
        (code > 47 && code < 58) || // numeric (0-9)
        (code > 64 && code < 91) || // upper alpha (A-Z)
        (code > 96 && code < 123)
      ) {
        // lower alpha (a-z)
        alphaNumericFound = true;
        return alphaNumericFound;
      }
    }
    return alphaNumericFound;
  };

  //word counter
  const wordCounter = (words) => {
    var words = text.value.split(" ");
    var wordCount = 0;
    for (var i = 0; i < words.length; i++) {
      if (words[i] !== " " && isWord(words[i])) {
        wordCount++;
      }
    }
    words.value = wordCount;
  };





  return (
    <div>

       <textarea
        type="text"
        rows={5}
        className="full_height_Width"
        onChange={e => setCharCount(e.target.value.length)}
      />
      <p>  <strong>Character Count:</strong> {charCount}</p>
      <br/>
      <p>  <strong>Word Count:</strong> {wordCounter}</p>
      <br/>
      <p>  <strong>Sentence Count:</strong> {sentenceCount}</p>
      <br/>
      <p>  <strong>Paragraph Count:</strong> {paragraphCount}</p>
      <br/>
    </div>
  );
}
