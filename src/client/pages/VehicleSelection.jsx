import DashboardNavbar from "../../components/DashboardNavbar";
import Footer from "../../components/Footer";
import HowItWorks from "../../components/HowItWorks";
import VehicleCard from "../../components/VehicleCard";

export default function VehicleSelection() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <DashboardNavbar />

      <main className="flex-1 max-w-7xl mx-auto p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-3">
          Select Your Vehicle Type
        </h1>

        <p className="text-gray-600 text-center mb-12">
          Choose the type of vehicle that needs service
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <VehicleCard
            title="Car"
            description="Sedan, Coupe, Hatchback"
            price="$15"
            image="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
          />

          <VehicleCard
            title="Motorcycle"
            description="Sport bike, Cruiser, Scooter"
            price="$12"
            image="https://images.unsplash.com/photo-1558981806-ec527fa84c39"
          />

          <VehicleCard
            title="Truck"
            description="Pickup, Heavy-duty"
            price="$20"
            image="https://images.unsplash.com/photo-1609521263047-f8f205293f24"
          />

          <VehicleCard
            title="Van / SUV"
            description="Minivan, SUV, Crossover"
            price="$18"
            image="https://images.unsplash.com/photo-1517949908114-721eb7cc8466"
          />
        </div>
        <HowItWorks />
      </main>

      <Footer />
    </div>
  );
}
