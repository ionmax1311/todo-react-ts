import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutPage: React.FC = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>About page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cumque dolores tempore nam adipisci facere recusandae consectetur corrupti sequi fugiat!</p>
            <button className='btn' onClick={() => navigate('/')}>Return to Todo</button>
        </div>
    );
};

export default AboutPage;