import '../style/Experience.css';

const experienceData = [
  {
    role: 'Lead Product Designer',
    company: 'Fortknox',
    date: 'Mar 2022 – Oct 2023',
  },
  {
    role: 'Intern Designer',
    company: 'OmniSafe',
    date: 'Mar 2022 – Oct 2023',
  },
  {
    role: 'UI Designer',
    company: 'Doradesign',
    date: 'Mar 2022 – Oct 2023',
  },
  {
    role: 'Frontend Developer',
    company: 'OpacityAuthor',
    date: 'Mar 2022 – Oct 2023',
  },
];

const Experience = () => {
  return (
    <section className="experience">
      <h2>✺ Experience</h2>
      {experienceData.map((item, index) => (
        <div className="experience-row" key={index}>
          <div className="role">{item.role}</div>
          <div className="company">
            <span>{item.company}</span>
            <p>{item.date}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
