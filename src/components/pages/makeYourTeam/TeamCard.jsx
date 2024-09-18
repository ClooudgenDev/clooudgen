import { cn } from '@/lib/utils';

const TeamCard = ({ card, toggleSwitch, data, errors, incrementCardNumber, decrementCardNumber, increment, decrement, handleInputChange, handleCardInputChange, handleTagClick }) => {

    return (
        <div key={data.id} className={cn("p-2 border border-blue-200 rounded-lg lg:p-6 min-h-[230px]",
            { 'shadow-lg': card.isSwitchOn },
            { 'border-red-300 bg-red-50': card.isSwitchOn && data.hasOwnProperty('tag') && card.selectedTags.length === 0 && Object.keys(errors).length })}
        >
            <div className="items-center gap-5 mb-3 lg:flex">
                <label className="relative inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        checked={card.isSwitchOn}
                        onChange={() => toggleSwitch(data.id, card)}
                        className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-primary peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                </label>
                <h4 className={`transition ${card.isSwitchOn ? 'text-foreground' : 'text-gray-700'} ${card.isSwitchOn ? 'opacity-100' : 'opacity-80'}`}>
                    {data?.title}
                </h4>
            </div>
            <div className='lg:mx-16'>
                {card.hasTags ? (
                    <div>
                        <div className={`flex flex-wrap w-full  gap-1 transition ${card.isSwitchOn ? 'opacity-100' : 'opacity-50'}`}>
                            {data?.tag?.map(tag => (
                                <div key={tag}  >
                                    <button
                                        disabled={!card.isSwitchOn}
                                        onClick={() => handleTagClick(tag, data.id)}
                                        className={`px-3 py-1 rounded capitalize ${card.selectedTags.includes(tag) ? 'bg-primary text-white' : 'bg-gray-200'}`}
                                    >
                                        {tag}
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div >
                            {data?.tag?.map(tag => (
                                <div key={tag} className="">
                                    {card.selectedTags.includes(tag) && (
                                        <div className={`flex justify-between w-full items-center gap-2 mt-2 ${card.isSwitchOn ? 'opacity-100' : 'opacity-50'}`}>
                                            <span className='text-sm capitalize sm:min-w-52 sm:text-base'> {tag}:</span>
                                            <div className='space-x-1'>
                                                <button
                                                    onClick={() => decrement(data.id, tag)}
                                                    className={cn("px-2 text-background rounded bg-red-400 disabled:bg-gray-200 disabled:text-gray-600", { 'hover:bg-red-500': card.isSwitchOn }, { 'opacity-85': card.tagValues[tag] < 2 })}
                                                    disabled={!card.isSwitchOn || card.tagValues[tag] < 2}
                                                >
                                                    -
                                                </button>
                                                <input
                                                    type="number"
                                                    value={card.tagValues[tag]}
                                                    onChange={(e) => handleInputChange(e, data.id, tag)}
                                                    className="w-12 text-center border rounded sm:w-16"
                                                    disabled={!card.isSwitchOn}
                                                    min="1"
                                                />
                                                <button
                                                    onClick={() => increment(data.id, tag)}
                                                    className={cn("px-2 bg-green-400 rounded text-background", { 'hover:bg-green-500': card.isSwitchOn })}
                                                    disabled={!card.isSwitchOn}
                                                >
                                                    +
                                                </button>
                                            </div>

                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                        <div className={`flex items-center gap-3 transition ${card.isSwitchOn ? 'opacity-100' : 'opacity-50'}`}>
                        <span className='text-sm capitalize sm:min-w-52 sm:text-base'> {data.key}:</span>
                        <button
                            onClick={() => decrementCardNumber(data.id)}
                                className={cn("px-2 text-background rounded bg-red-400 disabled:bg-gray-200 disabled:text-gray-600", { 'opacity-85': card.number < 2 }, { 'hover:bg-red-500': card.isSwitchOn })}
                                disabled={!card.isSwitchOn || card.number < 2}
                        >
                            -
                        </button>
                        <input
                            type="number"
                            value={card.number}
                            onChange={(e) => handleCardInputChange(e, data.id)}
                                className="w-16 text-center border rounded disabled:bg-gray-200"
                                disabled={!card.isSwitchOn}
                            min="0"
                        />
                        <button
                            onClick={() => incrementCardNumber(data.id)}
                                className={cn("px-2 bg-green-400 rounded text-background ", { 'hover:bg-green-500': card.isSwitchOn })}
                            disabled={!card.isSwitchOn}
                        >
                            +
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TeamCard;