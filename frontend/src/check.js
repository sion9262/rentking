import React, { useState} from "react";

const Check = () => {
    const formData = [
        {id: 1, name: "일반룸"},
        {id: 2, name: "풀옵션"},
        {id: 3, name: "사무실"},
        {id: 4, name: "상가"},
        {id: 5, name: "오피스텔"},
        {id: 6, name: "아파트"},
    ];

    const [isChecked, setIsChecked] = useState(false); //체크 여부
    const [checkedItems, setCheckedItems] = useState(new Set()); // 체크된 요소들

    const checkHandler = ({ target }) => {
        setIsChecked(!isChecked);
        checkedItemHandler(target.parentNode, target.value, target.checked);
    };

    const checkedItemHandler = (box, id, isChecked) => {
        if (isChecked){ //체크 되었을 때
            checkedItems.add(id); //체크시 삽입
            setCheckedItems(checkedItems); //체크 요소 넣어주기
            box.style.backgroundColor = "skyblue"; //스타일 변경        
        } else if (!isChecked && checkedItems.has(id)){ //체크 안 되고, id가 있을때 (2번 클릭시)
            checkedItems.delete(id);//두번 누르면 삭제
            setCheckedItems(checkedItems);
            box.style.backgroundColor = "#fff";
        }
        return checkedItems;
    };
    return (
        <div className="contStyle">
            {formData.map((item) => (
                <label key={item.id} className="innerBox">
                    <input
                        type="checkbox"
                        value={item.name}
                        onChange={(e) => checkHandler(e)}
                    />
                    <div>{item.name}</div>
                </label>
            ))}
        </div>
    );
};

export default Check;