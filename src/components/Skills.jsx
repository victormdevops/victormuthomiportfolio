import { useEffect, useState } from "react";
import { FaDocker, FaLinux, FaGithub, FaAws } from "react-icons/fa";
import {
  SiKubernetes,
  SiHelm,
  SiPrometheus,
  SiGrafana,
  SiGooglecloud,
  SiOracle,
  SiCivo,
  SiRailway,
  SiRender,
  SiGnubash,
} from "react-icons/si";
import ManualScrollHint from "./ManualScrollHint";

export default function Skills() {
  const [typedCommand, setTypedCommand] = useState("");
  const command = "cat skills.txt";

  // 🔁 Loop typing "cat skills.txt" with pauses
  useEffect(() => {
    let i = 0;
    let deleting = false;
    let timeout;

    const loop = () => {
      if (!deleting) {
        if (i < command.length) {
          setTypedCommand(command.slice(0, i + 1));
          i++;
          timeout = setTimeout(loop, 120);
        } else {
          // ⏸ pause before deleting
          timeout = setTimeout(() => {
            deleting = true;
            loop();
          }, 1000);
        }
      } else {
        if (i > 0) {
          setTypedCommand(command.slice(0, i - 1));
          i--;
          timeout = setTimeout(loop, 80);
        } else {
          // ⏸ pause before typing again
          deleting = false;
          timeout = setTimeout(loop, 800);
        }
      }
    };

    loop();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center px-6 py-16 bg-black text-white"
    >
      {/* Terminal command */}
      <div className="w-full max-w-4xl mb-6">
        <pre className="text-lg font-mono">
          <span className="text-green-400">$ victormdevops | </span>
          <span className="text-white">{typedCommand}</span>
          <span className="animate-pulse">█</span>
        </pre>
      </div>

      {/* ✅ Scroll hint shown before skills ONLY on mobile */}
      <div className="w-full max-w-4xl mb-6 block md:hidden">
        <ManualScrollHint />
      </div>

      {/* Skills Sections */}
      <div className="w-full max-w-5xl space-y-12">
        {/* DevOps Section */}
        <SkillSection title="Core DevOps Skills">
          <Skill icon={<FaDocker />} name="Docker" />
          <Skill icon={<SiKubernetes />} name="Kubernetes" />
          <Skill icon={<SiHelm />} name="Helm" />
          <Skill icon={<FaLinux />} name="Linux" />
          <Skill icon={<SiGnubash />} name="Bash" />
          <Skill icon={<SiPrometheus />} name="Prometheus" />
          <Skill icon={<SiGrafana />} name="Grafana" />
          <Skill icon={<FaGithub />} name="GitHub Actions" />
        </SkillSection>

        {/* Cloud Section */}
        <SkillSection title="Cloud & Deployment Skills">
          <Skill icon={<FaAws />} name="AWS" />
          <Skill icon={<SiGooglecloud />} name="Google Cloud" />
          <Skill icon={<SiOracle />} name="Oracle Cloud" />
          <Skill icon={<SiCivo />} name="Civo" />
          <Skill icon={<SiRailway />} name="Railway" />
          <Skill icon={<SiRender />} name="Render" />
        </SkillSection>
      </div>

      {/* ✅ Scroll hint shown AFTER skills ONLY on desktop+ */}
      <div className="w-full max-w-4xl mt-6 hidden md:block">
        <ManualScrollHint />
      </div>
    </section>
  );
}

function SkillSection({ title, children }) {
  return (
    <div className="animate-slide-up">
      <h2 className="text-2xl font-bold mb-4">
        <span className="text-green-400">#</span> {title}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {children}
      </div>
    </div>
  );
}

function Skill({ icon, name }) {
  return (
    <div className="flex flex-col items-center">
      {/* ✅ Icon green, text white, pulsing */}
      <div className="text-4xl mb-2 text-green-400 animate-pulse">{icon}</div>
      <p className="text-white">{name}</p>
    </div>
  );
}
