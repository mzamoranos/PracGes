import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import logo from '../images/Logo.png';

const HomePage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow flex flex-col items-center justify-center px-4 text-center">
                
            <img src={logo} alt="Gesprac" className="w-30 h-30 object-contain mb-4" />
                <h1 className="text-4xl font-bold text-red-800">
                    Bienvenido a GesPrac</h1>
                <p className="mt-4 text-lg max-w-2xl">
                    Gesprac surgió como una solución a la gestión de las prácticas de empresa que realizan 
                    los alumnos de la nueva FP Dual, manejando toda la documentación, calificación y 
                    comunicación entre el alumno, la empresa y el centro educativo.
                    
                </p>
            </main>
            <Footer />
        </div> 
    );
};

export default HomePage;
