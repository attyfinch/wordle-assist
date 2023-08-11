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
                    <div>Letters Found</div>
                    <div >
                        <label>
                            <input
                                value={filter.pos1}
                                onChange={onChange}
                                name='pos1'
                                type='text'
                                className="position"
                            />
                        </label>
                        <label>
                            <input
                                value={filter.pos2}
                                onChange={onChange}
                                name='pos2'
                                type='text'
                                className="position"
                            />
                        </label>
                        <label>
                            <input
                                value={filter.pos3}
                                onChange={onChange}
                                name='pos3'
                                type='text'
                                className="position"
                            />
                        </label>
                        <label>
                            <input
                                value={filter.pos4}
                                onChange={onChange}
                                name='pos4'
                                type='text'
                                className="position"
                            />
                        </label>
                        <label>
                            <input
                                value={filter.pos5}
                                onChange={onChange}
                                name='pos5'
                                type='text'
                                className="position"
                            />
                        </label>
                    </div>
                </div>

                <div>
                    <div>Letters Included</div>
                    <label>
                        <input
                            value={filter.include}
                            onChange={onChange}
                            name='include'
                            type='text'
                            className="included"
                        />
                    </label>
                <div/>

                <div>
                    <div>Letters Eliminated</div>
                    <label>
                        <input
                            value={filter.exclude}
                            onChange={onChange}
                            name='exclude'
                            type='text'
                            className="eliminated"
                        />
                    </label>
                </div>

                <div>
                    <div>Exlude - 1st Position</div>
                    <label>
                        <input
                            value={filter.char1Exclude}
                            onChange={onChange}
                            name='char1Exclude'
                            type='text'
                        />
                    </label>
                </div>

                <div>
                    <div>Exlude - 2nd Position</div>
                    <label>
                        <input
                            value={filter.char2Exclude}
                            onChange={onChange}
                            name='char2Exclude'
                            type='text'
                        />
                    </label>
                </div>   

                <div>
                    <div>Exlude - 3rd Position</div>
                    <label>
                        <input
                            value={filter.char3Exclude}
                            onChange={onChange}
                            name='char3Exclude'
                            type='text'
                        />
                    </label>
                </div>               
                
                <div>
                    <div>Exlude - 4th Position</div>
                    <label>
                        <input
                            value={filter.char4Exclude}
                            onChange={onChange}
                            name='char4Exclude'
                            type='text'
                        />
                    </label>
                </div>

                <div>
                    <div>Exlude - 5th Position</div>
                    <label>
                        <input
                            value={filter.char5Exclude}
                            onChange={onChange}
                            name='char5Exclude'
                            type='text'
                        />
                    </label>
                </div>   
        


            </div>


                <button>Get Words</button>
            </form>
        </div>
    )
};


