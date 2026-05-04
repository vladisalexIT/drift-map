export default function ModalOverlay({ onClick }) {
  return (
    <div
      className="absolute inset-0 bg-[#050816]/60 backdrop-blur-md"
      onClick={onClick}
      aria-hidden="true"
    />
  );
}