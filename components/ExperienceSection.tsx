const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Salesforce",
    team: "Core Infrastructure, Hyperforce Service Registry",
    dates: "May 2025 – Aug 2025",
    bullets: [
      "Built an extensible validation platform for infrastructure configuration schemas using Temporal workflows and Java Spring Boot",
      "Audited 8k+ microservices weekly to detect configuration drift and block invalid deployments",
      "Reduced workflow latency by passing prebuilt service definition objects instead of constructing large payloads at runtime",
      "Created and scaled GraphQL queries with pagination and rate limiting to protect the backing Postgres database from overload",
      "Deployed and validated builds in Kubernetes dev clusters with end-to-end workflow tests",
    ],
    tags: ["Temporal", "Spring Boot", "Java", "GraphQL", "Kubernetes", "Postgres"],
  },
  {
    title: "Machine Learning Engineer Intern",
    company: "Matterport",
    dates: "Sept 2024 – Dec 2024",
    bullets: [
      "Built a lightweight PyTorch unfurnished room classifier using a ViT-DINO backbone, achieving 98% accuracy",
      "Supported scalable data generation for generative AI-based furniture removal",
      "Built a data pipeline to preprocess and auto-label 20k+ panoramas with semantic segmentation masks",
      "Integrated multi-scan predictions and restored regression tests, reducing training time by 10× on AWS EC2",
      "Used Deep Lake for large-scale dataset management, ingestion, streaming, and reproducible experiments",
    ],
    tags: ["PyTorch", "ViT-DINO", "AWS EC2", "Deep Lake", "Computer Vision"],
  },
  {
    title: "Machine Learning Engineer Intern",
    company: "San Diego Supercomputer Center",
    dates: "May 2023 – July 2024",
    bullets: [
      "Deployed and scaled PyTorch LLMs across diverse accelerator hardware using Kubernetes and SLURM",
      "Parallelized training and optimized resource utilization with MPI, achieving 64× speedup with 64 processors",
      "Focused on distributed training and efficient use of HPC infrastructure",
    ],
    tags: ["PyTorch", "Kubernetes", "SLURM", "MPI", "HPC", "LLMs"],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-xl p-6 sm:p-8 border border-gray-700 hover:border-blue-500/50 transition-colors duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                  <p className="text-blue-400 font-medium">{exp.company}</p>
                  {exp.team && (
                    <p className="text-gray-400 text-sm">{exp.team}</p>
                  )}
                </div>
                <span className="text-gray-400 text-sm mt-2 sm:mt-0">{exp.dates}</span>
              </div>

              <ul className="space-y-2 mb-6">
                {exp.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex items-start text-gray-300">
                    <span className="text-blue-400 mr-3 mt-1.5">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs font-medium rounded-full"
                  >
                    {tag}
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
