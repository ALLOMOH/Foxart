import Container from "./Container";
import { branding } from "../constants";
export const Branding = () => {
  return (
    <Container>
        <div class="flex flex-wrap item-center justify-between lg:gap-1 max-w-5xl w-full mx-auto py-5 lg:py-10">
            {
                branding.map((brand,idx) => (
                    <div key={brand.key} class={`w-1/2 flex justify-center sm:w-1/4 md:w-1/4 lg:w-1/6 ${branding.length % 2 !== 0 && idx === branding.length-1 && " hidden lg:flex"}`}>
                      <img src={brand.image} width={180} height={96} alt={brand.alt}/>
                    </div>
                ))
            }
        </div>
    </Container>
  )
}