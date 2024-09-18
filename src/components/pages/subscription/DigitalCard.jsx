'use client'
import React, { useState } from 'react';
const availableTags = [' SEO', 'Email marketing', 'Social Media marketing', 'content writer', 'content marketing', 'social media management'];

const DigitalCard = () => {
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [number, setNumber] = useState(0);
    const [selectedTags, setSelectedTags] = useState([]);

    const toggleSwitch2 = () => {
        setIsSwitchOn(!isSwitchOn);
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        const cleanedValue = parseInt(value, 10);
        setNumber(isNaN(cleanedValue) ? 0 : cleanedValue);
    };

    const increment2 = () => {
        setNumber((prevNumber) => prevNumber + 1);
    };

    const decrement2 = () => {
        setNumber((prevNumber) => (prevNumber > 0 ? prevNumber - 1 : 0));
    };


    const handleTagClick = (tag) => {
        if (!selectedTags.includes(tag)) {
            setSelectedTags([...selectedTags, tag]);
        }
    };

    const handleTagRemove = (tagToRemove) => {
        setSelectedTags(selectedTags.filter(tag => tag !== tagToRemove));
    };
    return (
       
        <div className="p-2 mx-3 border lg:p-6 min-h-[310px]">
            <div className="items-center gap-5 lg:flex">
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={isSwitchOn} onChange={toggleSwitch2} className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-primary peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                </label>
                <h4 className={`transition ${isSwitchOn ? 'text-foreground' : 'text-gray-700'} ${isSwitchOn ? 'opacity-100' : 'opacity-50'}`}>
                   Video Editor
                </h4>
                <div className={`flex items-center gap-3 transition ${isSwitchOn ? 'opacity-100' : 'opacity-50'}`}>
                    <button
                        onClick={decrement2}
                        className="px-3 py-1 bg-gray-200 rounded"
                        disabled={!isSwitchOn}
                    >
                        -
                    </button>
                    <input
                        type="number"
                        value={number}
                        onChange={handleInputChange}
                        className="w-16 text-center border rounded"
                        disabled={!isSwitchOn}
                        min="0"
                    />
                    <button
                        onClick={increment2}
                        className="px-3 py-1 bg-gray-200 rounded"
                        disabled={!isSwitchOn}
                    >
                        +
                    </button>
                </div>
            </div>

            <div className='lg:mx-16'>
                <div className={` gap-3 transition ${isSwitchOn ? 'opacity-100' : 'opacity-50'}`} >

                    <div className="flex flex-wrap gap-2 mt-4">
                        {availableTags.map(tag => (
                            <button
                                disabled={!isSwitchOn}
                                key={tag}
                                onClick={() => handleTagClick(tag)}
                                className={`px-3 py-1 rounded ${selectedTags.includes(tag) ? 'bg-primary text-white' : 'bg-gray-200'}`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                        {selectedTags.map(tag => (
                            <div key={tag} className="flex items-center gap-1 px-3 py-1 text-white rounded bg-primary">
                                {tag}

                                <button onClick={() => handleTagRemove(tag)} className="ml-2">
                                    &times;
                                </button>
                            </div>

                        ))}
                    </div>
                </div>

                <input
                    type="number"
                    value={number}
                    onChange={handleInputChange}
                    className="flex justify-center h-10 my-5 border rounded-lg"
                    disabled={!isSwitchOn}
                    min="0"
                />
            </div>


        </div>
    );
};

export default DigitalCard;