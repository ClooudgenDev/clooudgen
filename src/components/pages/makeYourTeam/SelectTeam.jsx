'use client';

import { useEffect } from 'react';
import { Team } from '@/lib/data/subscription/teamMake';
import TeamCard from './TeamCard';

const SelectTeam = ({ setTeam, errors, setErrors, cards, setCards }) => {



    const toggleSwitch = (index) => {

        setCards(cards.map((card, i) => (
            i === index ? { ...card, isSwitchOn: !card.isSwitchOn } : card
        )));

        setTeam(prev => {

            const prevTeam = [...prev];

            Team[index]?.tag?.map((tag, i) => delete prevTeam[tag])

            return prevTeam
        })

    };

    const handleInputChange = (e, index, tag) => {
        const value = e.target.value;
        const cleanedValue = parseInt(value, 10);
        setCards(cards.map((card, i) => (
            i === index ? {
                ...card,
                tagValues: {
                    ...card.tagValues,
                    [tag]: isNaN(cleanedValue) ? 0 : cleanedValue
                }
            } : card
        )));
    };

    const increment = (index, tag) => {
        setCards(cards.map((card, i) => (
            i === index ? {
                ...card,
                tagValues: {
                    ...card.tagValues,
                    [tag]: (card.tagValues[tag] || 0) + 1
                }
            } : card
        )));
    };

    const decrement = (index, tag) => {
        setCards(cards.map((card, i) => (
            i === index ? {
                ...card,
                tagValues: {
                    ...card.tagValues,
                    [tag]: (card.tagValues[tag] > 1 ? card.tagValues[tag] - 1 : 1)
                }
            } : card
        )));
    };

    const handleTagClick = (tag, index) => {
        setCards(cards.map((card, i) => (
            i === index ? {
                ...card,
                selectedTags: card.selectedTags.includes(tag)
                    ? card.selectedTags.filter(selectedTag => selectedTag !== tag)
                    : [...card.selectedTags, tag],
                tagValues: {
                    ...card.tagValues,
                    [tag]: card.selectedTags.includes(tag) ? 1 : (card.tagValues[tag] || 1)
                }
            } : card
        )));
    };

    const handleCardInputChange = (e, index) => {
        const value = e.target.value;
        const cleanedValue = parseInt(value, 10);
        setCards(cards.map((card, i) => (
            i === index ? { ...card, number: isNaN(cleanedValue) ? 0 : cleanedValue } : card
        )));
    };

    const incrementCardNumber = (index) => {
        setCards(cards.map((card, i) => (
            i === index ? { ...card, number: card.number + 1 } : card
        )));
    };

    const decrementCardNumber = (index) => {
        setCards(cards.map((card, i) => (
            i === index ? { ...card, number: card.number > 1 ? card.number - 1 : 1 } : card
        )));
    };

    //! Final Data----------------------------

    useEffect(() => {
        // Filtering and mapping logic
        const filteredData = cards.filter(obj => obj.isSwitchOn);

        const result = filteredData.map(obj => {
            const tagValues = {};

            if (obj.key) {

                if (tagValues[obj.key]) {
                    delete tagValues[obj.key];
                } else {
                    tagValues[obj.key] = obj.number;
                }
            }

            obj.selectedTags?.forEach(tag => {
                if (obj.tagValues[tag]) {
                    tagValues[tag] = obj.tagValues[tag];
                }
            });

            return tagValues;
        });

        setTeam(result);

        setErrors((prev) => {
            const newErrors = { ...prev };
            delete newErrors.team;
            return newErrors;
        });

    }, [cards, setTeam, setErrors]);

    // ! Final Data -----------

    return (
        <>
            <h2 className="m-5">Developer </h2>
            <div className="grid justify-center grid-cols-1 gap-5 p-5 lg:grid-cols-2 md:grid-cols-1">
                {
                    Team.slice(0, 4)?.map((data) => {
                        const card = cards[data.id];

                        return (

                            <TeamCard
                                key={data.id}
                                errors={errors}
                                card={card}
                                data={data}
                                toggleSwitch={toggleSwitch}
                                increment={increment}
                                decrement={decrement}
                                incrementCardNumber={incrementCardNumber}
                                decrementCardNumber={decrementCardNumber}
                                handleCardInputChange={handleCardInputChange}
                                handleInputChange={handleInputChange}
                                handleTagClick={handleTagClick}
                            />

                        );
                    })
                }
            </div>


            <h2 className="m-5">Designer </h2>

            <div className="grid justify-center grid-cols-1 gap-5 p-5 lg:grid-cols-2 md:grid-cols-1">
                {
                    Team.slice(4, 6)?.map((data) => {
                        const card = cards[data.id];

                        return (

                            <TeamCard
                                key={data.id}
                                errors={errors}
                                card={card}
                                data={data}
                                toggleSwitch={toggleSwitch}
                                increment={increment}
                                decrement={decrement}
                                incrementCardNumber={incrementCardNumber}
                                decrementCardNumber={decrementCardNumber}
                                handleCardInputChange={handleCardInputChange}
                                handleInputChange={handleInputChange}
                                handleTagClick={handleTagClick}
                            />

                        );
                    })
                }
            </div>

            <h2 className="m-5"> Digital Marketer & Video Editor </h2>

            <div className="grid justify-center grid-cols-1 gap-5 p-5 lg:grid-cols-2 md:grid-cols-1">
                {
                    Team.slice(6)?.map((data) => {
                        const card = cards[data.id];

                        return (
                            <TeamCard
                                key={data.id}
                                errors={errors}
                                card={card}
                                data={data}
                                toggleSwitch={toggleSwitch}
                                increment={increment}
                                decrement={decrement}
                                incrementCardNumber={incrementCardNumber}
                                decrementCardNumber={decrementCardNumber}
                                handleCardInputChange={handleCardInputChange}
                                handleInputChange={handleInputChange}
                                handleTagClick={handleTagClick}
                            />
                        );
                    })
                }
            </div>


        </>
    );
};

export default SelectTeam;
