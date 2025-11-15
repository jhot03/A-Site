import ExampleGrid from '../components/ExampleGrid';
import "../styles/Home.css";

const Home = () => {

    // example 

    return (
        <div className ="home-page">
            <div className="statement">
                <p>Objective will go here</p>
            </div>
            <ExampleGrid
                title="Automation Examples"
                examples={[
                    { name: 'Example 1', description: 'Description for example 1', video: 'example1.mp4' },
                    { name: 'Example 2', description: 'Description for example 2', video: 'example2.mp4' },
                ]}
            />
        </div>
    );
}

export default Home;