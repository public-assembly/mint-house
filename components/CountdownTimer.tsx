import Countdown from 'react-countdown';
import { Box } from '@chakra-ui/react';

const countdownRenderer = ({ days, hours, minutes, seconds }) => {
  return (
    <div>{`${days}d ` + `${hours}h ` + `${minutes}m ` + `${seconds}s`}</div>
  );
};

export const CountdownTimer = () => {
  return (
    <Countdown
      date={'2023-02-28T10:00:00'}
      intervalDelay={1000}
      precision={0}
      renderer={countdownRenderer}
    />
  );
};
