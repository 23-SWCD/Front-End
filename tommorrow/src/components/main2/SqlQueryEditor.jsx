import React, { useEffect } from "react";
import tomorrowTheme from "monaco-themes/themes/Solarized-dark.json";

import Editor, { useMonaco } from "@monaco-editor/react";

function SqlQueryEditor() {
  const monaco = useMonaco();
  // 내가 사용할 모나코 인스턴스를 생성한다.

  useEffect(() => {
    if (!monaco) return;
    // 모나코 인스턴스가 null이면 early return을 해준다.

    monaco.editor.defineTheme("Solarized-dark", tomorrowTheme);
    // 내가 원하는 이름으로 테마를 define해준다.
    // 나는 'tomorrow'라는 이름으로 monaco-themes에서 받아온 Tomorrow라는 테마를 define해 준 것이다.

    monaco.editor.setTheme("Solarized-dark");
    // 내가 사용하는 모나코 에디터에 테마를 적용해준다.
  }, [monaco]);
  return (
    <div
      style={{
        height: "100%",
        width: "50%",
        display: "flex",
        flex: 1,
      }}
    >
      <Editor
        width="100%"
        height="100%"
        defaultLanguage="sql"
        defaultValue="SELECT "
        theme="Solarized-dark"
        options={{
          fontSize: 20,
          minimap: { enabled: false },
          scrollbar: {
            vertical: "auto",
            horizontal: "auto",
          },
        }}
      />
    </div>
  );
}
export default SqlQueryEditor;
