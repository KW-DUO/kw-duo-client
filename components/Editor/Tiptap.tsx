'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Toolbar from './Toolbar';
import Underline from '@tiptap/extension-underline';
import Placeholder from '@tiptap/extension-placeholder';
import { useCallback, useEffect } from 'react';

type TiptapProps = {
  onChange: (newContent: string) => void;
  toggleState: boolean;
  initialValue: string;
};

const Tiptap = ({ onChange, toggleState, initialValue }: TiptapProps) => {
  const handleChange = (newContent: string) => {
    onChange(newContent);
  };

  const getPlaceholderText = useCallback(() => {
    return toggleState
      ? `
          [개발 프로젝트 모집 내용 예시]
          프로젝트 주제:
          프로젝트 목표:
          프로젝트 소개:
          프로젝트 관련 주의사항:
          프로젝트 포지션별 모집인원:
          기술 스택:
        `
      : `
          [자기소개 작성 내용 예시]
          자신의 장점 어필:
          기술 스택 어필:
          관련 경험:
          프로젝트 참여 동기:
          팀과의 협업 경험:
        `;
  }, [toggleState]);

  // Tiptap 에디터 초기화
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Placeholder.configure({
        placeholder: getPlaceholderText(),
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

  // 초기값 변경 시 에디터 내용 업데이트
  useEffect(() => {
    if (editor) {
      editor.commands.setContent(initialValue);
    }
  }, [initialValue, editor]);

  // toggleState(팀원,팀 구하기 토글) 변경 시, 이벤트 처리
  useEffect(() => {
    if (editor) {
      editor.commands.setContent('');

      // Placeholder 확장을 재설정
      editor.extensionManager.extensions.forEach((extension) => {
        if (extension.name === 'placeholder') {
          extension.options.placeholder = getPlaceholderText();
        }
      });
      // 에디터 상태를 업데이트하여 새로운 Placeholder 적용
      editor.view.updateState(editor.state);
    }
  }, [toggleState, editor, getPlaceholderText]);

  return (
    <div className="w-full">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
