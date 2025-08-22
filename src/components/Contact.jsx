import { useEffect, useState } from "react";
import { Mail, Github, Phone } from "lucide-react";

export default function Contact() {
  const command = "cat contact.txt";
  const [typedCommand, setTypedCommand] = useState("");
  const [showContent, setShowContent] = useState(false);
  const [loop, setLoop] = useState(0);

  useEffect(() => {
    let i = 0;
    let deleting = false;

    const typingInterval = setInterval(() => {
      if (!deleting) {
        // Typing forward
        setTypedCommand(command.slice(0, i + 1));
        i++;
        if (i === command.length) {
          setTimeout(() => {
            deleting = true;
          }, 1200); // pause after typing
        }
      } else {
        // Deleting backward
        setTypedCommand(command.slice(0, i));
        i--;
        if (i < 0) {
          deleting = false;
          i = 0;
          setLoop((prev) => prev + 1);
        }
      }
    }, 120);

    return () => clearInterval(typingInterval);
  }, [loop]);

  useEffect(() => {
    if (loop >= 1) {
      // After the first full loop, show the content
      setShowContent(true);
    }
  }, [loop]);

  return (
    <div className="flex flex-col items-center justify-center px-6 py-12 bg-black text-white">
      {/* Terminal typing */}
      <div className="w-full max-w-4xl mb-6">
        <pre className="text-lg font-mono">
          <span className="text-green-400">$ victormdevops | </span>
          <span className="text-white">{typedCommand}</span>
          <span className="text-green-400 animate-pulse">▋</span>
        </pre>
      </div>

      {showContent && (
        <div className="w-full max-w-4xl space-y-4 text-lg">
          {/* Email */}
          <a
            href="mailto:victormuthomi.dev@gmail.com"
            className="flex items-center gap-3 text-gray-300 hover:text-cyan-400"
          >
            <Mail className="w-5 h-5 text-yellow-400" />
            victorm.devops@gmail.com
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/victormdevops"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-300 hover:text-cyan-400"
          >
            <Github className="w-5 h-5 text-yellow-400" />
            github.com/victormdevops
          </a>

          {/* Phone */}
          <a
            href="https://wa.me/254710210258"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-300 hover:text-cyan-400"
          >
            <Phone className="w-5 h-5 text-yellow-400" />
            +254710210258
          </a>
        </div>
      )}
    </div>
  );
}
