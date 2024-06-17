import "./scroll.css";

export default function Spatialization() {
  return (
    <div className="w-full">
      <iframe
        src="https://storymaps.arcgis.com/stories/d35fb876eaff45d6a5b95a2d75ba34be"
        width="100%"
        allow="geolocation"
        className="content_page w-full h-screen overflow-auto"
      ></iframe>
    </div>
  );
}
