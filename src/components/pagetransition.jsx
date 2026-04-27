

export default function PageTransition({ children }) {
  return (
    <div style={{ animation: "pageEnter 0.4s ease forwards" }}>
      {children}
    </div>
  );
}