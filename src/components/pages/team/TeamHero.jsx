import { Button } from "@/components/ui/button";


const TeamHero = () => {
    return (
        <div className='mt-20 bg-opacity-0' style={{ backgroundImage: `url(./team.png)`, backgroundSize: 'cover', backgroundPosition: 'bottom', height: '700px', }}>

          
                <div className='lg:h-[300px] lg:my-20 my-10 relative container text-center'>
                    <div className='pt-10 space-y-4 md:pt-20 md:space-y-2'>
                        <h1 className=''>Collaborate With The</h1>
                        <h1 className=''>Best Team</h1>
                       <p className="text-lg">We will help you to grow your business</p>
                    </div>
                </div>

        </div>
    );
};

export default TeamHero;