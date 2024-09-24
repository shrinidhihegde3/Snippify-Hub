import "./Box.css"; // Import CSS styles

interface BoxProps {
  children: any;
}

const Box: React.FC<BoxProps> = ({ children }) => {
  return (
    <div className="background">
      <div className="box flex p-3">{children}</div>
    </div>
  );
};

export default Box;
