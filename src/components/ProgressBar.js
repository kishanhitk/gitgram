import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage';
const ProgressBar = ({ file, setfile }) => {
    const { url, progress, error } = useStorage(file);
    console.log(url, progress);
    useEffect(() => {
        if (url) {
            setfile(null);
        }
    }, [url, setfile])
    return (
        <div className="progress-bar" style={{ width: progress + "%" }}>

        </div>
    )
}
export default ProgressBar;