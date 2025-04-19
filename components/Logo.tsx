export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
      <div className="flex items-center justify-center h-10 overflow-hidden ">
      <img src='logo.png' className="w-36 lg:w-44" />
      </div>
  )
}
