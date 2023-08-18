import React from "react";

export default function About() {
    return (
        <>
        <div className="about-page">
            <div className="about-block">
                WordleAssist is a simple app that helps solve Wordle games. Filling out and submitting the filter will reveal all possible correct answers that remain.
            </div>
            <div className="about-block">
                Below is a brief explanation of how each filter field works.
            </div>
            <div className="about-block">
                <strong>Letters Found</strong>
                <div>This maps to the 5 positional tiles of Wordle games. This is where you place green letters, or letters where the exact position is known.</div>
            </div>
            <div className="about-block">
                <strong>Letters in Word</strong>
                <div>This maps to the yellow tiles of Wordle games. Place letters here you know the word contains, but the exact position is unknown.</div>
            </div>
            <div className="about-block">
                <strong>Exclude Letters - From Word</strong>
                <div>Place letters here you know the word does not contain.</div>
            </div>
            <div className="about-block">
                <strong>Exclude Letters - L1, L2, L3, L4 and L5</strong>
                <div>
                    Each field corresponds to a position in the word. For example, L1 refers to position 1, L2 to position 2, and so on. 
                </div>
                <br></br>
                <div>
                Place letters here that you know the word contains, but do not know the exact position of. As an example, imagine you know the word contains the letter A, but you know that it is not L1 or L2. You would put the letter A in these two fields. All words where letter A appears at these positions will be eliminated from the results returned.
                </div>
            </div>
            <div className="about-block">
                <strong>Resetting the Filter</strong>
                <div>Refresh the page to start over.</div>
            </div>
        </div>
        </>
    )
}