import "../styles/Testimonies.css";
import ExampleGrid from "../components/ExampleGrid";

const Testimonies = () => {
  return (
    <div className="testimonies-page">
        <ExampleGrid
            title="Client Testimonies"
            examples={[
                { name: 'Testimony 1', description: 'Description for testimony 1', service: 'Service A' },
                { name: 'Testimony 2', description: 'Description for testimony 2', service: 'Service B' },
                { name: 'Testimony 3', description: 'Description for testimony 3', service: 'Service C' },
            ]}
        />
    </div>
  );
}

export default Testimonies;