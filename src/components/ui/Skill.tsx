interface SkillProps {
  name: string;
}

const Skill = ({ name }: SkillProps) => {
  return (
    <div className="bg-blue-300/30 flex items-center justify-center rounded-full px-3 py-1 border-1 border-transparent hover:border-blue-300 transition-all duration-200 cursor-pointer">
      <span className="text-sm text-blue-300 hover:text-white transition-colors duration-200 cursor-pointer">
        {name}
      </span>
    </div>
  );
};

export default Skill;
