import styles from "./expertise.module.css";
import clsx from "clsx";
function Expertise() {
  return (
    <section className={clsx("p-8 bg-gray-100 sticky top-0 , pt-20" , styles.expertise)}>

        <article className={styles.container }>
            <h2 className="text-gray-400 uppercase mb-4">Our Expertise</h2>
            <h1 className="text-3xl font-medium">Engineered Solutions for Modern Commerce</h1>
            <div className={styles.box}><h1>Webiste Design & Developement</h1> <p>High-fidelity interfaces that convert visitors into loyal clients.</p></div>
            <div className={styles.box}><h1>Business Systems & Automation</h1> <p>Eliminating repetitive tasks through automation and custom workflow engineering.</p></div>
            <div className={styles.box}><h1>E-commerce Solutions</h1> <p>Robust storefronts built for high-volume sales and secure handling.</p></div>
            <div className={styles.box}><h1>Maintenance</h1> <p>Continous testing and updates to ensure peak technical health.</p></div>
        </article>
        <div className="h-screen"></div>
    </section>
  )
}

export default Expertise