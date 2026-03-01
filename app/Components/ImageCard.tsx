import { textPath } from "framer-motion/m"
import { imageCardProps } from "../types"



const ImageCard = ({image,title,text}:imageCardProps) => {
  return (
    <div style={styles.card}>
        <img src={image}  style={styles.image} /> 
        <div style={styles.content}>
            <h2 style={styles.title}>{title}</h2>
            <p style={styles.text}>{text}</p>
        </div>

    </div>
  )
}
//Styling for the card
const styles: { [key: string]: React.CSSProperties } = {
  card: {
    width: "100%",   // 🔥 important change
    maxWidth: "500px",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    backgroundColor: "#fff"
  },
  image: {
    width: "100%",
    height: "250px",   // slightly smaller for mobile
    objectFit: "cover"
  },
  content: {
    padding: "16px"
  },
  title: {
    margin: "0 0 8px 0",
    fontSize: "1.25rem"
  },
  text: {
    margin: "0",
    color: "#555",
    fontSize: "0.95rem"
  }
}

export default ImageCard