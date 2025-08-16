document.addEventListener('DOMContentLoaded', () => {
  const menuContainer = document.getElementById('menu-container');
  if (!menuContainer) return;

  const path = window.location.pathname.split("/").pop();
  const isIndex = path === '' || path === 'index.html';
  const isProject = path === 'project.html';

  const links = {
    home: isIndex ? 'index.html' : '../index.html',
    projects: isIndex ? 'pages/project.html' : 'project.html',
    curriculum: isIndex ? 'assets/curriculo.pdf' : '../assets/curriculo.pdf'
  };

  menuContainer.innerHTML = `
    <aside>
      <div class="profile-pic">
        <img src="${isIndex ? 'assets/foto.jpg' : '../assets/foto.jpg'}" alt="Foto de Alessandro">
      </div>
      <h1>Alessandro dos Santos</h1>

      <div class="contact-info">
        <nav>
          <ul>
            <li><a href="${links.home}" ${isIndex ? 'class="active"' : ''}>Home</a></li>
            <li><a href="${links.projects}" ${isProject ? 'class="active"' : ''}>Projetos</a></li>
            <li><a href="${links.curriculum}" download="Curriculo-Alessandro.pdf">Currículo</a></li>
          </ul>
        </nav>
      </div>

      <div class="contact-info">
        <h2>Contato</h2>
        <ul>
          <li>&#128231; E-mail: alessandro.siga@gmail.com</li>
          <li>&#128188; LinkedIn: <a class="contact-link" href="https://www.linkedin.com/in/alessandros/" target="_blank">linkedin.com/in/alessandros</a></li>
          <li>&#128025; GitHub: <a class="contact-link" href="https://github.com/santospage" target="_blank">github.com/santospage</a></li>
        </ul>
      </div>
    </aside>
  `;
});
