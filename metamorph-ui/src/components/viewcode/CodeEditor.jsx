import MonacoEditor from 'react-monaco-editor';

function CodeEditor({ code }) {
  return (
    <MonacoEditor
      height="100vh"
      width="100%"
      language="" // Set the language for syntax highlighting (e.g., javascript, html, css)
      theme="vs" // Set the editor theme (e.g., vs, vs-dark)
      value={code} // Pass the generated code to be displayed
      options={{
        readOnly: true, // Make the editor read-only
      }}
    />
  );
}


export default CodeEditor;