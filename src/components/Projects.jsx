import { content } from "../data";
const Projects = () => {
  const { Projects } = content;
  return (
    <section className="bg-bg_light_primary pb-20" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {Projects.project_content.map((content, i) => (
              <a href={content.link} key={i}>
                <div className="bg-white h-[40vh] shadow-lg rounded-md hover:cursor-pointer p-4"
                data-aos="fade-up"
                data-aos-delay={i * 400}
                >
                <img src={content.image} className="object-fit    h-[90%] w-full" alt="..." />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">{content.title}</h5>
                </div>
              </div>
              </a>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
