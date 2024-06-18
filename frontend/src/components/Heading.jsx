

export function PrimaryHeading({ children }) {
  return <h1 className={` text-5xl font-bold text-primary p-3`}>{children}</h1>;
}

export function SecondaryHeading({ children }) {
  return <h2 className={` text-3xl font-medium text-primary p-2`}>{children}</h2>;
}