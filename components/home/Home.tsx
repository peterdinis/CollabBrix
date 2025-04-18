import { FC } from 'react';
import Navigation from '../shared/Navigation';
import Hero from './Hero';

const Home: FC = () => {
    return (
        <div className='min-h-screen overflow-x-hidden bg-gradient-to-b from-white via-blue-50 to-white'>
            <Navigation />
            <Hero />
        </div>
    );
};

export default Home;
