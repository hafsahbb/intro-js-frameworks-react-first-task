import ProfileCard from "./components/ProfileCard";
import "./App.css";

export default function App() {
  const profiles = [
    { name: "Alice Johnson", image: "https://randomuser.me/api/portraits/women/44.jpg", description: "Front-end developer and React enthusiast." },
    { name: "Bob Smith", image: "https://randomuser.me/api/portraits/men/46.jpg", description: "Full-stack developer and coffee lover." },
    { name: "Clara Lee", image: "https://randomuser.me/api/portraits/women/68.jpg", description: "UI/UX designer and creative thinker." }
  ];

  return (
    <div style={{ display:"flex", justifyContent:"center", flexWrap:"wrap", gap:"20px", padding:"20px" }}>
      {profiles.map(profile => (
        <ProfileCard key={profile.name} name={profile.name} image={profile.image} description={profile.description} />
      ))}
    </div>
  );
}
