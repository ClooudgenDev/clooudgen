import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { LuLoader } from 'react-icons/lu';


const DynamicModal = ({ long, wide, trigger, children, isLoading, className }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className={className} disabled={isLoading}>
                    {isLoading ?
                        <LuLoader size={24} className='transition duration-1000 animate-spin' />
                        :
                        trigger}
                </Button>
            </DialogTrigger>
            <DialogContent className={cn({ "border-y-8 border-background h-[500px] lg:h-[800px] overflow-y-auto": long }, wide)}>
                {children}
            </DialogContent>
        </Dialog>
    );
};

export default DynamicModal;
