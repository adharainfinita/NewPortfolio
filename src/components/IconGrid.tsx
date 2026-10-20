import "../styles/IconGrid.css";

interface IconGridProps {
  icons: Array<[string, string]>;
}

const IconGrid: React.FC<IconGridProps> = ({ icons }) => {
  return (
    <div className="icon-grid-container">
      <div className="icon-grid">
        {icons.map(([title, url]) => (
          <img
            key={title}
            src={url}
            alt={`${title} icon`}
            className="icon-grid-image"
            title={title}
          />
        ))}
      </div>
    </div>
  );
};

export default IconGrid;
