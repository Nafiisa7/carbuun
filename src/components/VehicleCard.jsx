import { useNavigate } from "react-router-dom";

export default function VehicleCard({ image, title, description, price }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/service-request/${title}`)}
      className="bg-white rounded-xl overflow-hidden border hover:shadow-lg transition cursor-pointer"
    >
      <img src={image} className="h-40 w-full object-cover" />

      <div className="p-5">
        <h3 className="text-lg font-semibold">{title}</h3>

        <p className="text-gray-500 text-sm mb-4">{description}</p>

        <hr className="mb-3" />

        <div className="flex justify-between">
          <span className="text-gray-500 text-sm">Base deposit</span>

          <span className="font-bold">{price}</span>
        </div>
      </div>
    </div>
  );
}
