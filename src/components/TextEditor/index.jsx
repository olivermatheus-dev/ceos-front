import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { useState } from "react";

export function TextEditor() {
  const [value, setValue] = useState("");

  return (
    <div className="">
      <h1>Editor DraftJS</h1>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        style={{ height: "300px" }}
      />
    </div>
  );
}
