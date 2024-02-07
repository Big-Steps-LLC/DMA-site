import React, { useEffect, useState } from "react";

interface Skill {
  title: string;
  hash: string;
  icon?: any;
  color?: any;
}

interface SkillCategory {
  readonly skillsTitle: string;
  readonly skills: readonly Skill[];
}

interface SkillSectionProps {
  skillsData: readonly SkillCategory[];
  theme: "dark" | "light";
}

const SkillSection: React.FC<SkillSectionProps> = ({ skillsData, theme }) => {
  const [scaleFactor, setScaleFactor] = useState<number>(1);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const updateScaleFactor = () => {
      const newScaleFactor = window.innerWidth < 768 ? 0.8 : 0.94;
      setScaleFactor(newScaleFactor);
      setIsMobile(window.innerWidth < 768);
    };

    // Initial call to set scale factor based on initial screen width
    updateScaleFactor();

    // Event listener to update scale factor on window resize
    window.addEventListener("resize", updateScaleFactor);

    return () => {
      window.removeEventListener("resize", updateScaleFactor);
    };
  }, []);

  const getSkillIconSrc = (theme: string, skill: Skill) => {
    if (
      theme === "dark" &&
      (skill.title.includes("Next") || skill.title.includes("Express"))
    ) {
      return skill.icon[1];
    } else if (skill.title !== "Next.js" && skill.title !== "Express") {
      return skill.icon;
    } else {
      return skill.icon[0];
    }
  };

  const getSkillColor = (theme: string, skill: Skill) => {
    if (
      theme === "dark" &&
      (skill.title.includes("Next") || skill.title.includes("Express"))
    ) {
      return skill.color[1];
    } else if (skill.title !== "Next.js" && skill.title !== "Express") {
      return skill.color;
    } else {
      return skill.color[0];
    }
  };

  return (
    <div style={{ transform: `scale(${scaleFactor})` }}>
      <article
        className={`h-auto rounded-1.5xl p-8 md:p-8 lg:p-20 pt-16 md:pt-24 lg:pt-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 lg:gap-6 relative z-10 w-full ${
          theme === "dark"
            ? "bg-[var(--blackblue)] dark-mode-shadow"
            : "bg-[var(--icewhite)] dark-shadow"
        }`}
      >
        <div
          className="absolute top-5 md:top-10 left-1/2 transform -translate-x-1/2 px-2 md:px-4 py-1 md:py-2 rounded-t-xl"
        >
          <p className="font-black text-2xl md:text-3xl lg:text-4xl">
            <span className="text-[var(--orange)]">&lt;</span>
            {skillsData[0].skillsTitle}
            <span className="text-[var(--orange)]">/&gt;</span>
          </p>
        </div>
        {skillsData[0].skills.map((skill, index) => (
          <div
            key={index}
            className={`skill-item cursor-pointer flex flex-col gap-2 rounded-2xl p-4 border-solid border-[0.25rem] text-center items-center ${
              theme === "dark" ? "bg-[var(--darkblue)]" : "bg-[var(--icewhite)]"
            } ${isMobile && 'shadow-lg'}`}
            data-tooltip-id="my-tooltip"
            data-tooltip-content={skill.title}
            style={{
              borderColor: getSkillColor(theme, skill),
              padding: isMobile ? '1.5rem' : '1rem',
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseEnter={(e) => {
              if(isMobile) {
                e.currentTarget.style.transform = "scale(1.1)";
              }
            }}
            onMouseLeave={(e) => {
              if(isMobile) {
                e.currentTarget.style.transform = "scale(1)";
              }
            }}
          >
            <div>
              <img
                src={getSkillIconSrc(theme, skill)}
                alt={`${skill.icon}-icon`}
                className={`h-16 md:h-24 lg:h-[10rem] ${isMobile && 'w-16 md:w-24 lg:w-[10rem] mx-auto'}`}
              />
              {isMobile && (
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold mt-2">
                  {skill.title}
                </h3>
              )}
            </div>
          </div>
        ))}
      </article>
    </div>
  );
};

export default SkillSection;
