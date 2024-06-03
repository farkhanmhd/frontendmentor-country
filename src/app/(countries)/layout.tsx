import Search from '../ui/Search';
import RegionDropdown from '../ui/RegionDropdown';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex w-full flex-col gap-y-[30px]">
      <Search />
      <RegionDropdown />
      {children}
    </main>
  );
};

export default Layout;
