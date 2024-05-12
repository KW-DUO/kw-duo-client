import React, { forwardRef, useEffect, useState } from 'react';
import Tiptap from './Tiptap';

interface EditorProps {
  onChange: (content: string) => void;
  toggleState: boolean;
  value?: string;
}

const Editor = forwardRef(({ onChange, value, toggleState }: EditorProps, ref) => {
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    setContent(value || '');
  }, [value]);

  const handleContentChange = (newValue: string) => {
    setContent(newValue);
    onChange(newValue);
  };

  return (
    <Tiptap onChange={(newContent) => handleContentChange(newContent)} toggleState={toggleState} />
  );
});

// Editor 컴포넌트에 명시적으로 displayName 설정하기
Editor.displayName = 'Editor';

export default Editor;
