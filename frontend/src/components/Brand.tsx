import parNetLogo from "../assets/ParNetLogo.png";

type BrandProps = Readonly<{
  name: string;
}>;

export function Brand({ name }: BrandProps) {
  return (
    <div className="brand">
      <img className="brand-logo" src={parNetLogo} alt={name} />
    </div>
  );
}
