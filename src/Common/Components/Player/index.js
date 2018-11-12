import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import { cn } from '@bem-react/classname';

import prevImage from '../../assets/icons/prev.svg';

const cnPlayer = cn('Player');


class Player extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    const { albumcover, artist, trackName, trackLenght, volume } = this.props;
    const { value } = this.state;
    return (
      <div className={cnPlayer()}>
        <div className={cnPlayer('Info')}>
          <div className={cnPlayer('Cover')}>
            <img src={albumcover} alt="Cover" />
          </div>
          <div className={cnPlayer('TrackInfo')}>
            <div className={cnPlayer('TrackName')}>
              {`${artist} - ${trackName}`}
            </div>
            <div className={cnPlayer('ProgressBarWr')}>
              <div className={cnPlayer('ProgressBar')}>
                <div className={cnPlayer('ProgressFill')}>
                  <div className={cnPlayer('ProgressPin')} />
                </div>
              </div>
              <div className={cnPlayer('ProgressTime')}>
                {trackLenght}
              </div>
            </div>
          </div>
        </div>
        <div className={cnPlayer('Controls')}>
          <div className={cnPlayer('ControlsBtn')}>
            <div className={cnPlayer('Control', { type: 'prev' })}>
              <img src={prevImage} alt="prev" />
            </div>
            <div className={cnPlayer('Control', { type: 'next' })}>
              <img src={prevImage} alt="next" />
            </div>
          </div>
          <input
            className={cnPlayer('Volume')}
            type="range"
            min="0"
            max="100"
            step="1"
            value={value}
            onChange={e => this.handleChange(e)}
          />
          <div className={cnPlayer('VolumeValue')}>
            {volume}
          </div>
        </div>
      </div>
    );
  }
}

Player.propTypes = {
  albumcover: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  trackName: PropTypes.string.isRequired,
  trackLenght: PropTypes.string.isRequired,
  volume: PropTypes.string.isRequired
};

export default Player;
