import "../styles/Testimonies.css";
import ExampleGrid from "../components/ExampleGrid";
import { testimonyExamples } from "../constants/testimonyExamples.ts";

const Testimonies = () => {
  return (
    <div className="testimonies-page">
        <ExampleGrid
            title="Client Work"
            examples={testimonyExamples}
        />
    </div>
  );
}

export default Testimonies;