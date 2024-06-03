import Region from '../ui/Region';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex w-full flex-col gap-y-[30px]">
      <Region />
      {children}
    </main>
  );
};

export default Layout;
