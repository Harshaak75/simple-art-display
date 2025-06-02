
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 75 },
        { name: "TypeScript", level: 70 },
        { name: "CSS/SCSS", level: 80 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "C++", level: 80 },
        { name: "PostgreSQL", level: 70 },
        { name: "MongoDB", level: 60 },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 80 },
        { name: "Docker", level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-slate-800/50 p-6 rounded-lg hover:bg-slate-800/70 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
