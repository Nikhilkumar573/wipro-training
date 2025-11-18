import React, { useEffect, useState } from "react";
import api from "../services/api";
import PackageCard from "../components/PackageCard";
import { useBookingContext } from "../context/BookingContext";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setSelectedPackage } = useBookingContext();

  useEffect(() => {
    let isMounted = true;
    api
      .get("/packages")
      .then((res) => {
        if (isMounted) {
          setPackages(res.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) return <p>Loading packages...</p>;

  return (
    <div>
      <h2 className="mb-4">Available Travel Packages</h2>
      <div className="row">
        {packages.map((pkg) => (
          <PackageCard key={pkg.id} pkg={pkg} onSelect={setSelectedPackage} />
        ))}
      </div>
      <p className="mt-3 text-muted">
        Tip: Click &quot;Book this package&quot; then go to the Booking page to see it
        pre-selected.
      </p>
    </div>
  );
};

export default Packages;
