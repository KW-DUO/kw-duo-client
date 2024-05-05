'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Toolbar from './Toolbar';
import Underline from '@tiptap/extension-underline';
import Placeholder from '@tiptap/extension-placeholder';
import { useEffect } from 'react';

type TiptapProps = {
  onChange: (newContent: string) => void;
  toggleState: boolean;
};

const Tiptap = ({ onChange, toggleState }: TiptapProps) => {
  const handleChange = (newContent: string) => {
    onChange(newContent);
  };

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Placeholder.configure({
        placeholder: `
          [개발 프로젝트 모집 내용 예시]
          프로젝트 주제:
          프로젝트 목표:
          프로젝트 소개:
          프로젝트 관련 주의사항:
          프로젝트 포지션별 모집인원:
          기술 스택:
        `,
      }),
    ],
    content: '',
    editorProps: {
      attributes: {
        class:
          'flex flex-col px-4 py-3 justify-start border-b border-r border-l border-gray-400 items-start w-full font-medium text-[16px] pt-4 rounded-bl-md rounded-br-md outline-none',
      },
    },
    onUpdate: ({ editor }) => {
      handleChange(editor.getHTML());
    },
  });
  
  useEffect(() => {
    if (editor) {
      editor.commands.setContent(''); // toggleState가 변경될 때마다 에디터 내용을 초기화합니다.
    }
  }, [toggleState, editor]);

  return (
    <div className="w-full">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
