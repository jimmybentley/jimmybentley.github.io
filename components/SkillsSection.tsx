const skillCategories = [
  {
    name: "Languages",
    skills: ["Python", "C", "C++", "Java", "SQL"],
  },
  {
    name: "Frameworks & Libraries",
    skills: ["PyTorch", "OpenCV", "scikit-learn", "OpenMP", "MPI", "libvirt"],
  },
  {
    name: "Cloud & Infrastructure",
    skills: ["Kubernetes", "Docker", "Temporal", "Spring Boot", "gRPC", "GraphQL"],
  },
  {
    name: "Domains",
    skills: [
      "Distributed Systems",
      "Cloud Computing",
      "High Performance Computing",
      "Reinforcement Learning",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700"
            >
              <h3 className="text-lg font-semibold text-blue-400 mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-gray-700/50 text-gray-200 text-sm font-medium rounded-lg hover:bg-gray-600/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
