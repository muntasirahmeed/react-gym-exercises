import React from 'react';
import { Link } from 'react-router-dom';

const ExerciseCard = ({exercise}) => {
    return (
        <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
            <img src={exercise.gifUrl}  alt="name" loading='lazy' />
        </Link>
    );
};

export default ExerciseCard;