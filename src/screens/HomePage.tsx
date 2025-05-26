import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import Perfil from "@/components/Perfil"
import CharacterCard from "@/components/CharacterCard"
import { useState, useEffect } from "react"

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

export function HomePage() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://rickandmortyapi.com/api/character');
        
        if (!response.ok) {
          throw new Error('Error al cargar los personajes');
        }
        
        const data = await response.json();
        setCharacters(data.results);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <>
      {/* Header con el trigger */}
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <h1 className="text-xl font-semibold">Mi Aplicación</h1>
      </header>
      
      {/* Contenido principal */}
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="aspect-video rounded-xl bg-muted/50 p-4">
            <Perfil 
              nombre="Juan Pérez" 
              edad={28} 
              profesion="Desarrollador" 
            />
          </div>
          <div className="aspect-video rounded-xl bg-muted/50 p-4">
            <Perfil 
              nombre="María García" 
              edad={32} 
              profesion="Diseñadora" 
            />
          </div>
          <div className="aspect-video rounded-xl bg-muted/50 p-4">
            <Perfil 
              nombre="Carlos López" 
              edad={25} 
              profesion="Marketing" 
            />
          </div>
        </div>
        
        {/* Sección de personajes de Rick y Morty */}
        <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Personajes de Rick y Morty</h2>
          
          {loading && (
            <div className="flex justify-center items-center h-64">
              <div className="text-lg">Cargando personajes...</div>
            </div>
          )}
          
          {error && (
            <div className="flex justify-center items-center h-64">
              <div className="text-lg text-red-500">Error: {error}</div>
            </div>
          )}
          
          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {characters.map((character) => (
                <CharacterCard key={character.id} character={character} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  )
}