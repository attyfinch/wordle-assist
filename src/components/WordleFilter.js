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
                    <div>
                        <label> Letters Found
                            <input
                                value={filter.pos1}
                                onChange={onChange}
                                name='pos1'
                                type='text'
                                className="position-input"
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
                </div>

                <div>
                    <label>Letters Included
                        <input
                            value={filter.include}
                            onChange={onChange}
                            name='include'
                            type='text'
                            className="regular-input"
                        />
                    </label>
                <div/>

                <div>
                    <label>Letters Eliminated
                        <input
                            value={filter.exclude}
                            onChange={onChange}
                            name='exclude'
                            type='text'
                            className="regular-input"
                        />
                    </label>
                </div>

                <div>
                    <label>Exclude 1st Letter
                        <input
                            value={filter.char1Exclude}
                            onChange={onChange}
                            name='char1Exclude'
                            type='text'
                            className="regular-input"
                        />
                    </label>
                </div>

                <div>
                    <label>Exclude 2nd Letter
                        <input
                            value={filter.char2Exclude}
                            onChange={onChange}
                            name='char2Exclude'
                            type='text'
                            className="regular-input"
                        />
                    </label>
                </div>   

                <div>
                    <label>Exclude 3rd Letter
                        <input
                            value={filter.char3Exclude}
                            onChange={onChange}
                            name='char3Exclude'
                            type='text'
                            className="regular-input"
                        />
                    </label>
                </div>               
                
                <div>
                    <div></div>
                    <label> Exclude 4th Letter
                        <input
                            value={filter.char4Exclude}
                            onChange={onChange}
                            name='char4Exclude'
                            type='text'
                            className="regular-input"
                        />
                    </label>
                </div>

                <div>
                    <div></div>
                    <label>Exclude 5th Letter
                        <input
                            value={filter.char5Exclude}
                            onChange={onChange}
                            name='char5Exclude'
                            type='text'
                            className="regular-input"
                        />
                    </label>
                </div>   
            </div>
                <button className="button">Get Words</button>
            </form>
        </div>
    )
};


