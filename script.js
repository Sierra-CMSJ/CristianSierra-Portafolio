window.addEventListener("scroll", function() {
    const body = document.body;
    const html = document.documentElement;

    // Altura total del documento
    const documentHeight = Math.max(body.scrollHeight, body.offsetHeight, 
                                    html.clientHeight, html.scrollHeight, html.offsetHeight);

    // Altura actual del scroll más la altura de la ventana
    const currentScroll = window.pageYOffset + window.innerHeight;

    const footer = document.querySelector("footer");

    // Mostrar el footer si se llega al final de la página
    if (currentScroll >= documentHeight) {
        footer.classList.add("visible");
    } else {
        footer.classList.remove("visible");
    }
});

// Obtener el tooltip y todos los elementos del carrusel
const tooltip = document.getElementById('tooltip');
const items = document.querySelectorAll('.carousel-item');

// Función para mostrar el tooltip y actualizar su posición
items.forEach(item => {
    item.addEventListener('mouseenter', (e) => {
        const toolName = e.target.getAttribute('data-toolname'); // Obtener el nombre de la herramienta
        tooltip.textContent = toolName; // Establecer el texto del tooltip
        tooltip.style.opacity = 1; // Hacer visible el tooltip
    });

    item.addEventListener('mousemove', (e) => {
        tooltip.style.left = e.pageX + 15 + 'px'; // Ajustar la posición cerca del cursor
        tooltip.style.top = e.pageY + 15 + 'px';
    });

    item.addEventListener('mouseleave', () => {
        tooltip.style.opacity = 0; // Ocultar el tooltip al salir del logo
    });
});



// Seleccionar el modal y el botón de cierre
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');

