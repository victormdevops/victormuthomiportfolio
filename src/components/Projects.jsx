import { useEffect, useState } from "react";

export default function Projects({ onComplete }) {
  const projects = [
    {
      name: "Chat System",
      desc: "A real-time chat application with containerized deployment and automated CI/CD.",
      devops: "🐳 Docker · ⚡ GitHub Actions · ☁️ Render (PaaS)",
      backend: "Go (Gin)",
      frontend: "React",
      github: "https://github.com/victormdevops/chat-system",
      live: "https://github.com/victormdevops/chat-system",
    },
    {
      name: "RotaFlow",
      desc: "Shift scheduling & workflow management tool deployed on a VPS using Docker Compose.",
      devops:
        "🐳 Docker · 🐙 Docker Compose · ⚡ GitHub Actions · VPS Deployment",
      backend: "Node.js (Express)",
      frontend: "React (PERN)",
      github: "https://github.com/victormdevops/rotaflow",
      live: "https://rotaflow-frontend.vercel.app/",
    },
    {
      name: "TuVote",
      desc: "Online voting platform with monitoring (Prometheus + Grafana) for real-time metrics.",
      devops:
        "🐳 Docker · 🐙 Docker Compose · ⚡ GitHub Actions · 📊 Prometheus + Grafana · VPS Deployment",
      backend: "Node.js (Express)",
      frontend: "React (MERN)",
      github: "https://github.com/victormdevops/tuvote",
      live: "https://tuvote-frontend.vercel.app/",
    },
    {
      name: "GitConnect",
      desc: "Developer social platform deployed on Kubernetes clusters with Helm for package management.",
      devops:
        "☸️ Kubernetes (Minikube · K3d) · 🐳 Docker · ⚡ GitHub Actions · 📊 Prometheus + Grafana · ⎈ Helm",
      backend: "Go (Gin)",
      frontend: "React",
      github: "https://github.com/victormdevops/gitconnect",
      live: "https://gitconnect-frontend.vercel.app/",
    },
    {
      name: "RazorBill (Streaming Platform)",
      desc: "Streaming platform showcasing Kubernetes orchestration, monitoring, and CI/CD pipelines.",
      devops:
        "☸️ Kubernetes (Minikube · K3d) · 🐳 Docker · ⚡ GitHub Actions · 📊 Prometheus + Grafana · ⎈ Helm",
      backend: "Node.js (MERN)",
      frontend: "React",
      github: "https://github.com/victormdevops/razorbill",
      live: "https://razorbill-website.vercel.app/",
    },
  ];

  const command = "ls projects/";
  const [typedCommand, setTypedCommand] = useState("");

  useEffect(() => {
    let i = 0;
    let deleting = false;

    const typingInterval = setInterval(() => {
      if (!deleting) {
        setTypedCommand(command.slice(0, i + 1));
        i++;
        if (i === command.length) {
          setTimeout(() => {
            deleting = true;
          }, 1000); // pause before deleting
        }
      } else {
        setTypedCommand(command.slice(0, i));
        i--;
        if (i < 0) {
          deleting = false;
          i = 0;
        }
      }
    }, 120);

    return () => clearInterval(typingInterval);
  }, []);

  // 🔥 Auto trigger onComplete after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="flex flex-col items-center justify-center px-6 py-6 bg-black text-white">
      {/* Terminal command (loops forever) */}
      <div className="w-full max-w-4xl mb-4">
        <pre className="text-lg font-mono">
          <span className="text-green-400">$ victormdevops | </span>
          <span className="text-white">{typedCommand}</span>
          <span className="text-green-400 animate-pulse">▋</span>
        </pre>
      </div>

      {/* Projects (always visible) */}
      <div className="w-full max-w-4xl font-mono">
        {projects.map((proj, index) => (
          <div key={index} className="animate-fade-in-up">
            <h3 className="text-xl font-bold text-green-400">{proj.name}</h3>
            <p className="text-gray-300 mt-1">{proj.desc}</p>

            {/* Tech stacks */}
            <div className="mt-2 space-y-1 text-sm">
              <p>
                <span className="text-yellow-400">DevOps 🛠</span>:{" "}
                {proj.devops}
              </p>
              <p>
                <span className="text-yellow-400">Backend ⚙️</span>:{" "}
                {proj.backend}
              </p>
              <p>
                <span className="text-yellow-400">Frontend 🎨</span>:{" "}
                {proj.frontend}
              </p>
            </div>

            {/* Links */}
            <div className="flex gap-4 mt-2">
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                GitHub
              </a>
              {proj.live && (
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline"
                >
                  Live Demo
                </a>
              )}
            </div>

            {/* Separator */}
            {index < projects.length - 1 && (
              <div className="my-4">
                <pre className="text-green-400">
                  ----------------------------------------
                </pre>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
