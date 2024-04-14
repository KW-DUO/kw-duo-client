'use client';

import React from 'react';
import { type Editor } from '@tiptap/react';
import {
  Bold,
  Strikethrough,
  Italic,
  List,
  ListOrdered,
  Underline,
  Quote,
  Heading1,
  Heading2,
  Heading3,
} from 'lucide-react';

// "@radix-ui/react-icons" -> "list ordered가 없음"

type Props = {
  editor: Editor | null;
  content: string;
};

const Toolbar = ({ editor, content }: Props) => {
  if (!editor) {
    return null;
  }
  return (
    <div
      className="px-4 py-3 rounded-tl-md rounded-tr-md flex justify-between items-start
    gap-5 w-full flex-wrap border border-gray-400"
    >
      <div className="flex justify-start items-center gap-5 w-full lg:w-10/12 flex-wrap h-10 text-black">
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBold().run();
          }}
          className={
            editor.isActive('bold')
              ? 'bg-black text-white p-2 rounded-lg'
              : 'p-2 hover:bg-slate-300 rounded-lg'
          }
        >
          <Bold className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleItalic().run();
          }}
          className={
            editor.isActive('italic')
              ? 'bg-black text-white p-2 rounded-lg'
              : 'p-2 hover:bg-slate-300 rounded-lg'
          }
        >
          <Italic className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleUnderline().run();
          }}
          className={
            editor.isActive('underline')
              ? 'bg-black text-white p-2 rounded-lg'
              : 'p-2 hover:bg-slate-300 rounded-lg'
          }
        >
          <Underline className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleStrike().run();
          }}
          className={
            editor.isActive('strike')
              ? 'bg-black text-white p-2 rounded-lg'
              : 'p-2 hover:bg-slate-300 rounded-lg'
          }
        >
          <Strikethrough className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleHeading({ level: 1 }).run();
          }}
          className={
            editor.isActive('heading', { level: 1 })
              ? 'bg-black text-white p-2 rounded-lg'
              : 'p-2 hover:bg-slate-300 rounded-lg'
          }
        >
          <Heading1 className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleHeading({ level: 2 }).run();
          }}
          className={
            editor.isActive('heading', { level: 2 })
              ? 'bg-black text-white p-2 rounded-lg'
              : 'p-2 hover:bg-slate-300 rounded-lg'
          }
        >
          <Heading2 className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleHeading({ level: 3 }).run();
          }}
          className={
            editor.isActive('heading', { level: 3 })
              ? 'bg-black text-white p-2 rounded-lg'
              : 'p-2 hover:bg-slate-300 rounded-lg'
          }
        >
          <Heading3 className="w-5 h-5" />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBulletList().run();
          }}
          className={
            editor.isActive('bulletList')
              ? 'bg-black text-white p-2 rounded-lg'
              : 'p-2 hover:bg-slate-300 rounded-lg'
          }
        >
          <List className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleOrderedList().run();
          }}
          className={
            editor.isActive('orderedList')
              ? 'bg-black text-white p-2 rounded-lg'
              : 'p-2 hover:bg-slate-300 rounded-lg'
          }
        >
          <ListOrdered className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBlockquote().run();
          }}
          className={
            editor.isActive('blockquote')
              ? 'bg-black text-white p-2 rounded-lg'
              : 'p-2 hover:bg-slate-300 rounded-lg'
          }
        >
          <Quote className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
