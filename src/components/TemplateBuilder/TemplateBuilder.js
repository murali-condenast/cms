import React, { useRef } from 'react';
import Button from '@mui/material/Button';

import EmailEditor from 'react-email-editor';

export default function App(props) {
  const emailEditorRef = useRef(null);

  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;
      console.log('exportHtml', html);
    });
  };

  const onLoad = () => {
    // editor instance is created
    // you can load your template here;
    // const templateJson = {};
    // emailEditorRef.current.editor.loadDesign(templateJson);
  }

  const onReady = () => {
    // editor is ready
    console.log('onReady');
  };

  return (
    <div>
      <EmailEditor ref={emailEditorRef} onLoad={onLoad} onReady={onReady} />
      <div style={{textAlign: "center", paddingTop: "1rem"}}>        
        <Button variant="contained" onClick={exportHtml}>Save as template</Button>
      </div>
    </div>
  );
};