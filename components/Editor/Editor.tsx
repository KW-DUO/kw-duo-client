import React, { useState } from 'react';
import Tiptap from './Tiptap';

const Editor = () => {
  const [content, setContent] = useState<string>('');
  const handleContentChange = (reason: string) => {
    setContent(reason);
  };

  return <Tiptap onChange={(newContent: string) => handleContentChange(newContent)} />;
};

export default Editor;
