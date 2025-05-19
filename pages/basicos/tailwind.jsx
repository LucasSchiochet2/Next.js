export default function Portfolio() {
  return (
    <div class="font-[Montserrat] text-white bg-stone-800">
      <header class="flex justify-between items-center py-6 px-10 bg-stone-900">
        <h1 class="font-bold text-3xl">Portfólio - Diego XYZ</h1>
        <p class="text-2xl">Desenvolvedor WEB Full Stack</p>
      </header>

      <section class="p-10 flex flex-col gap-4 border-b border-gray-600">
        <h2 class="text-2xl font-bold">Sobre mim</h2>
        <p>
          Sou um dos instrutores de HTML, CSS e JavaScript da Hashtag e ensino
          pessoas a sair do zero e a se desenvolverem na programação
        </p>
      </section>

      <section class="p-10 flex flex-col gap-4 border-b border-gray-600">
        <h2 class="text-2xl font-bold">Habilidades</h2>

        <div class="flex gap-8">
          <div class="flex flex-col gap-4">
            <h3 class="font-bold text-xl">Linguagens</h3>
            <ul class="list-disc ml-4">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>

          <div class="flex flex-col gap-4">
            <h3 class="font-bold text-xl">Tecnologias</h3>
            <ol class="list-decimal ml-4">
              <li>React</li>
              <li>Node</li>
              <li>Express JS</li>
              <li>Vite</li>
              <li>SASS</li>
              <li>Tailwind</li>
            </ol>
          </div>
        </div>
      </section>

      <section class="p-10 flex flex-col gap-4 border-b border-gray-600">
        <h2 class="text-2xl font-bold">Projetos</h2>

        <div class="flex gap-5">
          <div class="flex flex-col gap-3">
            <h3 class="font-bold text-xl">Réplica do Site do Google</h3>
            <img width="600" src=".../Imagens/Google.png" alt="Print do Projeto do Google" />
            <a
              target="_blank"
              rel="noopener noreferrer"
              class="underline hover:text-blue-300"
              href="https://www.youtube.com/watch?v=0Ba6PVHMa0A"
            >
              Clique aqui para acessar
            </a>
          </div>

          <div class="flex flex-col gap-3">
            <h3 class="font-bold text-xl">Réplica do Site do YouTube</h3>
            <img width="600" src="../Imagens/Youtube.png" alt="Print do Projeto do YouTube" />
            <a
              target="_blank"
              rel="noopener noreferrer"
              class="underline hover:text-blue-300"
              href="https://www.youtube.com/live/w7sIMxxVELs"
            >
              Clique aqui para acessar
            </a>
          </div>

          <div class="flex flex-col gap-3">
            <h3 class="font-bold text-xl">Réplica da Página de Login da Hashtag</h3>
            <img width="600" src="../Imagens/Hashtag.png" alt="Print do Projeto de Tela de Login" />
            <a
              target="_blank"
              rel="noopener noreferrer"
              class="underline hover:text-blue-300"
              href="https://www.youtube.com/watch?v=9xh-CHyjNYc"
            >
              Clique aqui para acessar
            </a>
          </div>
        </div>
      </section>

      <footer class="p-10 flex flex-col gap-4 items-center text-center">
        <h2 class="text-2xl font-bold">Informações de contato</h2>
        <div>
          <p>E-mail: XXX@YYY.COM</p>
          <p>Telefone: XX XXXXX-XXXX</p>
          <p>
            Site:
            <a
              target="_blank"
              rel="noopener noreferrer"
              class="underline hover:text-blue-300"
              href="https://www.hashtagtreinamentos.com"
            >
              www.hashtagtreinamentos.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
