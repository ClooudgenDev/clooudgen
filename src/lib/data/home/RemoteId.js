import Image from 'next/image';
import { FaCode } from 'react-icons/fa6';
import { GiAutoRepair } from "react-icons/gi";
import { FcIdea } from "react-icons/fc";
import { MdOutlineAppShortcut } from "react-icons/md";
import UX from '@/assets/images/home/services/ui-ux.png';
import Design from '@/assets/images/design.png';
import Coding from '@/assets/images/coding.png';
import VideoEditing from '@/assets/images/video-editing.png';
import DigitalMarketing from '@/assets/images/digital-marketing.png';

const ux = () => {
    return (
        <Image src={UX} alt='Design' />
    )
}
const design = () => {
    return (
        <Image className='' width={40} src={Design} alt='Design' />
    )
}
const coding = () => {
    return (
        <Image className='' width={70} src={Coding} alt='Design' />
    )
}
const videoEditing = () => {
    return (
        <Image className='' width={40} src={VideoEditing} alt='Design' />
    )
}
const digitalMarketing = () => {
    return (
        <Image className='' width={40} src={DigitalMarketing} alt='Design' />
    )
}


const RemoteIdData = [
    {
      image:coding,
      title :'Software Development',
      description:'Proficient in multiple programming languages and frameworks, our developers craft robust, scalable, and innovative software solutions.'
    },
    {
        image:FaCode,
        title :'Web Development',
        description:'From stunning website designs to complex web applications, our web developers deliver responsive and user-friendly web experiences.'
      },
      {
        image:MdOutlineAppShortcut,
        title :'App Development',
        description:'We build intuitive and powerful mobile applications for both iOS and Android platforms.'
      },
      {
        image:FcIdea,
        title :'IT Support and Maintenance',
        description:'Providing reliable and efficient IT support to keep your operations running smoothly around the clock.'
      }
]

export default RemoteIdData