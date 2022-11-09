import React, { useContext } from "react"
import { getClass } from "../utils"
import Image from "../components/image"
import { PhotoContext } from "../components/photoContext"

function Photos() {

    const { photoAPI } = useContext(PhotoContext)

    const photoArray = photoAPI.map((photo, index) => {
        return (
            <Image key={photo.id} img={photo} className={getClass(index)} />
        )
    })

    return (
        <main className="photos">
            {photoArray}
        </main>
    )
}

export default Photos