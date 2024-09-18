import FadeUp from '@/components/shared/animation/FadeUp';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';

const BestDataCard = ({ data }) => {
    const { title, description, image } = data || {};
    return (
        <div className='w-full'>
            <Card className={`h-[280px] md:h-[280px] lg:h-[280px] sm:h-[240px] w-full px-5 my-5 md:py-12 lg:py-16 bg-no-repeat bg-blue-50`} style={{
                backgroundImage: `url(${image})`, backgroundPosition: 'cover', backgroundPosition: 'center', opacity: 0.57,
                display: 'flex', justifyContent: 'center', alignItems: 'center'
            }}>
                <div className='text-center'>
                    <CardTitle className='my-3'>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </div>
            </Card>
        </div>

    );
};

export default BestDataCard;