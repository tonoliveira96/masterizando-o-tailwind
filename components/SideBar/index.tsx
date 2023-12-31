import Logo from './Logo';
import { MainNavigation } from './MainNavigation';

export function SideBar() {
  return (
    <aside className='border-r border-zinc-200 px-5 py-8 space-y-6'>
      <Logo />
      <div className='flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm'>
        <input type="text" className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600" placeholder='Search' />
      </div>
      <MainNavigation />
    </aside>
  );
}