import { BottomCard, Container, CardNumber, TopCard, Line} from "./styles";

interface FlipProps {
  number: string;
  seconds?: boolean;
}
const Flip = (props: FlipProps) => {
  return(
    <Container seconds={props.seconds}>
      <CardNumber seconds={props.seconds}>{props.number}</CardNumber>
      <TopCard seconds={props.seconds}/>
      <BottomCard seconds={props.seconds}/>
      <Line seconds={props.seconds}/>
    </Container>
  )
}

export default Flip;
