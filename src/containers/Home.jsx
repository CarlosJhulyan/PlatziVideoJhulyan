import React from 'react';
import '../assets/styles/App.scss';
import { connect } from 'react-redux';

import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

const Home = (props) => {
    const { myList, trends, originals } = props;
    return (
    <div>
        <Search />

        <Categories title="Mi lista">
            <Carousel>
                {
                    myList && myList.map(item => <CarouselItem key={item.id} {...item} myList={true} />)
                }
            </Carousel>
        </Categories>

        <Categories title="Tendencias">
            <Carousel>
                {
                    trends.map(item => <CarouselItem key={item.id} {...item} />)
                }
            </Carousel>
        </Categories>

        <Categories title="Originales">
            <Carousel>
                {
                    originals.map(item => <CarouselItem key={item.id} {...item} />)
                }
            </Carousel>
        </Categories>
    </div>
    )
}

const mapStateToProps = state => {
    return {
        myList: state.mylist,
        trends: state.trends,
        originals: state.originals
    }
}

export default connect(mapStateToProps, null)(Home);

