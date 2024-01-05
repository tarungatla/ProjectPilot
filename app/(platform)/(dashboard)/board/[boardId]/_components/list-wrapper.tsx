export const ListWrapper = ({
  children
}: { children: React.ReactNode; }) => {
  return (
    <li className="shrink-0 h-full w-[272px]"
      style={{ listStyle: 'none' }}>
      {children}
    </li>
  );
};