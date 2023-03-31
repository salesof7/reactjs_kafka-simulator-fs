import { Loader } from "google-maps";
import { useEffect, useRef } from "react";
import { getCurrentPosition } from "../utils/geolocation";

const googleMapsLoader = new Loader(import.meta.env.VITE_GOOGLE_API_KEY);

export function Map() {
  const mapRef = useRef<google.maps.Map>();

  useEffect(() => {
    (async () => {
      const [, position] = await Promise.all([
        googleMapsLoader.load(),
        getCurrentPosition({ enableHighAccuracy: true }),
      ]);
      const divMap = document.getElementById("map") as HTMLElement;
      mapRef.current = new google.maps.Map(divMap, {
        zoom: 15,
        center: position,
      });
    })();
  }, []);

  return (
    <div
      className="w-[1220px] h-[686px] bg-[#f0f0f0] rounded-[28px] mt-4"
      id="map"
    ></div>
  );
}
