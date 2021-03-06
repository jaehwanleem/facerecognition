import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='f3 center'>
                {"this will detect faces in your picture. Give it a try"}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input
                        className='f4 pa2 w-70 center'
                        type='text'
                        onChange={onInputChange} />
                    <button className='w-30 grow link f4 ph3 pv dib white bg-light-purple'
                        onClick={onButtonSubmit}>
                        {'detect'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm