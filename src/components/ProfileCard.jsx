export default function ProfileCard({ name, image, description }) {
  return (
    <div style={{
      border:"1px solid #ccc",
      borderRadius:"10px",
      padding:"20px",
      margin:"10px",
      width:"200px",
      textAlign:"center",
      boxShadow:"0 4px 8px rgba(0,0,0,0.1)"
    }}>
      <img src={image} alt={name} style={{
        width:"100px",
        height:"100px",
        borderRadius:"50%",
        objectFit:"cover"
      }} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}
