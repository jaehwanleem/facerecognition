import React from 'react'


const Facerecognition = ({ imageURL }) => {
    return (
        <div className='center'>
            <div className='absolute mt2'>
                <img src={imageURL} alt='sample_picture' width='300px' height='auto' />
            </div>
        </div>
    )
}

export default Facerecognition