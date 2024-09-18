import Coding from '@/assets/images/coding.png';
import Design from '@/assets/images/design.png';
import DigitalMarketing from '@/assets/images/digital-marketing.png';
import UX from '@/assets/images/home/services/ui-ux.png';
import VideoEditing from '@/assets/images/video-editing.png';
import Image from 'next/image';
import { FaCode } from 'react-icons/fa6';
import { FcIdea } from 'react-icons/fc';
import { GiAutoRepair } from 'react-icons/gi';
import { MdOutlineAppShortcut } from 'react-icons/md';

const ux = () => {
  return <Image src={UX} alt="Design" />;
};
const design = () => {
  return <Image className="" width={40} src={Design} alt="Design" />;
};
const coding = () => {
  return <Image className="" width={40} src={Coding} alt="Design" />;
};
const videoEditing = () => {
  return <Image className="" width={40} src={VideoEditing} alt="Design" />;
};
const digitalMarketing = () => {
  return <Image className="" width={40} src={DigitalMarketing} alt="Design" />;
};

let serviceCardsData = [
  {
    Icon: FcIdea,
    IconStrokeColor: 'text-red-600',
    IconBgColor: 'bg-red-100',
    title: 'IT Consultancy',
    href: 'it-consultancy',
    description:
      "Unlock the full potential of your IT infrastructure with Clooud Gen's expert consultancy services. From optimizing system performance to streamlining operations, our seasoned consultants provide tailored solutions to your unique business needs. Gain a competitive edge in the digital landscape with Clooud Gen's trusted guidance and strategic insights.",
    count: 299,
  },
  {
    Icon: FaCode,
    IconStrokeColor: 'text-orange-600',
    IconBgColor: 'bg-blue-200',
    title: 'Web Development',
    href: 'web-development',
    description:
      "“Elevate your online presence with Clooud Gen's premier web development services. From sleek and responsive designs to seamless functionality, our team brings your vision to life with precision and creativity. Whether launching a new site or revamping an existing one, trust Clooud Gen to deliver a captivating digital experience that resonates with your audience and drives results.",
    count: 13,
  },
  {
    Icon: GiAutoRepair,
    IconStrokeColor: 'text-sky-600',
    IconBgColor: 'bg-slate-200',
    title: 'Web Maintenance',
    href: 'web-maintenance',
    description:
      "Ensure your website stays at its peak performance with Clooud Gen's comprehensive web maintenance services. Our committed team manages every facet of website maintenance, including content management, speed optimizing, and frequent updates and security fixes. With Clooud Gen, you can concentrate on your main business while we take care to keep your online presence error-free, safe, and current.",
    count: 9,
  },
  {
    Icon: MdOutlineAppShortcut,
    IconStrokeColor: 'text-green-600',
    IconBgColor: 'bg-purple-200',
    title: 'App Development',
    href: 'app-development',
    description:
      "Turn your app ideas into reality with Clooud Gen's top-tier app development services. Our experienced team specializes in creating custom mobile applications that are sleek, user-friendly, and packed with innovative features. From the initial concept to the final launch, we work closely with you to ensure your app exceeds expectations and stands out in the competitive market. Partner with Clooud Gen and bring your vision to life on every screen.",
    count: 123,
  },
  {
    Icon: coding,
    IconStrokeColor: 'text-green-600',
    IconBgColor: 'bg-emerald-100',
    title: 'Software Development',
    href: 'software-development',
    description:
      "Empower your business with Clooud Gen's exceptional software development services. Our seasoned team of developers harnesses the latest technologies and industry best practices to build robust, scalable, and tailored software solutions. From conceptualization to deployment, we collaborate closely with you to understand your unique requirements and deliver software that drives efficiency, productivity, and growth. Experience unparalleled quality and reliability with Clooud Gen's software development expertise.",
    count: 123,
  },
  {
    Icon: ux,
    IconStrokeColor: 'text-green-600',
    IconBgColor: 'bg-purple-100',
    title: 'UI/UX',
    href: 'ui-ux',
    description:
      "Transform your digital presence with Clooud Gen's expert UI/UX design services. Our team combines creativity and user-centric principles to craft intuitive and visually stunning interfaces that captivate your audience. From wireframing to prototyping, we ensure every interaction is seamless, engaging, and leaves a lasting impression. Elevate your brand experience with Clooud Gen's tailored UI/UX solutions.",
    count: 123,
  },
  {
    Icon: design,
    IconStrokeColor: 'text-green-600',
    IconBgColor: 'bg-amber-100',
    title: 'Graphics Design',
    href: 'graphics-design',
    description:
      "Unleash the power of captivating visuals with Clooud Gen's dynamic graphics design services. Our talented team of designers blends creativity with strategy to deliver stunning graphics that resonate with your audience and elevate your brand. From logos to promotional materials, we craft designs that leave a lasting impression and set you apart from the competition. Elevate your visual identity with Clooud Gen's bespoke graphics design solutions.",
    count: 123,
  },
  {
    Icon: digitalMarketing,
    IconStrokeColor: 'text-green-600',
    IconBgColor: 'bg-orange-200',
    title: 'Digital Marketing',
    href: 'digital-marketing',
    description:
      "Supercharge your online presence with Clooud Gen's streamlined digital marketing solutions. From SEO to social media management, we drive results that matter. Let's amplify your brand's impact together.",
    count: 123,
  },
  {
    Icon: videoEditing,
    IconStrokeColor: 'text-green-600',
    IconBgColor: 'bg-sky-100',
    title: 'Video Editing',
    href: 'video-editing',
    description:
      "Transform your raw footage into polished masterpieces with Clooud Gen's expert video editing services. Our skilled editors bring creativity and precision to every project, ensuring seamless transitions, captivating visuals, and engaging storytelling. Whether it's a promotional video, product demonstration, or social media content, trust Clooud Gen to enhance your video content and leave a lasting impact on your audience. Elevate your visual storytelling with Clooud Gen's professional video editing solutions.",
    count: 123,
  },
];

export default serviceCardsData;
