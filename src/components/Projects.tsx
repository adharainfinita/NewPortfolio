import "../styles/Projects.css";

function Projects() {
	return (
		<section className="sections-standar">
			<h1>Proyectos destacados</h1>
			<div className="horizontal-section">
        <section>
          <h3>Facil Market</h3>
				<p>
					Descripción del proyectoDescripción del proyectoDescripción del
					proyectoDescripción del proyectoDescripción del proyectoDescripción
					del proyectoDescripción del proyecto
				</p>
				<a href="https://github.com/adharainfinita/facil-market-proyect">
					link del proyecto
				</a>
        </section>
       
          <img
					className="project-images"
					src="https://res.cloudinary.com/dlbhecdey/image/upload/v1725310360/Captura_de_pantalla_de_2024-09-02_17-47-00_zlazv0.png"
					alt="proyect1-image"
				/>
			</div>
			<div className="horizontal-section">
        <section>
          <h3>MyBookPage</h3>
          <p>
					Descripción del proyectoDescripción del proyectoDescripción del
					proyectoDescripción del proyectoDescripción del proyectoDescripción
					del proyectoDescripción del proyecto
				</p>
        <a href="https://github.com/adharainfinita/my-books-pages">
					link del proyecto
				</a>
        </section>
        <img className="project-images" src="https://res.cloudinary.com/dlbhecdey/image/upload/v1720895259/unknown_2024.07.13-15.11_5_ttz35d.gif" alt="" />
      </div>
			<div className="horizontal-section">
        <section>
          <h3>CdelU Market</h3>
            <p>
					Descripción del proyectoDescripción del proyectoDescripción del
					proyectoDescripción del proyectoDescripción del proyectoDescripción
					del proyectoDescripción del proyecto
				</p>
        <a href="https://github.com/adharainfinita/facil-market-cdu-platform">link</a>
        </section>
        <img className="project-images" src="https://res.cloudinary.com/dlbhecdey/image/upload/v1692317595/samples/ecommerce/accessories-bag.jpg" alt="" />
      </div>
		</section>
	);
}

export default Projects;
