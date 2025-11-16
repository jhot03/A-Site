import ExampleGrid from '../components/ExampleGrid';
import { serviceExamples } from '../constants/serviceExamples';
import "../styles/Home.css";

const Services = () => {

    return (
        <div className="home-page relative">

            {/* Examples Grid of services*/}
            <ExampleGrid
                title="Made For You"
                examples={serviceExamples}
            />
        </div>
    );
};

export default Services;