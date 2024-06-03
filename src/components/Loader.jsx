import React from 'react'
import {Html, useProgress} from '@react-three/drei';
const Loader = () => {
    const {progress} = useProgress();

    return(
        <Html>
            <div>
                <div>

                </div>
            </div>
        </Html>

    )
}

export default Loader