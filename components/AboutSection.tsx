export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-8">About Me</h2>

        <div className="bg-gray-800/50 rounded-xl p-8 border border-gray-700">
          <p className="text-gray-300 text-lg leading-relaxed">
            I&apos;m a software engineer and machine learning engineer with a focus on distributed systems,
            cloud infrastructure, and large-scale ML training. Currently pursuing my M.S. in Computer Science
            at Georgia Institute of Technology (expected May 2026), I previously earned my B.S. in Data Science
            from UC San Diego. My work centers on building scalable infrastructure that powers machine learning
            at scale&mdash;from optimizing distributed training pipelines to designing cloud-native architectures
            that handle thousands of microservices. I&apos;m particularly interested in the intersection of
            high-performance computing and ML infrastructure, where system efficiency directly impacts model
            training outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}
