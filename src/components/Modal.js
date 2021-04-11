import React from 'react'

export default function Modal({ selectedImage, setselectedImage }) {
    const closeModal = (e) => {
        if (e.target.classList.contains('backdrop'))
            setselectedImage(null);

    }
    return (
        selectedImage && <div className='backdrop'
            onClick={closeModal}
        >
            <img src={selectedImage} alt="Enlarged"></img>

        </div>
    )
}
