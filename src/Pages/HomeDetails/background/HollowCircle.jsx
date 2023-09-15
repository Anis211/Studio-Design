export default function HollowCircle(personalStyles) {
  return (
    <div
      style={{
        width: "120px",
        height: "120px",
        borderRadius: 9999,
        border: "4.40px #FF007A solid",
        position: "relative",
        {...personalStyles},
      }}
    />
  );
}
