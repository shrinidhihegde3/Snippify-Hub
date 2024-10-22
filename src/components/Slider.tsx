import React, { useEffect, useState } from 'react';

// Defining a type for contributors
interface Contributor {
  id: number;
  login: string;
  avatar_url: string;
  url: string;
}

const ContributorsSlider: React.FC = () => {
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [loading, setLoading] = useState<boolean>(false); // State to track loading

  const fetchContributors = async () => {
    try {
      const response = await fetch('https://api.github.com/repos/shrinidhihegde3/Snippify-Hub/contributors');
      const data = await response.json();
      setContributors(data);
      console.log(data.login);

    } catch (error) {
      console.error('Error fetching contributors:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContributors();
  }, []);



  return (
    <div className="contributors-slider p-4 w-max self-center flex justify-center animate-infinite-scroll scroll-smooth hover:pause ">
      {loading ? (
        <div className="flex justify-center items-center h-32">
          <p className="text-white">Loading...</p> 
        </div>
      ) : (
        <div className='flex flex-row gap-16 '>
        {contributors.map((contributor) => (
          <div key={contributor.login} className="flex flex-col items-center">
            <a href={contributor.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <img
                src={contributor.avatar_url}
                alt={contributor.login}
                className="bg-white w-16 h-16 rounded-full mb-2 shadow-lg filter grayscale hover:filter-none"
                loading="lazy"
                />
              <p className="text-white text-center">{contributor.login}</p>
            </a>
          </div>
        ))}
        </div>
      )}
    </div>
  );
};


export default ContributorsSlider;