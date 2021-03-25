import React, { useEffect, useState } from 'react';
import '../assets/styles/App.scss';

import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

const App = () => {
    const [videos, setVideos] = useState({});

    useEffect(() => {
        fetch('http://localhost:3000/initalstate')
            .then(response => response.json())
            .then(data => setVideos(data))
            .catch(error => console.log(error))
    }, [videos]);
    return (
    <div>
        <Header />
        <Search />

        <Categories title="Tendencias">
            <Carousel>
                {
                    videos.trends && videos.trends.map(item => <CarouselItem key={item.id} {...item} />)
                }
            </Carousel>
        </Categories>

        <Categories title="Originales">
            <Carousel>
                {
                    videos.originals && videos.originals.map(item => <CarouselItem key={item.id} {...item} />)
                }
            </Carousel>
        </Categories>
        
        <Footer />
    </div>
    )
}

export default App;