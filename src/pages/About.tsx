import "../styles/About.css";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <p>
            On the left will be a headshot
            On the right will be text about me 
        </p>
      </div>
      <div className="about-images">
        // this will be a horizontal scrollable grid of images of me 
        <div className="image-item">Image 1</div>
        <div className="image-item">Image 2</div>
        <div className="image-item">Image 3</div>
      </div>
      <p>This is the about page content.</p>
    </div>
  );
}

export default About;