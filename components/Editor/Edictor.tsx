'use strict'

import React, { useState } from 'react'
import Tiptap from './Tiptap';

const Edictor = () => {
  const [content, setContent] = useState<string>('');
  const handleContentChange = (reason: any) => {
    setContent(reason);
  }

  return (
    <form action="" className="">
      <Tiptap
        content={content}
        onChange={(newContent: string)=> handleContentChange(newContent)}
      />
    </form>
  );
}

export default Edictor