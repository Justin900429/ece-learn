import React from 'react';
import "./List.module.css"
import ListElement from "./ListElement";

const List = (props) => {
    return (
        <table>
            <thead style={{top: `${props.stickyTop}px`}}>
            <tr>
                <th key="1">#</th>
                <th key="2">年級</th>
                <th key="3">年份</th>
                <th key="4">科目</th>
                <th key="5">科目教師</th>
                <th key="6">類別</th>
                <th key="7">檔案</th>
            </tr>
            </thead>
            <tbody>

            {props.items.map((item, index) => (
                <ListElement key={index + 1} item={item} index={index}/>
            ))}
            </tbody>
        </table>
    );
};

export default List;