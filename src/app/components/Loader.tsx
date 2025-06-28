export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div
        className="w-12 h-12 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"
        role="status"
        aria-label="Loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
