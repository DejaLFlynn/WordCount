import React, { useState } from "react";

export default function Counter() {
  const [text, setText] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);
  const [paragraphCount, setParagraphCount] = useState(0);

  const removeBreaks = (arr) => {
    const index = arr.findIndex((el) => el.match(/\r?\n|\r/g));

    if (index === -1) return arr;

    const newArray = [
      ...arr.slice(0, index),
      ...arr[index].split(/\r?\n|\r/),
      ...arr.slice(index + 1, arr.length),
    ];

    removeBreaks(newArray);
  };
  const removeEmptyElements = (arr) => {
    const index = arr.findIndex((el) => el.trim() === "");

    if (index === -1) return arr;

    arr.splice(index, 1);

    return removeEmptyElements(arr);
  };

  const setCounts = (value) => {
    const trimmedValue = value.trim();
    const words = (trimmedValue.split(" "));
    const sentences = (trimmedValue.split("."));
    const paragraphs = (trimmedValue.split(/\r?\n|\r/));
    // var findOcurrences = function(text, first, second) {
    
    //     var result = [];
    //     text = text.split(" ");
    
    //     while(text.length !== 0){
    //         // If the text first two elements are first and second, the third element is not undefined
    //         if(text[0] === first && text[1] === second && text[2] !== undefined){
    //                          The third element // push result
    //             result.push(text[2]);
    //                          // Remove the first two elements
    //             text.shift();
    //             text.shift();
    //         }else{
    //                          // otherwise removes the first element
    //             text.shift();
    //         }
    //     }
    
    //     return result;
    // };
    


    setText(value);
    setCharCount(trimmedValue.length);
    setWordCount(value === "" ? 0 : words.length);
    setSentenceCount(value === "" ? 0 : sentences.length);
    setParagraphCount(value === "" ? 0 : paragraphs.length);

  };

  const handleChange = (e) => setCounts(e.target.value);
  return (
    <div>
      <textarea rows="15" onChange={handleChange} value={text}></textarea>
      <p>
        <strong>Character Count:</strong> {charCount}
        <br />
        <strong>Word Count:</strong> {wordCount}
        <br />
        <strong>Sentence Count:</strong> {sentenceCount}
        <br />
        <strong>Paragraph Count:</strong> {paragraphCount}
      </p>
    </div>
  );
}

