import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const MessageInput = ({ className, label, ...rest }) => {
    const { required, error } = { ...rest }
    return (
        <>
            <label
                className="flex items-center gap-1 mx-1 mb-2 font-semibold"
            >
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <Textarea
                // name={''}
                // className={''}
                // placeholder={''}
                // autoComplete="off"
                // defaultValue={defaultValue}
                {...rest}
            />
            <span className="text-xs text-red-500">{error}</span>
        </>
    );
};

export default MessageInput;