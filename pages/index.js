import background from "../app/background.jpg";
import Form350 from "./form350";
import Form500 from "./form500";
import Form1000 from "./form1000";

function HomePage() {
  return (
    <div className="relative w-full min-h-screen">
      <div
        className="min-h-screen min-w-screen flex items-center justify-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${background.src})` }}
      >
        <Form350 />
      </div>
    </div>
  );
}

export default HomePage;
