interface SkillProps {
  name: string;
}

const Skill = ({ name }: SkillProps) => {
  return (
    <div className="bg-[var(--highlight)]/30 flex items-center justify-center rounded-full px-3 py-1 border-1 border-transparent hover:border-[var(--highlight)] transition-all duration-200 cursor-pointer">
      <span className="text-sm text-[var(--highlight)] hover:text-[var(--primary)] transition-colors duration-200 cursor-pointer">
        {name}
      </span>
    </div>
  );
};

export default Skill;
