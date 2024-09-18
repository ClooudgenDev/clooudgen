import ZoomIn from '@/components/shared/animation/ZoomIn';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const UserExperi = () => {
    return (
      <ZoomIn>
          <div className='container my-20'>
            <h1 className='md:my-10 my-5 text-center'>Elevating the User Experience</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-5 items-end '>

                <div className=''>
                    <h2 className='mb-5 font-bold text-2xl'>The User Experience </h2>
                    <p className='my-4 text-gray-500'>Great design is more than just aesthetics. It&apos;s about creating interfaces that are intuitive,accessible,and a joy to use.Here are the key reasons why investing in UI/UX design is essential for modern software.</p>
                    <Button className='mb-5 lg:w-full bg-white hover:bg-background border text-foreground'>See More</Button>
                    <Elevating2Card className="hidden lg:flex" />
                </div>
                <Elevating2Card className="grid grid-cols-1 sm:grid-cols-2 lg:hidden" />
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                    <Card className='md:h-[180px] max-w-[450px] p-5'>
                            <CardTitle className='mb-5 text-center'>
                                Improved Usability
                            </CardTitle>
                            <CardDescription>
                                Intuitive interfaces make it easier for users to accomplish tasks without frustration.
                            </CardDescription>
                            
                        </Card>
                    <Card className='md:h-[180px] max-w-[450px] p-5'>
                            <CardTitle className='mb-5 text-center' >
                                Increase User Engagement
                            </CardTitle>
                            <CardDescription >
                                Well-designed experiences captivate users and encourage them to interact more.
                            </CardDescription>
                            
                        </Card>
                    <Card className='md:h-[180px] max-w-[450px] p-5'>
                            <CardTitle className='mb-5 text-center'>
                                Accessibility & Inclusion
                            </CardTitle>
                            <CardDescription>
                                Throughtful design encures that everyone,regards of of ability, can user your software.
                            </CardDescription>
                            
                        </Card>
                    <Card className='md:h-[180px] max-w-[450px] p-5'>
                            <CardTitle className='mb-5 text-center' >
                                Aglie Innovation
                            </CardTitle>
                            <CardDescription >
                                User-centered design uncovers insights that drive continuous improvement and innovation.
                            </CardDescription>
                            
                    </Card>
                </div>
            </div>
        </div>
      </ZoomIn>
    );
};

export default UserExperi;

const Elevating2Card = ({ className }) => {
    return (
        <div className={cn('flex gap-5', className)}>
            <Card className='md:h-[180px] max-w-[450px] p-5'>
                <CardTitle className='mb-5 text-center' >
                    Cost Savings
                </CardTitle>
                <CardDescription >
                    Fixing usability issues early in the design process saves time and resources in development.
                </CardDescription>

            </Card>
            <Card className='md:h-[180px] max-w-[450px] p-5'>
                <CardTitle className='mb-5 text-center' >
                    Cost Savings
                </CardTitle>
                <CardDescription >
                    Fixing usability issues early in the design process saves time and resources in development.
                </CardDescription>

            </Card>
        </div>
    )
}