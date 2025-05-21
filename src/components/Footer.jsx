import  Container from "./Container";
import {social} from '../constants';

export const Footer = () => (
    <div className="bg-n-7 py-5 lg:py-12 mt-5 lg:mt-16">
        <Container className="flex flex-col gap-3 lg:flex-row lg:gap-1 items-center justify-between body-3 text-pink-300">
            <div className="flex items-center gap-4">
                {social.map((link)=>(
                    <a key={link.id} title={link.alt} href={link.link} target="_blank" rel="noreferrer"><img src={link.ico}/></a>
                ))}
            </div>
            <div className="space-x-4">
                <a href="#" target="_blank" rel="nreferrer">
                    Terms & conditions
                </a>
                <a href="#" targe="_blank" rel="noreferrer">
                    Privacy Policy
                </a>
            </div>
            <div>
                &copy; 2024 All right reserved <a href="#/" target="_blank" rel="noreferrer">Allomoh Code</a>
            </div>
        </Container>
    </div>
)





