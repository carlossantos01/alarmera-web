import { useEffect, useState } from "react";
import Clock from "../components/clock";
import { Container } from "./styles";

const Home = () => {
  const [hours, setHours] = useState<Date>(new Date());

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setHours(date);
    } ,1000)
  }, [])

  return (
    <Container color={'primary'}>
      <Clock hours={hours}/>
    </Container>
  )
}

export default Home;
