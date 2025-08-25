import { useEffect, useState } from "react";

export default function AboutMe({ onComplete }) {
  const command = "cat aboutme.txt";
  const [typedCommand, setTypedCommand] = useState("");
  const [showContent, setShowContent] = useState(false);
  const [hasShownContent, setHasShownContent] = useState(false);

  useEffect(() => {
    let i = 0;
    let deleting = false;
    let timeout;

    const loop = () => {
      if (!deleting) {
        if (i < command.length) {
          setTypedCommand(command.slice(0, i + 1));
          i++;
          timeout = setTimeout(loop, 100);
        } else {
          if (!hasShownContent) {
            setShowContent(true);
            setHasShownContent(true);
            if (onComplete) onComplete();
          }
          timeout = setTimeout(() => {
            deleting = true;
            loop();
          }, 1500);
        }
      } else {
        if (i > 0) {
          setTypedCommand(command.slice(0, i - 1));
          i--;
          timeout = setTimeout(loop, 50);
        } else {
          deleting = false;
          timeout = setTimeout(loop, 800);
        }
      }
    };

    loop();
    return () => clearTimeout(timeout);
  }, [command, onComplete, hasShownContent]);

  return (
    <div className="flex flex-col items-center justify-center px-6 py-2 bg-black text-white">
      {/* Terminal typing */}
      <div className="w-full max-w-4xl mb-6">
        <pre className="text-lg font-mono">
          <span className="text-green-400">$ victormdevops | </span>
          <span className="text-white">{typedCommand}</span>
          <span className="animate-pulse text-white">▋</span>
        </pre>
      </div>

      {/* Bio content */}
      {showContent && (
        <div className="w-full max-w-4xl flex flex-col md:flex-row items-center gap-8 mt-6 animate-fade-in-up">
          {/* Profile image */}
          <img
            src="/profile.png"
            alt="Victor Muthomi"
            className="w-40 h-40 rounded-full border-4 border-green-400 shadow-lg"
          />

          {/* Text content */}
          <div className="text-left space-y-4">
            <h2 className="text-2xl font-bold">
              <span className="text-green-400">#</span> About Me
            </h2>

            <p className="text-gray-300 leading-relaxed">
              I’m{" "}
              <span className="text-green-400 font-semibold">
                Victor Muthomi
              </span>
              , a DevOps Engineer passionate about building reliable, scalable,
              and automated systems. My expertise spans{" "}
              <span className="text-cyan-400">Docker</span>,{" "}
              <span className="text-cyan-400">Kubernetes</span>,{" "}
              <span className="text-cyan-400">Helm</span>,{" "}
              <span className="text-cyan-400">CI/CD pipelines</span>,{" "}
              <span className="text-cyan-400">Terraform</span>,{" "}
              <span className="text-cyan-400">Ansible</span>, and{" "}
              <span className="text-cyan-400">monitoring</span> with Prometheus
              & Grafana.
            </p>

            <p className="text-gray-300 leading-relaxed">
              I enjoy bridging the gap between development and operations,
              creating workflows that accelerate delivery while maintaining
              system resilience. With experience across multiple clouds (AWS,
              GCP, Oracle Cloud, Civo) and PaaS platforms, I adapt solutions to
              diverse infrastructures.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
