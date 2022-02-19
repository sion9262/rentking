import { CKEditor } from "ckeditor4-react";
import React, { useState } from "react";
const headers = { withCredentials: true };

function WriteForm() {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    const writeBoard = () => {    
        if (title === "" || title === undefined) {
          alert("제목을 입력해주세요.");
          return;
        } else if (content === "" || content === undefined) {
          alert("내용을 입력해주세요.");
          return;
        }

        const send_param = {
            headers,
            content: content, //키값 : 벨류값
            title: title
          };

    }

    return (
        <div className="App">
        <h2><strong>WriteBoard</strong></h2>
        <input type="text" placeholder="글 제목을 입력해주세요" onChange={setTitle} required/>
        <CKEditor
          onChange={setContent}
        ></CKEditor>
        <input type="submit" value="작성하기"/>
      </div>
    )
}

export default WriteForm;