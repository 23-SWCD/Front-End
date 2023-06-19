import React, { useEffect, useState } from "react";
import tomorrowTheme from "monaco-themes/themes/Solarized-dark.json";

import Editor, { useMonaco } from "@monaco-editor/react";

function SqlQueryEditor() {
  const monaco = useMonaco();
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!monaco) return;

    monaco.editor.defineTheme("Solarized-dark", tomorrowTheme);
    monaco.editor.setTheme("Solarized-dark");
  }, [monaco]);

  const handleEditorChange = (value) => {
    setQuery(value);
    // 입력된 값 업데이트
  };

  return (
    <Editor
      width="50%"
      height="100.2%"
      defaultLanguage="sql"
      defaultValue="
      SELECT * FROM "
      theme="Solarized-dark"
      onChange={handleEditorChange}
      options={{
        fontSize: 20,
        minimap: { enabled: false },
        scrollbar: {
          vertical: "auto",
          horizontal: "auto",
        },
      }}
    />
  );
}
export default SqlQueryEditor;
