import { useEffect, useState, useRef } from "react";

export default function ManualScrollHint({ onComplete }) {
  const messageRef = useRef(
    "# Auto-scroll finished. Please scroll down to continue exploring",
  );
  const [typedMessage, setTypedMessage] = useState("");

  useEffect(() => {
    let i = 0;
    let deleting = false;
    let timeout;
    const message = messageRef.current;

    const loop = () => {
      if (!deleting) {
        // Typing phase
        if (i < message.length) {
          setTypedMessage(message.slice(0, i + 1));
          i++;
          timeout = setTimeout(loop, 50);
        } else {
          // Pause before deleting
          timeout = setTimeout(() => {
            deleting = true;
            loop();
          }, 1200);
          if (onComplete) {
            setTimeout(onComplete, 1200); // fire once when finished typing
          }
        }
      } else {
        // Deleting phase
        if (i > 0) {
          setTypedMessage(message.slice(0, i - 1));
          i--;
          timeout = setTimeout(loop, 30);
        } else {
          // Pause before typing again
          deleting = false;
          timeout = setTimeout(loop, 800);
        }
      }
    };

    loop();
    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <div className="w-full max-w-4xl mx-auto mb-0 px-4">
      <pre className="font-mono whitespace-pre-wrap break-words text-base sm:text-lg">
        <span className="text-green-400">$ victormdevops | </span>
        <span className="text-yellow-400">{typedMessage}</span>
        {/* Blinking cursor while typing OR deleting */}
        <span className="animate-pulse text-yellow-400">▋</span>
      </pre>
    </div>
  );
}
