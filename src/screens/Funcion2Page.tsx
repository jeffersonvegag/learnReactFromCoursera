import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"

export function Funcion2Page() {
  return (
    <>
      {/* Header con el trigger */}
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
        <h1 className="text-xl font-semibold">Función #2</h1>
      </header>
      
      {/* Contenido principal */}
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-2">
          <div className="aspect-video rounded-xl bg-blue-100 flex items-center justify-center">
            <p className="text-lg font-semibold">Funcionalidad 2 - Parte A</p>
          </div>
          <div className="aspect-video rounded-xl bg-green-100 flex items-center justify-center">
            <p className="text-lg font-semibold">Funcionalidad 2 - Parte B</p>
          </div>
        </div>
        <div className="min-h-[50vh] flex-1 rounded-xl bg-yellow-50 p-4">
          <h2 className="text-xl font-bold mb-4">Contenido de la Función #2</h2>
          <p>Esta es la página de la función número 2. Aquí puedes agregar todo el contenido específico para esta funcionalidad.</p>
        </div>
      </div>
    </>
  )
}