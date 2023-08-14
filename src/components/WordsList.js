import React from "react";


function WordsList(props) {
    const { word, id, wordCount} = props;

    return (
        <div key={id} className="word">
            {word}
        </div>
    )
};

export default WordsList;