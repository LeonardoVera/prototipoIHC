export default function TabNavigator({ children }) {
  return (
    <nav className="flex justify-center items-center gap-4 p-4 bg-white w-full">
      {children}
    </nav>
  );
}