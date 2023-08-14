import React from "react";


export default function WordleFilter(props) {
    const {change, filter, submit} = props;

    const onChange = evt => {
        const { name, value } = evt.target;
        const valueToUse = value;
        change(name, valueToUse)
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit()
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <label className='posLabel' > Letters Found
                    <input
                        value={filter.pos1}
                        onChange={onChange}
                        name='pos1'
                        type='text'
                        className="position-input"
                        id="pos1"
                        
                    />
                </label>
                <label>
                    <input
                        value={filter.pos2}
                        onChange={onChange}
                        name='pos2'
                        type='text'
                        className="position-input"
                    />
                </label>
                <label>
                    <input
                        value={filter.pos3}
                        onChange={onChange}
                        name='pos3'
                        type='text'
                        className="position-input"
                    />
                </label>
                <label>
                    <input
                        value={filter.pos4}
                        onChange={onChange}
                        name='pos4'
                        type='text'
                        className="position-input"
                    />
                </label>
                <label>
                    <input
                        value={filter.pos5}
                        onChange={onChange}
                        name='pos5'
                        type='text'
                        className="position-input"
                    />
                </label>
                    
                </div>

                
                <label for="include">Letters in Word</label>
                    <input
                        value={filter.include}
                        onChange={onChange}
                        name='include'
                        type='text'
                        className="include-input"
                    />
                
                <div className="exclude">
                    <h4>Exclude Letters</h4>
                    <div className="excludeAll">
                        <label for='exclude' className="exclude-input">From Word</label>
                            <input
                                value={filter.exclude}
                                onChange={onChange}
                                name='exclude'
                                type='text'
                                className="exclude-input"
                            />
                    </div>


                    <div className="excludeByLetter">
                        <label for="char1Exclude">L1</label>
                            <input
                                value={filter.char1Exclude}
                                onChange={onChange}
                                name='char1Exclude'
                                type='text'
                                className="exLetter"
                            />

                        <label for="char2Exclude">L2</label>
                            <input
                                value={filter.char2Exclude}
                                onChange={onChange}
                                name='char2Exclude'
                                type='text'
                                className="exLetter"
                            />
                        
                        <label for="char3Exclude">L3</label>   
                            <input
                                value={filter.char3Exclude}
                                onChange={onChange}
                                name='char3Exclude'
                                type='text'
                                className="exLetter"
                            />
                    </div>

                    <div className="excludeByLetter">
                        <label for="char4Exclude">L4</label>
                            <input
                                value={filter.char4Exclude}
                                onChange={onChange}
                                name='char4Exclude'
                                type='text'
                                className="exLetter"
                            />
                        
                
                        <label for="char5Exclude">L5</label>
                            <input
                                value={filter.char5Exclude}
                                onChange={onChange}
                                name='char5Exclude'
                                type='text'
                                className="exLetter"
                            />
                        
                    </div>            
                </div>
                <div className="button-container">
                    <button className="button">Get Words</button>
                </div>  
            </form>
        </div>
    )
};


