import Flip from "../flip";
import { Container, SubContainer } from "./styles";

interface ClockProps {
  hours: Date;
}

const Clock = (props: ClockProps) => {
  let hours = props.hours.getHours().toString().split('');
  let minutes = props.hours.getMinutes().toString().split('');
  let seconds = props.hours.getSeconds().toString().split('');

  if(hours.length === 1){
   hours = ['', ...hours];
  }
  if(minutes.length === 1){
    minutes = ['0', ...minutes];
  }
  if(seconds.length === 1){
    seconds = ['0', ...seconds];
  }

   return(
    <Container>
      <SubContainer>
        <Flip number={hours[0]}/>
        <Flip number={hours[1]}/>
      </SubContainer>
      <SubContainer>
        <Flip number={minutes[0]}/>
        <Flip number={minutes[1]}/>
      </SubContainer>
      <SubContainer>
        <Flip seconds number={seconds[0]}/>
        <Flip seconds number={seconds[1]}/>
      </SubContainer>
    </Container>
  )
}

export default Clock;
