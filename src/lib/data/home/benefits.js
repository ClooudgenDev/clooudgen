import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineEnvironment } from "react-icons/ai";
import { IoBulbOutline } from "react-icons/io5";
const Datas =[
    {
        title : 'Cost Savings',
        icon : <MdOutlineEnergySavingsLeaf />,
        liH1: 'Reduced Overhead:',
        li1 : 'Companies can save on office space, utilities, and other expenses associated with maintaining a physical workspace.',
        liH2: 'Lower Salaries:',
        li2: 'Hiring from regions with lower living costs can reduce salary expenses without compromising talent quality.'
    },
    {
        title : 'Scalability and Flexibility',
        icon : <IoHomeOutline />,
        liH1: 'Easier to Scale:',
        li1 : 'Remote teams can be scaled up or down more easily compared to on-site teams, allowing for greater agility in response to business needs.',
        liH2: 'Rapid Deployment:',
        li2: 'Remote teams can often be assembled and deployed more quickly than traditional in-house teams.'
    },
    {
        title : 'Focus and Efficiency',
        icon : <IoBulbOutline />,
        liH1: 'Fewer Distractions:',
        li1 : 'Remote workers often experience fewer distractions than in a traditional office, leading to better focus and efficiency.',
        liH2: 'Work Environment:',
        li2: 'Employees can customize their workspaces, boosting comfort and productivity.'
    },
    {
        title : 'Environmental Benefits',
        icon : <AiOutlineEnvironment />,
        liH1: 'Reduced Carbon Footprint:',
        li1 : 'With fewer employees commuting, companies can contribute to lower overall carbon emissions',
        liH2: 'Sustainable Practices:',
        li2: 'Remote work supports sustainable business practices by reducing the need for large office spaces and related resources.'
    },
];
export default Datas;