import React, { forwardRef } from 'react';
import Tiptap from './Tiptap';

type EditorProps = {
  onChange: (content: string) => void;
  toggleState: boolean;
  initialValue?: string;
};

const Editor = forwardRef(({ onChange, toggleState, initialValue }: EditorProps) => {
  const handleContentChange = (newValue: string) => {
    onChange(newValue);
  };

  return (
    <Tiptap
      onChange={(newContent) => handleContentChange(newContent)}
      toggleState={toggleState}
      initialValue={initialValue ?? ''}
    />
  );
});

// Editor 컴포넌트에 명시적으로 displayName 설정하기
Editor.displayName = 'Editor';

export default Editor;
