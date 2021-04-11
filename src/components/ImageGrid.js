import React from 'react'
import useFirestore from '../hooks/useFirestore'

export default function ImageGrid({ setselectedImage }) {
    const { docs } = useFirestore('images');
    console.log(docs);
    return (
        <div className='img-grid'>
            {docs && docs.map(doc => {
                return <div
                    onClick={() => {
                        setselectedImage(doc.url);
                    }}
                    className='img-wrap' key={doc.id}>
                    <img src={doc.url} alt={doc.url}></img>
                </div>
            })}
        </div>
    )
}
