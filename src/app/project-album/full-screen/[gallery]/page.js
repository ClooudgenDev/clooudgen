'use client'

import ProjectData from "@/lib/data/project/project";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Gallery = () => {

    const { gallery } = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        const findData = ProjectData.find((item) => item.id == gallery);
        setData(findData);
        console.log('findData', findData);
    }, [gallery]);


    return (
        <main className="mt-32">
            {
                data?.img?.map((image, index) => <Image key={index} src={image.src} className=" w-[100vw] 2xl:w-[80vw] mx-auto my-5 lg:my-20 cursor-move border-y-2 border-primary" width={image?.width || 200} height={image?.height} alt="data" />)
            }
        </main>
    )
}

export default Gallery