// Función para abrir el modal con contenido específico
document.querySelectorAll('.ver-mas').forEach(button => {
    button.addEventListener('click', (e) => {
        const projectId = e.target.getAttribute('data-project');

        // El subtítulo y la sección de tecnologías estén visibles por defecto
        document.getElementById('modal-tecnologias').style.display = 'block';
        document.getElementById('technologies-logos').style.display = 'block';
        
        // Actualiza el contenido del modal según el proyecto
        if (projectId === '1') {
            // Título y Descripción del Proyecto 1
            document.getElementById('modal-title').textContent = 'ANÁLISIS DEL COSTO COMPUTACIONAL DE LA CRIPTOGRAFÍA EN MICROCONTROLADORES';
            document.getElementById('modal-description').textContent = 'Este proyecto académico implementa algoritmos criptográficos como AES y ECC en microcontroladores de bajo costo, evaluando su eficiencia en términos de memoria y tiempo de procesamiento. Se obtiene que es posible aplicar criptografía segura en hardware con recursos limitados, lo que resulta clave para la protección de datos en dispositivos IoT.';
            document.getElementById('modal-proceso').textContent = 'A lo largo del proyecto, adquirí sólidos conocimientos en criptografía, incluyendo algoritmos de cifrado y funciones hash, con un enfoque en la seguridad de los datos. Aprendí a evaluar el uso de recursos en los sistemas y perfeccioné mis habilidades en análisis de tráfico de red y ciberseguridad. Además, tuve la oportunidad de presentar este trabajo en un congreso internacional de redes y seguridad en mayo del 2024 en la ciudad de Pasto Colombia';

            // Cambia las imágenes del proyecto y tecnologías
            document.getElementById('technologies-logos').innerHTML = `
                <img src="images/Cmas.png" alt="Logo Lenguaje 4" class="tech-logo">
                <img src="images/wireshark.png" alt="Logo Lenguaje 14" class="tech-logo">
                <img src="images/Arduino.png" alt="Logo Lenguaje 16" class="tech-logo">
                <img src="images/mqtt.png" alt="Logo Lenguaje 17" class="tech-logo">
            `;
            document.getElementById('project-images').innerHTML = `
                <img src="images/safaris.png" alt="Imagen 1 del Proyecto" class="project-img">
                <img src="images/4044.jpg" alt="Imagen 2 del Proyecto" class="project-img">
            `;
        } else if (projectId === '2') {
            // Título y Descripción del Proyecto 2
            document.getElementById('modal-title').textContent = 'SISTEMA DE VIDEO-VIGILANCIA IoT';
            document.getElementById('modal-description').textContent = 'Este proyecto personal integra herramientas del Internet de las Cosas (IoT) mediante el uso de sistemas embebidos con conectividad WiFi y APIs de mensajería. Utilizando la ESP32-CAM, se establece una comunicación con la API de Telegram para enviar fotografías y videos en tiempo real al recibir comandos por mensaje. Este desarrollo es ideal para reforzar la seguridad del hogar y monitorear personas mayores o mascotas de forma remota.';
            document.getElementById('modal-proceso').textContent = 'A través del proyecto, adquirí conocimientos en la implementación de APIs y comunicación WiFi en sistemas embebidos, mejorando mis habilidades de programación y diseño de soluciones IoT. La integración de la cámara con el sistema y su control mediante código robusto fortaleció mi capacidad para desarrollar proyectos innovadores, aplicando nuevas tecnologías y mejorando la seguridad en entornos domésticos.';

            // Cambia las imágenes del proyecto y tecnologías
            document.getElementById('technologies-logos').innerHTML = `
                <img src="images/Cmas.png" alt="Logo" class="tech-logo">
                <img src="images/Arduino.png" alt="logo" class="tech-logo">
                <img src="images/Telegram.png" alt="logo" class="tech-logo">
                <img src="images/micropython.png" alt="logo" class="tech-logo">
                <img src="images/Python.png" alt="logo" class="tech-logo">
            `;
            document.getElementById('project-images').innerHTML = `
                <img src="images/camara.jpg" alt="Imagen 2 del Proyecto" class="project-img">
                <img src="images/tienda.jpg" alt="Imagen 2 del Proyecto" class="project-img">   
            `;
        } else if (projectId === '3') {
            // Título y Descripción del Proyecto 3
            document.getElementById('modal-title').textContent = 'GEOLOCALIZA TU RUTA UNIVERSITARIA UIS';
            document.getElementById('modal-description').textContent = 'Este proyecto personal implementa un sistema con conectividad a internet para solucionar problemas de movilidad en mi universidad. Utilizando el protocolo ligero MQTT y una API de WhatsApp, el sistema transmite la ubicación en tiempo real de la ruta universitaria, notificando a los estudiantes cuándo deben salir a tomar el autobús para no perderlo. En una versión adicional, se implementó comunicación LoRa para que estudiantes fuera del campus, sin conexión a internet, puedan recibir la ubicación del autobús dentro del rango de transmisión.';
            document.getElementById('modal-proceso').textContent = 'Este proyecto me brindó experiencia en protocolos de comunicación implementados en entornos reales. Fortalecí mi capacidad para identificar necesidades tecnológicas en mi entorno y desarrollar soluciones innovadoras aplicando diferentes tecnologías. Además, adquirí conocimientos en la gestión segura de los datos y en el uso e integración de APIs. Actualmente, el proyecto está en fase de desarrollo avanzado, con el objetivo de presentarlo formalmente como solución a los desafíos de movilidad dentro del campus universitario.';

            // Cambia las imágenes del proyecto y tecnologías
            document.getElementById('technologies-logos').innerHTML = `
                <img src="images/Cmas.png" alt="Logo" class="tech-logo">
                <img src="images/Arduino.png" alt="logo" class="tech-logo">
                <img src="images/wasa.png" alt="logo" class="tech-logo">
                <img src="images/Python.png" alt="logo" class="tech-logo">
                <img src="images/mqtt.png" alt="Logo Lenguaje 17" class="tech-logo">
            `;
            document.getElementById('project-images').innerHTML = `
                <img src="images/gps.jpg" alt="Imagen 1 del Proyecto" class="project-img">
                <img src="images/wasa.jpg" alt="Imagen 2 del Proyecto" class="project-img">
            `;
        } else if (projectId === '4') {
            // Título y Descripción del Proyecto 3
            document.getElementById('modal-title').textContent = 'WEB SERVER DESPLEGADO Y SECURIZADO EN AWS';
            document.getElementById('modal-description').textContent = 'Este proyecto personal consistió en el despliegue de un servidor web seguro en AWS utilizando EC2, con una arquitectura basada en una VPC que incluye subredes para alojar bases de datos en RDS, un servidor web en una DMZ con balanceadores de carga, y una serie de mecanismos de seguridad avanzados. Implementé firewalls de última generación (pfSense), proxies web (Squid Proxy), un Web Application Firewall (WAF) y un sistema IDS/IPS del tipo NIDS como anti-DDoS (Security Onion) para garantizar la protección del tráfico y el control de accesos a través de grupos de seguridad bien definidos.';
            document.getElementById('modal-proceso').textContent = 'El desarrollo de este proyecto me permitió adquirir una sólida comprensión en la gestión de seguridad en entornos cloud, utilizando herramientas empresariales para la detección de intrusiones y el control del tráfico. Aprendí a diseñar y desplegar soluciones con un enfoque en la ciberseguridad, manteniendo la integridad y disponibilidad de los servicios y los datos, lo que me ha dado habilidades clave para aplicar en proyectos empresariales de infraestructura tecnológica segura.';

            // Cambia las imágenes del proyecto y tecnologías
            document.getElementById('technologies-logos').innerHTML = `
                <img src="images/AWS.png" alt="Logo" class="tech-logo">
                <img src="images/Pfsense.png" alt="logo" class="tech-logo">
                <img src="images/SquidProxy.png" alt="logo" class="tech-logo">
                <img src="images/SecurityOnion.png" alt="logo" class="tech-logo">
            `;
            document.getElementById('project-images').innerHTML = `
                <img src="images/cloudproyect.png" alt="Imagen 1 del Proyecto" class="cloud">
            `;
        } else if (projectId === '5') {
            // Título y Descripción del Proyecto 3
            document.getElementById('modal-title').textContent = 'DISEÑO DE BIODISPOSITIVO MAV INSPIRADO EN EL VUELO DEL ESCARABAJO PELOTERO';
            document.getElementById('modal-description').textContent = 'Este proyecto académico se centró en la biomimética del escarabajo pelotero, buscando replicar sus capacidades de vuelo y fuerza en sistemas robóticos destinados a misiones de búsqueda y rescate o entornos que requieren dispositivos pequeños, resistentes y ágiles. El trabajo incluyó un análisis detallado de la aerodinámica, resistencia de las alas y la estructura corporal del escarabajo, con el objetivo de diseñar un bio-dispositivo que imite su eficiente biomecánica.';
            document.getElementById('modal-proceso').textContent = 'Durante este proyecto, trabajé en un equipo multidisciplinario de mi universidad, donde destaqué por mis habilidades en investigación y desarrollo de soluciones tecnológicas innovadoras. Adquirí conocimientos en biomecánica, robótica y diseño de materiales. Como primer logro obtenido fue la participación en un congreso internacional de materiales en Medellín, Colombia, donde presentamos nuestros avances como ponencia tipo póster. Este proyecto no solo ha sido un vehículo para fortalecer mis competencias en innovación tecnológica y trabajo en equipo, sino que sigue en evolución, con el objetivo de crear un dispositivo funcional.';

            // Cambia las imágenes del proyecto y tecnologías
            document.getElementById('technologies-logos').innerHTML = `
                <img src="images/Arduino.png" alt="logo" class="tech-logo">
                <img src="images/Python.png" alt="logo" class="tech-logo">
                <img src="images/solid.png" alt="logo" class="tech-logo">
            `;
            document.getElementById('project-images').innerHTML = `
                <img src="images/biomimetica.jpg" alt="Imagen 1 del Proyecto" class="project-img">
                <img src="images/certifi.png" alt="Imagen 1 del Proyecto" class="project-img">
            `;
        } else if (projectId === '6') {
            // Título y Descripción del Proyecto 3
            document.getElementById('modal-title').textContent = 'UIS ELECTRONALYTICS';
            document.getElementById('modal-description').textContent = 'Este proyecto fue desarrollado durante la competencia internacional HackDay 2024, organizada por Indra Sistemas S.A, y tenía como objetivo resolver problemáticas relacionadas con la gestión de talento humano. Como equipo, diseñamos una solución innovadora utilizando inteligencia artificial, creando una herramienta de capacitación interactiva en formato de chat. Esta herramienta permitía a los nuevos empleados hacer preguntas sobre actividades propias del cargo y recibir respuestas inmediatas, automatizando lo que usualmente requeriría varios días lo que mejora significativamente el tiempo de adaptación del personal.';
            document.getElementById('modal-proceso').textContent = 'A través de este proyecto, adquirí habilidades clave en la implementación de APIs de inteligencia artificial, integrando la API de OpenAI, entrenada específicamente para responder preguntas relacionadas con el manual del empleado. Además, fortalecí mis competencias en desarrollo web, diseñando y desarrollando completamente la plataforma que permitía la interacción con la herramienta de IA. Esta experiencia no solo consolidó mi capacidad para aplicar tecnologías emergentes en entornos empresariales, sino que también destacó mi perfil innovador, logrando posicionar nuestro proyecto entre los cinco mejores de la competencia.';

            // Cambia las imágenes del proyecto y tecnologías
            document.getElementById('technologies-logos').innerHTML = `
                <img src="images/OpenAI.png" alt="logo" class="tech-logo1">
                <img src="images/Python.png" alt="logo" class="tech-logo">
                <img src="images/web.png" alt="logo" class="tech-logo2">
            `;
            document.getElementById('project-images').innerHTML = `
                <img src="images/flujoIA.png" alt="Imagen 2 del Proyecto" class="project-img">
                <img src="images/certihack.png" alt="Imagen 2 del Proyecto" class="project-img">
                <img src="images/hackton.png" alt="Imagen 1 del Proyecto" class="project">
            `;
        } else if (projectId === '7') {
            // Título y Descripción del Proyecto 3
            document.getElementById('modal-title').textContent = 'RALLY LATINOAMERICANO DE INNOVACIÓN 2024';
            document.getElementById('modal-description').textContent = 'Este proyecto fue desarrollado en el marco del Rally Latinoamericano de Innovación, una competencia internacional que reunió a nueve universidades de toda Latinoamérica, con evaluaciones tanto a nivel institucional como internacional. El desafío elegido por nuestro equipo consistió en crear una propuesta innovadora para la reutilización de residuos de construcción, transformándolos en nuevos materiales sostenibles. La competencia requería generar soluciones innovadoras en un periodo de 28 horas continuas, un entorno donde la creatividad, la resiliencia y la colaboración fueron clave.';
            document.getElementById('modal-proceso').textContent = 'Mi participación en esta competencia fue un importante hito de crecimiento profesional. A través del trabajo en equipo con personas de diversas disciplinas, pude fortalecer mis habilidades de comunicación y liderazgo bajo presión, además de aplicar metodologías de innovación en tiempo real. Este proyecto no solo me permitió demostrar mi capacidad para idear soluciones de impacto, sino que también nos llevó a obtener el segundo lugar a nivel universitario entre ocho equipos, resaltando nuestro esfuerzo por abordar problemáticas globales desde un enfoque tecnológico y sostenible.';
            
            // Oculta el subtítulo y la sección de tecnologías para este proyecto
            document.getElementById('modal-tecnologias').style.display = 'none';
            document.getElementById('technologies-logos').style.display = 'none';

            document.getElementById('project-images').innerHTML = `
                <img src="images/rally.png" alt="Imagen 2 del Proyecto" class="project">
            `;
            
        } else if (projectId === '8') {
            // Título y Descripción del Proyecto 8
            document.getElementById('modal-title').textContent = 'Actividades autodidactas en Ciberseguridad';
            document.getElementById('modal-description').textContent = 'Esta sección recopila varios informes y actividades que he realizado en cursos y certificaciones de ciberseguridad. Abarca temas como análisis de vulnerabilidades, configuraciones seguras, y pruebas de penetración, entre otros.';
    
            // Proceso (si es necesario, lo puedes personalizar o eliminar)
            document.getElementById('modal-proceso').textContent = 'Estos informes reflejan mi aprendizaje autónomo en diversas áreas de ciberseguridad, permitiéndome aplicar técnicas avanzadas y enfoques innovadores en el análisis de seguridad de sistemas, redes y aplicaciones.';

            document.getElementById('technologies-logos').innerHTML = `
                <img src="images/SQL.png" alt="logo" class="tech-logo">
                <img src="images/Python.png" alt="logo" class="tech-logo">
                <img src="images/linux.png" alt="logo" class="tech-logo">
                <img src="images/wireshark.png" alt="Logo" class="tech-logo">
                <img src="images/owasp.png" alt="Logo" class="tech-logo">
                <img src="images/Bash.png" alt="Logo" class="tech-logo">
                <img src="images/kali.png" alt="Logo" class="tech-logo">
                <img src="images/splunk.png" alt="Logo" class="tech-logo">
                <img src="images/suricata.png" alt="Logo" class="tech-logo">
            `;

            // Miniaturas con enlaces a los informes en Google Drive
            document.getElementById('project-images').innerHTML = `
                <div class="informes-grid">
                    <div class="informe-container">
                        <p class="informe-desc">AUDITORIA DE SEGURIDAD INTERNA</p>
                        <a href="https://docs.google.com/document/d/1GSyv7mcqvsvu0qPvARS3Id5QxPW_5o1Q/edit?usp=sharing&ouid=113022781381875765886&rtpof=true&sd=true" class="informe-link" target="_blank">Ver Informe</a>
                        <a href="https://docs.google.com/document/d/1TS03i8W2gCwcPI2WFx1eG4LNWWsYxyOR/edit?usp=sharing&ouid=113022781381875765886&rtpof=true&sd=true" class="informe-link" target="_blank">Ver Memorando</a>
                    </div>
                    <div class="informe-container">
                        <p class="informe-desc">REPORTE DE INCIDENTE EN RED</p>
                        <a href="https://docs.google.com/document/d/1uSN30-BzfLl3p2JNGkNifEaHiK2NQkPW/edit?usp=sharing&ouid=113022781381875765886&rtpof=true&sd=true" class="informe-link" target="_blank">Ver Informe</a>
                    </div>
                    <div class="informe-container">
                        <p class="informe-desc">REPORTE DE INCIDENTE DoS</p>
                        <a href="https://docs.google.com/document/d/1sFd2aoGr6IPU-IsVuABHr47Z4uOLeabN/edit?usp=sharing&ouid=113022781381875765886&rtpof=true&sd=true" class="informe-link" target="_blank">Ver Informe</a>
                    </div>
                    <div class="informe-container">
                        <p class="informe-desc">REPORTE DE INCIDENTE (FUERZA BRUTA)</p>
                        <a href="https://docs.google.com/document/d/197uBYoS_VP_1r5T6zYBxCh0RYhh3hiUS/edit?usp=sharing&ouid=113022781381875765886&rtpof=true&sd=true" class="informe-link" target="_blank">Ver Informe</a>
                    </div>
                    <div class="informe-container">
                        <p class="informe-desc">CONSULTAS SQL PARA TAREAS DE SEGURIDAD</p>
                        <a href="https://docs.google.com/document/d/1pIXkDgOCzNEtvqswsUby6hS8smX9xcH5/edit?usp=sharing&ouid=113022781381875765886&rtpof=true&sd=true" class="informe-link" target="_blank">Ver Informe</a>
                    </div>
                    <div class="informe-container">
                        <p class="informe-desc">GESTIÓN DE AMENAZAS</p>
                        <a href="https://docs.google.com/document/d/1g1YrOJexDBqkCVHT_oYlAFnZfu8Ia8nI/edit?usp=sharing&ouid=113022781381875765886&rtpof=true&sd=true" class="informe-link" target="_blank">Ver Informe</a>
                    </div>
                    <div class="informe-container">
                        <p class="informe-desc">DIARIO DE GESTIÓN DE INCIDENTES (Phishing)</p>
                        <a href="https://docs.google.com/document/d/1U3dk1cd0U27ICD8FGL5_PXxshOE_7g62/edit?usp=sharing&ouid=113022781381875765886&rtpof=true&sd=true" class="informe-link" target="_blank">Ver Informe</a>
                    </div>
                </div>
            `;
        }
        
        modal.style.display = 'block'; // Muestra el modal
    });
});

// Función para cerrar el modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cerrar el modal cuando se hace clic fuera del contenido
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});




