import Paragraph from "../ui/Paragraph";

type SectionHeaderProps = {
  subtitle?: string;
  title: string;
  description?: string;
  className?: string;
};

const SectionHeader = ({ subtitle = "", title, className = "", description = "" }: SectionHeaderProps) => {
  return (
    <div className={`w-full px-4 ${className}`}>
      <p className="section-subtitle mb-6">{subtitle}</p>
      <h2 className="section-title">{title}</h2>
      <Paragraph variant="muted" size="md" className="mt-3">
        {description}
      </Paragraph>
    </div>
  );
};
export default SectionHeader;
