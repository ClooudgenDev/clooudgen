import OurMenHeading from '@/assets/images/maintenance/ourMainHeading.png'
import Timeline from '@/components/shared/Timeline/Timeline';
import Image from 'next/image';
import MaintenanceProcess from './MaintenanceProcess';

const OurMaintenance = () => {

  const events = [
    {
      title: 'Event 1',
      description: 'Assessment and Planning: Evaluate and plan updates.',
      indexColor: 'text-primary bg-slate-200'
    },
    {
      title: 'Event 1',
      description: 'Assessment and Planning: Evaluate and plan updates.',
      indexColor: 'text-primary bg-slate-200'
    },
    {
      title: 'Event 1',
      description: 'Security Checks and Updates: Regular audits and patches.',
      indexColor: 'text-primary bg-slate-200'
    },
    {
      title: 'Event 1',
      description: 'Performance Optimization: Speed and responsiveness enhancements.',
      indexColor: 'text-primary bg-slate-200'
    },
    {
      title: 'Event 1',
      description: 'Backup and Recovery: Automated backups and testing.',
      indexColor: 'text-amber-400 bg-slate-200'
    },
    {
      title: 'Event 1',
      description: 'Software Updates: Keep CMS and plugins current.',
      indexColor: 'text-amber-400 bg-slate-200'
    },
    {
      title: 'Event 1',
      description: 'Mobile responsiveness: ensure compatibility across devices.',
      indexColor: 'text-amber-400 bg-slate-200'
    },
    {
      title: 'Event 1',
      description: 'SEO Maintenance: Keyword Optimization and Analytics.',
      indexColor: 'text-amber-400 bg-slate-200'
    },

  ];


  return (
    <section className='container my-10 md:my-20'>
      <heading className='flex items-center justify-center'>
        <h4 className='my-5 text-2xl md:my-0 md:text-2xl lg:text-4xl text-primary'>Our Maintenance Process</h4>
        <Image src={OurMenHeading} className='hidden ms-5 md:block' height={80}/>
      </heading>
      {/* <Timeline events={events} /> */}
      <MaintenanceProcess/>
    </section>
  );
};

export default OurMaintenance;