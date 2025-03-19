"use client";

import Container from "@/components/container";
import { IoCopy } from "react-icons/io5";
import { FiRefreshCcw } from "react-icons/fi";
import { Input } from "@/components/ui/input";
import { generatePassword } from "@/utility/password/password-generator";
import { useState } from "react";
import { copyToClipboard } from "@/utility/copy-text";
import { toast } from "sonner";
import { getPasswordStrength } from "@/utility/password/password-strength";

export default function GeneratePage() {
  const [password, setPassword] = useState(generatePassword(10));
  const [strength, setStrength] = useState(getPasswordStrength(password));

  const handleRegenerate = () => {
    const newPassword = generatePassword(10);
    setPassword(newPassword);
    setStrength(getPasswordStrength(newPassword));
  };

  const handleCopy = () => {
    copyToClipboard(password);
    toast("Copied to clipboard!");
  };

  let strengthClasses = "w-0 bg-transparent";

  if (strength === "Bad") strengthClasses = "w-1/4 bg-red-400";
  if (strength === "Dubious") strengthClasses = "w-1/2 bg-orange-400";
  if (strength === "Good") strengthClasses = "w-3/4 bg-lime-400";
  if (strength === "Great") strengthClasses = "w-full bg-green-400";

  return (
    <div className="grid grid-cols-3 grid-rows-10 gap-10 p-6 max-h-full h-full overflow-hidden">
      <Container className="col-span-3 row-span-4 relative">
        <h1 className="text-lg font-semibold mb-4 border-b-1 border-zinc-900 p-4">
          Generate password
        </h1>
        <div className="px-4 py-10 flex justify-center gap-4 items-center">
          <input
            className="kode-mono text-[4rem] px-4 border-b-4 border-zinc-900"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setStrength(getPasswordStrength(e.target.value));
            }}
          />
          <button
            onClick={handleCopy}
            className="p-4 rounded-full hover:bg-white/10 transition-all"
          >
            <IoCopy size={30} />
          </button>
          <button
            onClick={handleRegenerate}
            className="p-4 rounded-full hover:bg-white/10 transition-all"
          >
            <FiRefreshCcw size={30} />
          </button>
        </div>
        <div
          className={`h-2 transition-all absolute left-0 bottom-0 ${strengthClasses}`}
        ></div>
      </Container>
      <Container className="col-span-3 row-span-2"></Container>
      <Container className="col-span-1 row-span-4">
        <h1 className="text-lg font-semibold mb-4 border-b-1 border-zinc-900 p-4">
          Modify visual experience
        </h1>
      </Container>
      <Container className="col-span-1 row-span-4">
        <h1 className="text-lg font-semibold mb-4 border-b-1 border-zinc-900 p-4">
          Manually choose
        </h1>
      </Container>
      <Container className="col-span-1 row-span-4">
        <h1 className="text-lg font-semibold mb-4 border-b-1 border-zinc-900 p-4">
          Strength checker
        </h1>
      </Container>
    </div>
  );
}
