'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Toolbar from './Toolbar';
import Underline from '@tiptap/extension-underline';
import Placeholder from '@tiptap/extension-placeholder';
import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

type TiptapProps = {
  onChange: (newContent: string) => void;
  toggleState: boolean;
  initialValue: string;
};

const Tiptap = ({ onChange, toggleState, initialValue }: TiptapProps) => {
  const { t } = useTranslation();

  const handleChange = (newContent: string) => {
    onChange(newContent);
  };

  const getPlaceholderText = useCallback(() => {
    return toggleState ? t('editor.projectPlaceholder') : t('editor.introPlaceholder');
  }, [toggleState, t]);

  // Tiptap 에디터 초기화
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Placeholder.configure({
        placeholder: getPlaceholderText(),
      }),
    ],
    content: '', // 초기값 설정
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
    if (editor && initialValue !== '') {
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
