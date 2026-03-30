interface CertificationCardProps {
  name: string;
  description: string;
}

export default function CertificationCard({ name, description }: CertificationCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 flex flex-col gap-2 hover:shadow-sm transition-shadow">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[#2d7a3a]/10 rounded-md flex items-center justify-center flex-shrink-0">
          <span className="text-[#2d7a3a] font-bold text-xs text-center leading-tight">{name.split(' ').map(w => w[0]).join('')}</span>
        </div>
        <h3 className="font-semibold text-[#1a1a1a] text-sm">{name}</h3>
      </div>
      <p className="text-sm text-gray-500">{description}</p>
      <p className="text-xs text-gray-400 italic mt-1">Sample certification display for presentation purposes.</p>
    </div>
  );
}
