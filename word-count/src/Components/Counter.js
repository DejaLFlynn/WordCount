import React, { useState } from "react";
import './Counter.css'

export default function Counter() {
  const [text, setText] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);
  const [paragraphCount, setParagraphCount] = useState(0);
  const [bigramCount, setBigramCount] = useState(0);

  const setAllCounts = (value) => {
    const trimmedValue = value.trim();
    const words = trimmedValue.split(" ");
    const sentences = trimmedValue.split(".");
    const paragraphs = trimmedValue.split(/\r?\n|\r/);
    const countUniqueWords = () => {
      const words = new Set();
      let value = text;
      value.toLowerCase().replace(/\w+/g, (word) => words.add(word));
      return words.size;
    };

    setText(value);
    setCharCount(trimmedValue.length);
    setWordCount(value === "" ? 0 : words.length);
    setSentenceCount(value === "" ? 0 : sentences.length);
    setParagraphCount(value === "" ? 0 : paragraphs.length);
    setBigramCount(countUniqueWords);
  };

  const handleChange = (e) => setAllCounts(e.target.value);
  return (
    <div>
     
        
      
      <textarea rows="15"  onChange={handleChange} value={text}
      className="text-area"
      style={{width:'70%'}}
      ></textarea>

      <p className="counts">
      
        <strong>Character Count:</strong> {charCount}
        <br />
        <strong>Word Count:</strong> {wordCount}
        <br />
        <strong>Sentence Count:</strong> {sentenceCount}
        <br />
        <strong>Paragraph Count:</strong> {paragraphCount}
        <br />
        <strong>*Press Enter* to get Bigram count:</strong> {bigramCount}
      </p>
    </div>
  );
}
