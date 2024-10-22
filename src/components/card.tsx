import React from "react";
import { useNavigate } from "react-router-dom";

interface CardProps {
  title: string;
  route: string;
}

const Card: React.FC<CardProps> = ({ title, route }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  const truncateTitle = (title: string) => {
    if (title.length > 25) {
      return title.slice(0, 25) + "...";
    }
    return title;
  };

  return (
    <div
      className="my-4 p-4 sm:p-6 bg-white/10 backdrop-blur-lg rounded-lg shadow-md border border-purple-900 cursor-pointer hover:shadow-lg transition-shadow w-full max-w-xs sm:max-w-sm lg:max-w-md min-h-28 flex justify-center items-center"
      onClick={handleClick}
    >
      <h2 className="text-base sm:text-lg font-semibold text-white text-center">
        {truncateTitle(title)}
      </h2>
    </div>
  );
};

export default Card;
