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
                    <label>Letter 1
                        <input
                            value={filter.pos1}
                            onChange={onChange}
                            name='pos1'
                            type='text'
                        />
                    </label>

                    <label>Letter 2
                        <input
                            value={filter.pos2}
                            onChange={onChange}
                            name='pos2'
                            type='text'
                        />
                    </label>

                    <label>Letter 3
                        <input
                            value={filter.pos3}
                            onChange={onChange}
                            name='pos3'
                            type='text'
                        />
                    </label>

                    <label>Letter 4
                        <input
                            value={filter.pos4}
                            onChange={onChange}
                            name='pos4'
                            type='text'
                        />
                    </label>

                    <label>Letter 5
                        <input
                            value={filter.pos5}
                            onChange={onChange}
                            name='pos5'
                            type='text'
                        />
                    </label>
                </div>

                <div>
                    <label>Included Letters
                        <input
                            value={filter.include}
                            onChange={onChange}
                            name='include'
                            type='text'
                        />
                    </label>

                    <label>Excluded Letters
                        <input
                            value={filter.exclude}
                            onChange={onChange}
                            name='exclude'
                            type='text'
                        />
                    </label>

                    <label>Exclude Pos 1
                        <input
                            value={filter.char1Exclude}
                            onChange={onChange}
                            name='char1Exclude'
                            type='text'
                        />
                    </label>

                    <label>Exclude Pos 2
                        <input
                            value={filter.char2Exclude}
                            onChange={onChange}
                            name='char2Exclude'
                            type='text'
                        />
                    </label>

                    <label>Exclude Pos 3
                        <input
                            value={filter.char3Exclude}
                            onChange={onChange}
                            name='char3Exclude'
                            type='text'
                        />
                    </label>

                    <label>Exclude Pos 4
                        <input
                            value={filter.char4Exclude}
                            onChange={onChange}
                            name='char4Exclude'
                            type='text'
                        />
                    </label>

                    <label>Exclude Pos 5
                        <input
                            value={filter.char5Exclude}
                            onChange={onChange}
                            name='char5Exclude'
                            type='text'
                        />
                    </label>

                </div>


                <button>Get Words</button>
            </form>
        </div>
    )
};


