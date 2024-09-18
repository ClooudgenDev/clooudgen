'use client'

import { useEffect, useState } from 'react';
import SelectTeam from './SelectTeam';
import TeamRequestForm from './TeamRequestForm';
import { Team } from '@/lib/data/subscription/teamMake';

const MakeYourTeamForms = () => {
    const [team, setTeam] = useState([])
    const [errors, setErrors] = useState({});
    const [selectedTeam, setSelectedTeam] = useState({});
    const [cards, setCards] = useState(
        Team.map((data) => ({
            id: data.id,
            isSwitchOn: false,
            number: 1,
            selectedTags: [],
            tagValues: {
                "mern": 1,
                "react": 1,
                "next": 1,
                "vue": 1,
                "node": 1,
                "laravel": 1,
                "express": 1,
                "reactNative": 1,
                "flutter": 1,
                "kotlin": 1,
                "java": 1,
                "uiuxDesigner": 1,
                "illustrator": 1,
                "photoshop": 1,
                "canva": 1,
                "videoEditor": 1,
                "emailMarketing": 1,
                "seo": 1,
                "socialMediamarketing": 1,
                "contentMarketing": 1,
                "contentWriter": 1,
                "socialMediaManagement": 1
            },
            hasTags: data?.tag?.length > 0,
            key: data?.key
        }))
    );


    useEffect(() => {

        const newTeam = {}

        team?.forEach(obj => {
            Object.keys(obj).forEach(key => {
                newTeam[key] = obj[key]
            });
        });

        setSelectedTeam(newTeam)

    }, [team])


    return (
        <>
            <SelectTeam errors={errors} setErrors={setErrors} setTeam={setTeam} cards={cards} setCards={setCards} />
            <p className="px-5 text-xs text-red-500">{errors?.team}</p>
            <div className='p-5 pt-0'>
                <h2 className="my-5">Fill out this form </h2>
                <TeamRequestForm errors={errors} setErrors={setErrors} team={selectedTeam} cards={cards} />
            </div>
        </>
    );
};

export default MakeYourTeamForms;