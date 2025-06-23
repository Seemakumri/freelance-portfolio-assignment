import '../style/Works.css';
import envelopeImg from '../assets/image 21.svg';
import fortknoxImg from '../assets/blackImage.png';
import zenoImg from '../assets/image 22.svg';

const worksData = [
  {
    id: 1,
    image: envelopeImg,
    title: 'Analysis Application',
    description: 'With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.',
    tags: ['FIGMA', 'UX'],
  },
  {
    id: 2,
    image: fortknoxImg,
    title: 'Fortknox Application',
    description: 'With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.',
    tags: ['MOBILE', 'WEB'],
  },
  {
    id: 3,
    image: zenoImg,
    title: 'Zeno Application',
    description: 'With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.',
    tags: ['FIGMA'],
  },
];

const Works = () => {
  return (
    <section className="works">
      <div className="works-header">
        <h2>✺ Works</h2>
        <a href="#">view all</a>
      </div>

      {worksData.map((work) => (
       <div className="work-card" key={work.id}>
  <div className="work-image-wrapper">
    <img src={work.image} alt={work.title} className="work-image" />
  </div>
<div className="work-details">
  <div className="work-text">
    <h3>{work.title}</h3>
    <p>{work.description}</p>
    <div className="tags">
      {work.tags.map((tag, index) => (
        <span key={index}>{tag}</span>
      ))}
    </div>
  </div>
  <button>View Case Study</button>
</div>


</div>

      ))}
    </section>
  );
};

export default Works;
