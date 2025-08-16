// import Image from "next/image";
import Carousel from "./Carousel";
import Mission from "./Mission";
// import Upcoming from "./Upcoming";
import Excos from "./Excos";
import Team from "./Team";

export default function Home() {
  return (
    <>
      <main>
        <Carousel />
        <Mission />
        {/* <Upcoming /> */}
        <Excos />
        <Team />
      </main>
    </>
  );
}
