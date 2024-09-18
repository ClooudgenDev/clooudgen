import { MdContentPaste, MdOutlineSecurity } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { GrPerformance, GrVmMaintenance } from "react-icons/gr";
import { LuDatabaseBackup } from "react-icons/lu";
import { MdTipsAndUpdates } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { BiSolidAnalyse } from "react-icons/bi";
const processData1 =[
    {
        heading : 'Assessment and Planning',
        idx : 1,
         icon : <IoHome />,
        description1 : 'Evaluate and plan updates.',
        description2 : 'Evaluate the current site, identify gaps, and create a roadmap for updates to ensure optimal performance and relevance.',

    },
    {
        heading : 'Content Updates',
        idx : 2,
        icon : <MdContentPaste />,
        description2 : 'Refresh content for relevance.',
        description1 : 'Regularly refresh site content to keep it current, engaging, and aligned with user interests and industry trends.',

    },
    {
        heading : 'Security Checks and Updates',
        idx : 3,
         icon : <MdOutlineSecurity />,
        description1 : 'Regular audits and patches.',
        description2 : 'Perform regular security audits and apply patches to protect the site from vulnerabilities and threats.',

    },
    {
        heading : 'Performance Optimization',
        idx : 4,
         icon : <GrPerformance />,
        description2 : 'Speed and responsiveness enhancements.',
        description1 : 'Enhance site speed and responsiveness to improve the user experience and search engine rankings.',

    },
    {
        heading : 'Backup and Recovery: ',
        idx : 5,
         icon : <LuDatabaseBackup />,
        description1 : 'Automated backups and testing.',
        description2 : 'Implement automated backups and routinely test recovery processes to safeguard data and ensure continuity.',

    },
    {
        heading : 'Software Updates',
        idx : 6,
         icon : <MdTipsAndUpdates/>,
        description2 : 'Keep CMS and plugins current.',
        description1 : 'Keep CMS, themes, and plugins up-to-date to benefit from new features, improved security, and bug fixes.',

    },
    {
        heading : 'Mobile responsiveness',
        idx : 7,
         icon : <FaMobileAlt />,
        description1 : 'ensure compatibility across devices',
        description2 : 'Ensure the site displays and functions correctly on all devices, providing a seamless mobile user experience',

    },
    {
        heading : 'SEO Maintenance',
        idx : 8,
         icon : <GrVmMaintenance/>,
        description2 : 'Keyword Optimization and Analytics.',
        description1 : 'Optimize keywords and analyze site data to maintain and improve search engine rankings and visibility.',

    },
    {
        heading : 'Monitoring and Analytics',
        idx : 9,
         icon : <BiSolidAnalyse />,
        description1 : 'Track metrics and user behavior.',
        description2 : 'Track site metrics and user behavior to inform decisions and improve overall performance.',

    },
]

export default processData1;