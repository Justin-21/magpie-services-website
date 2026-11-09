export default function InfiniteTape({
  items = [
    "Strategy",
    "Content creation",
    "Paid ads",
    "Brand activation",
    "Community",
  ],
  className = "",
}: {
  items?: readonly string[];
  className?: string;
}) {
  return (
    <div className={`tape-wrap ${className}`} aria-label={items.join(", ")}>
      <div className="tape">
        <div className="tape-track">
          {[0, 1].map((copy) => (
            <div key={copy} aria-hidden={copy === 1}>
              {items.map((item) => (
                <span key={item}>
                  {item}
                  <b aria-hidden="true">✦</b>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
