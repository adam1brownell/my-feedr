import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Text, View, ViewPropTypes as RNViewPropTypes } from 'react-native';
import { connect } from 'react-redux';
const ViewPropTypes = RNViewPropTypes || View.propTypes;
import { saveTime } from './actions';
import TimeAlert from './timesUp';

/**
 * A customizable countdown component for React Native.
 *
 * @export
 * @class TimerCountdown
 * @extends {React.Component}
 */

class TimerCountdown2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsRemaining: this.props.initialSecondsRemaining,
      timeoutId: null,
      previousSeconds: this.props.previousSeconds,
      count: 0
    };

    //this.mounted = false;

    this.tick = this.tick.bind(this);
    this.getFormattedTime = this.getFormattedTime.bind(this);
  }

  componentDidMount() {
    this.state.mounted = true;
    this.tick();
    this.props.saveTime(this.state.secondsRemaining);
  }

  componentDidUpdate(nextProps, nextState) {
    if ((!this.state.previousSeconds) && this.state.secondsRemaining > 0 && this.state.mounted) {
      this.tick();
      //this.props.saveTime(12000);
    }
  }

  showAlert = () => {
    Alert.alert(
      'Times Up',
      'You will now return to the main menu. Have a great day!',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }
  componentWillUnmount() {
    //this.props.saveTime(12000);
    this.setState({mounted: false });
    this.mounted = false;
    clearTimeout(this.state.timeoutId);
  }

  tick() {
    const currentSeconds = Date.now();
    const dt = this.state.previousSeconds ? (currentSeconds - this.state.previousSeconds) : 0;
    const interval = this.props.interval;

    // correct for small variations in actual timeout time
    const intervalSecondsRemaing = (interval - (dt % interval));
    let timeout = intervalSecondsRemaing;

    if (intervalSecondsRemaing < (interval / 2.0)) {
      timeout += interval;
    }

    const secondsRemaining = Math.max(this.state.secondsRemaining - dt, 0);
    const isComplete = (this.state.previousSeconds && secondsRemaining <= 0);
    const oneMore = this.state.passed + 1000;


    if (this.state.mounted) {
      if (this.state.timeoutId) { clearTimeout(this.state.timeoutId); }
      this.setState({
        timeoutId: isComplete ? null : setTimeout(this.tick, timeout),
        previousSeconds: currentSeconds,
        secondsRemaining: secondsRemaining,
        pass: oneMore
      });
      //this.props.saveTime(secondsRemaining); works but runs off screen
      this.props.saveTime(this.state.secondsRemaining);
    }

    if (isComplete) {
      //if (this.props.onTimeElapsed) { this.onTimeElapsed(); }
      this.showAlert();
      return;
    }

    if (this.props.onTick) {
      this.props.onTick(secondsRemaining);
    }
  }

  getFormattedTime(milliseconds) {
    if (this.props.formatSecondsRemaining) {
      return this.props.formatSecondsRemaining(milliseconds);
    }

    const totalSeconds = Math.round(milliseconds / 1000);

    let seconds = parseInt(totalSeconds % 60, 10);
    let minutes = parseInt(totalSeconds / 60, 10) % 60;
    let hours = parseInt(totalSeconds / 3600, 10);

    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    hours = hours < 10 ? '0' + hours : hours;

    hours = hours === '00' ? '' : hours + ':';

    return hours + minutes + ':' + seconds;
  }

  render() {
    const secondsRemaining = this.state.secondsRemaining;
    return (
      <Text
        allowFontScaling={this.props.allowFontScaling}
        style={this.props.style}
      >
        {this.getFormattedTime(secondsRemaining)}
      </Text>
    );
  }
}

//const TimesUp = function(){Alert.alert('Times Up!',[{text: 'OK', onPress: () => console.log('OK Pressed')}],{cancelable: false})};
const mapStateToProps = state => {
  return {
    initialSecondsRemaining: state.time.secondsRemaining,
    interval: 1000,
    formatSecondsRemaining: null,
    onTick: null,
    onTimeElapsed: true,
    allowFontScaling: false,
    previousSeconds: null,
    style: {fontSize: 40}

  }
};

const mapDispatchToProps = dispatch => ({
  saveTime: (time) => dispatch(saveTime(time)),
});

export default TimerCountdown2 = connect(
  mapStateToProps,
  mapDispatchToProps)(TimerCountdown2)
