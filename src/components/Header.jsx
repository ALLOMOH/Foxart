import { logoApp } from "../assets/index";
import Container from "./Container";
import Button from "./Button";
import ElipseBlueBlur from './theme/Header';

const Header = () => {
  return (
    <div  className="border-b sticky z-10 top-0 border-stroke-1">
        <Container className={' bg-n-9'}>
            <div class="relative z-10 flex item-center justify-between py-4 lg:py-6">
                <img src={logoApp} width={104} height={32} alt="App_logo"/>
                <Button theme='primary'>Login</Button>
            </div>
            <ElipseBlueBlur/>
        </Container>
    </div>
  );
}



export default Header;