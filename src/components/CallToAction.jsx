import Button from "./Button";
import {icoArrowRight} from "../assets";
import Container from "./Container";

export const CallToAction = ({minify = false}) => {
  return (
    <Container>
      <div className="max-w-4xl mx-auto py-5 lg:py-10">
        <div className={`flex items-center flex-col rounded-xl lg:rounded-3xl bg-gradient-to-tl from-p-4 to-p-4 p-6 lg:p-16 gap-8
          ${!minify ? "flex flex-col item-center":"flex flex-col items-center justify-between lg:flex lg:flex-row lg:items-center"}
          `}>
          <div className={ 
            minify ? 
              "space-y-1 text-center lg:text-start":
              "space-y-4 text-center"}
            >
            <div className="caption-1 text-n-1/50">Ready to Start ?</div>
            <h3 className="h3">start you free trial tody! </h3>
          </div>
          <Button theme="primary" className="flex text-center items-center justify-center gap-1">
            <span>Get Started</span>
            <img src={icoArrowRight} width={24} height={24} alt="Arrow Right" />
          </Button>
        </div>
      </div>
    </Container>
  );
};
