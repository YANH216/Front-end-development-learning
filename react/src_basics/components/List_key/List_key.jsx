import React from "react";

function ListItem(props) {
    return <li>{ props.value }</li>
}


// key帮助React识别哪些元素改变了 所以需要给数组中的元素赋一个确定的标识
function NumberList(props) {
    const numbers = props.numbers;
    const listItem = numbers.map((number) => 
        <ListItem key= {number.toString()}  value= {number}/>
    ); // key 值 只需要在兄弟元素之间唯一  并不需要全局唯一



    
    /* funtion NumberList(props) {
        const numbers = props.numbers;
        <ul>
            {numbers.map((number) =>
                <ListItem key= {number.toString()} value= {number} />
            )}
        </ul>
        } */
        
// jsx中{} 内可以嵌入任何表达式  所以可以直接内联map 去掉下方return


        return (
        <ul>
            {listItem}
        </ul>
    );

}


export default NumberList;

