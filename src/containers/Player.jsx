import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { getPlayer } from '../actions'
import '../assets/styles/Player.scss';
import NotFound from './NotFound';

const Player = props => {
    const id = props.match.params.id;
    const hasPlaying = Object.keys(props.playing).length > 0;
    
    useLayoutEffect(() => {
        props.getPlayer(id);
    }, [])

    return hasPlaying ? (
        <div className="Player">
            <video autoPlay controls>
                <source src={props.playing.source} type="video/mp4"/>
            </video>
            <div className="Player-back">
                <button type="button" onClick={() => props.history.goBack()}>Regresar</button>
            </div>
        </div>
    ) : <NotFound />;
}

const mapStateToProps = state => {
    return {
        playing: state.playing
    }
}

const mapDispatchToProps = {
    getPlayer
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);