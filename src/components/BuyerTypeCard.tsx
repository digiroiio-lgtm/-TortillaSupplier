interface BuyerTypeCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function BuyerTypeCard({ title, description, icon }: BuyerTypeCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-sm transition-shadow">
      <div className="text-2xl mb-3">{icon}</div>
      <h3 className="font-semibold text-[#1a1a1a] mb-2">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
}
