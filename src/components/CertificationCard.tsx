interface CertificationCardProps {
  name: string;
  description: string;
}

export default function CertificationCard({ name, description }: CertificationCardProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-5 flex flex-col gap-3 hover:border-gray-200 hover:shadow-sm transition-all">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 bg-[#2d7a3a]/8 rounded-lg flex items-center justify-center flex-shrink-0">
          <span className="text-[#2d7a3a] font-bold text-xs leading-tight text-center">
            {name.split(' ').map(w => w[0]).join('').slice(0, 4)}
          </span>
        </div>
        <p className="font-semibold text-gray-900 text-sm">{name}</p>
      </div>
      <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}
