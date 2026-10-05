import { useState } from 'react';
import { ProductList } from '../../components/ProductList/ProductList';

export const Productos = () => {
    // Estado para controlar lo que el usuario escribe en el input
    const [terminoBusqueda, setTerminoBusqueda] = useState('');

    return (
        <main className="bg-alabastro min-h-screen py-12">
            <section className="text-center px-4 mb-10">
                <h1 className="font-serif text-siena text-4xl md:text-5xl mb-4 uppercase tracking-widest">
                    Nuestro Catálogo
                </h1>
                <p className="font-sans text-carbon/80 text-lg max-w-2xl mx-auto mb-8">
                    Explorá todas nuestras piezas. Elaboradas con maderas nativas y una atención artesanal al detalle.
                </p>

                {/* Contenedor de la barra de búsqueda */}
                <div className="max-w-md mx-auto flex flex-col items-center">
                    <label htmlFor="buscador" className="text-siena font-medium mb-2 text-lg">
                        Buscá la pieza ideal para tu hogar
                    </label>
                    <input
                        type="text"
                        id="buscador"
                        placeholder="Ej. Sillón Algarrobo, Petiribí..."
                        value={terminoBusqueda}
                        onChange={(e) => setTerminoBusqueda(e.target.value)}
                        className="w-full p-3 bg-transparent border border-siena rounded-lg text-carbon placeholder:text-carbon/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-siena transition-shadow"
                    />
                </div>
            </section>

            {/* Le pasamos lo que el usuario escribe a la lista de productos */}
            <ProductList terminoBusqueda={terminoBusqueda} />
        </main>
    );
};