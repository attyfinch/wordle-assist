import React from "react";


function WordsList(props) {
    const { words } = props;

    return (
        <div>
            {words.map((ele) => ele.word)}
        </div>
    )
};

export default WordsList;