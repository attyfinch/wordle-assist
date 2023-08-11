import React from "react";


function WordsList(props) {
    const { word, id } = props;

    return (
        <div key={id}>
            {word}
        </div>
    )
};

export default WordsList;