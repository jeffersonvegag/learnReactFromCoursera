interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  location: {
    name: string;
  };
  origin: {
    name: string;
  };
}

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'alive':
        return 'bg-green-500';
      case 'dead':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={character.image} 
        alt={character.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{character.name}</h3>
          <div className={`w-3 h-3 rounded-full ${getStatusColor(character.status)}`}></div>
        </div>
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-medium">Status:</span> {character.status}
        </p>
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-medium">Species:</span> {character.species}
        </p>
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-medium">Gender:</span> {character.gender}
        </p>
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-medium">Location:</span> {character.location.name}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Origin:</span> {character.origin.name}
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;