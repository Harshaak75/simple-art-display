
import { User, Award, Coffee, Code } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Code, label: "Projects Completed", value: "15+" },
    { icon: Coffee, label: "Cups of Coffee", value: "500+" },
    { icon: Award, label: "Awards Won", value: "2+" },
    { icon: User, label: "Happy Clients", value: "2+" },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              Hello! I'm an enthusiastic full-stack developer at the beginning of my professional journey. I'm passionate about building digital solutions that are not only functional but also user-friendly and visually appealing. I enjoy learning how to turn complex problems into simple and intuitive designs.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
             When I'm not coding, I love exploring new technologies and sipping on a good cup of coffee while brainstorming ideas for future projects.
            </p>
            <div className="flex flex-wrap gap-3">
              {["JavaScript", "React", "Node.js", "C++", "Express.js", "Typescript", "Prisma", "Tailwindcss", "PostgreSQL"].map((tech) => (
                <span
                  key={tech}
                  className="bg-slate-800 text-blue-400 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-800/50 p-6 rounded-lg text-center hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105"
                >
                  <IconComponent className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
