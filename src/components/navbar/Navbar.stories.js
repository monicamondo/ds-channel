/**
 * Navbar — Legacy Channel
 *
 * Fiel ao sistema em produção.
 * Cada story abre um menu diferente para inspeção visual.
 * A story "Interativo" simula navegação real com clique.
 */
import './Navbar.css';

export default {
  title: 'Componentes/Navbar',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'channel-light' },
    docs: {
      description: {
        component:
          'Barra de navegação principal do sistema Channel. Usa tokens do Design System e ícones Font Awesome 4.',
      },
    },
  },
};

/* ─────────────────────────────────────────────────────────────
   HTML dos dropdowns
   ───────────────────────────────────────────────────────────── */

const dropdownMeuChannel = `
  <div class="navbar-dropdown">
    <!-- Coluna 1 -->
    <div class="navbar-dropdown-col">
      <div class="navbar-section">
        <div class="navbar-section-title">
          <i class="fa fa-refresh"></i> Operações
        </div>
        <ul class="navbar-section-items">
          <li><a href="#">Minhas demandas abertas</a></li>
          <li><a href="#">Minhas demandas finalizadas</a></li>
          <li><a href="#">Demandas pendentes</a></li>
          <li><a href="#">Incluir nova demanda</a></li>
        </ul>
      </div>
      <div class="navbar-section">
        <div class="navbar-section-title">
          <i class="fa fa-bar-chart"></i> Reuniões
        </div>
        <ul class="navbar-section-items">
          <li><a href="#">Ações das reuniões</a></li>
          <li><a href="#">Decisões das reuniões</a></li>
          <li><a href="#">Minhas reuniões</a></li>
        </ul>
      </div>
    </div>

    <div class="navbar-col-divider"></div>

    <!-- Coluna 2 -->
    <div class="navbar-dropdown-col">
      <div class="navbar-section">
        <div class="navbar-section-title">
          <i class="fa fa-briefcase"></i> Portfólios
        </div>
        <ul class="navbar-section-items">
          <li><a href="#">Proposição de projetos</a></li>
        </ul>
      </div>
      <div class="navbar-section">
        <div class="navbar-section-title">
          <i class="fa fa-file-text-o"></i> Planos de ação
        </div>
        <ul class="navbar-section-items">
          <li><a href="#">Meus planos de ação</a></li>
          <li><a href="#">Minhas ações</a></li>
          <li><a href="#">Minhas aprovações</a></li>
        </ul>
      </div>
    </div>

    <div class="navbar-col-divider"></div>

    <!-- Coluna 3 -->
    <div class="navbar-dropdown-col col-wide">
      <div class="navbar-section">
        <div class="navbar-section-title">
          <i class="fa fa-line-chart"></i> Indicadores
        </div>
        <ul class="navbar-section-items">
          <li><a href="#">Indicadores que sou responsável</a></li>
          <li><a href="#">Aprovações de medições pendentes</a></li>
          <li><a href="#">Relatório de medições pendentes</a></li>
          <li><a href="#">Minhas medições reprovadas</a></li>
        </ul>
      </div>
      <div class="navbar-section">
        <div class="navbar-section-title">
          <i class="fa fa-exclamation-triangle"></i> Riscos corporativos
        </div>
        <ul class="navbar-section-items">
          <li><a href="#">Reportar incidente</a></li>
          <li><a href="#">Reportar risco</a></li>
          <li><a href="#">Meus Riscos</a></li>
        </ul>
      </div>
    </div>
  </div>
`;

const dropdownPlanoEstrategico = `
  <div class="navbar-dropdown">
    <!-- Coluna 1: links diretos -->
    <div class="navbar-dropdown-col">
      <a class="navbar-direct-link" href="#"><i class="fa fa-flag"></i> Objetivos</a>
      <a class="navbar-direct-link" href="#"><i class="fa fa-puzzle-piece"></i> Diretrizes</a>
      <a class="navbar-direct-link" href="#"><i class="fa fa-puzzle-piece"></i> Mapa estratégico</a>
      <a class="navbar-direct-link" href="#"><i class="fa fa-bar-chart"></i> Reuniões</a>
    </div>

    <div class="navbar-col-divider"></div>

    <!-- Coluna 2: Desempenho e Configurações -->
    <div class="navbar-dropdown-col col-wide">
      <div class="navbar-section">
        <div class="navbar-section-title">
          <i class="fa fa-adjust"></i> Desempenho
        </div>
        <ul class="navbar-section-items">
          <li><a href="#">Planejamento de metas</a></li>
          <li><a href="#">Medições de indicadores</a></li>
        </ul>
      </div>
      <div class="navbar-section" style="margin-top: 12px;">
        <div class="navbar-section-title">
          <i class="fa fa-cog"></i> Configurações
        </div>
        <ul class="navbar-section-items">
          <li><a href="#">Revisões</a></li>
          <li><a href="#">Perspectivas</a></li>
          <li><a href="#">Temas Estratégicos</a></li>
          <li><a href="#" class="link-more">Ver mais</a></li>
        </ul>
      </div>
    </div>

    <div class="navbar-col-divider"></div>

    <!-- Coluna 3: Relatórios -->
    <div class="navbar-dropdown-col col-wide">
      <div class="navbar-section">
        <div class="navbar-section-title">
          <i class="fa fa-list"></i> Relatórios
        </div>
        <ul class="navbar-section-items">
          <li><a href="#">Acompanhamento de desempenho estratégico</a></li>
        </ul>
      </div>
    </div>
  </div>
`;

const dropdownEstrategia = `
  <div class="navbar-dropdown">
    <!-- Coluna 1: links diretos -->
    <div class="navbar-dropdown-col">
      <a class="navbar-direct-link" href="#"><i class="fa fa-plus-square-o"></i> Planos estratégicos</a>
      <a class="navbar-direct-link" href="#"><i class="fa fa-flag"></i> Objetivos operacionais</a>
      <a class="navbar-direct-link" href="#"><i class="fa fa-briefcase"></i> Portfólios</a>
      <a class="navbar-direct-link" href="#"><i class="fa fa-th-list"></i> Programas</a>
      <a class="navbar-direct-link" href="#"><i class="fa fa-exclamation-triangle"></i> Riscos corporativos</a>
      <a class="navbar-direct-link" href="#"><i class="fa fa-calendar"></i> Acompanhamento de reuniões</a>
    </div>

    <div class="navbar-col-divider"></div>

    <!-- Coluna 2: Relatórios -->
    <div class="navbar-dropdown-col col-wide">
      <div class="navbar-section">
        <div class="navbar-section-title">
          <i class="fa fa-bar-chart"></i> Relatórios
        </div>
        <ul class="navbar-section-items">
          <li><a href="#">Acompanhamento de desempenho estratégico</a></li>
          <li><a href="#">Visualização de planos estratégicos</a></li>
        </ul>
      </div>
    </div>

    <div class="navbar-col-divider"></div>

    <!-- Coluna 3: Configurações -->
    <div class="navbar-dropdown-col col-wide">
      <div class="navbar-section">
        <div class="navbar-section-title">
          <i class="fa fa-cog"></i> Configurações
        </div>
        <ul class="navbar-section-items">
          <li><a href="#">Catálogo de processos</a></li>
          <li><a href="#">Categorias de fator de risco</a></li>
          <li><a href="#">Categorias de reuniões</a></li>
          <li><a href="#">Consulta propostas de projetos</a></li>
        </ul>
      </div>
    </div>
  </div>
`;

const dropdownDesempenho = `
  <div class="navbar-dropdown">
    <!-- Coluna 1: links diretos -->
    <div class="navbar-dropdown-col">
      <a class="navbar-direct-link" href="#"><i class="fa fa-calendar-check-o"></i> Planejamento de metas</a>
      <a class="navbar-direct-link" href="#"><i class="fa fa-line-chart"></i> Medições de indicador</a>
      <a class="navbar-direct-link" href="#"><i class="fa fa-file-text-o"></i> Planos de ação</a>
    </div>

    <div class="navbar-col-divider"></div>

    <!-- Coluna 2: Relatórios -->
    <div class="navbar-dropdown-col col-wide">
      <div class="navbar-section">
        <div class="navbar-section-title">
          <i class="fa fa-bar-chart"></i> Relatórios
        </div>
        <ul class="navbar-section-items">
          <li><a href="#">Acompanhamento de indicadores</a></li>
          <li><a href="#">Visão histórica de indicadores</a></li>
          <li><a href="#">Benchmarking de indicadores</a></li>
          <li><a href="#">Acompanhamento de planos de ação</a></li>
          <li><a href="#">Consolidado de ações</a></li>
          <li><a href="#">Painéis de controle</a></li>
          <li><a href="#">Apresentação de painéis de controle</a></li>
          <li><a href="#">Painel de indicadores de projetos</a></li>
        </ul>
      </div>
    </div>

    <div class="navbar-col-divider"></div>

    <!-- Coluna 3: Configurações -->
    <div class="navbar-dropdown-col col-wide">
      <div class="navbar-section">
        <div class="navbar-section-title">
          <i class="fa fa-cog"></i> Configurações
        </div>
        <ul class="navbar-section-items">
          <li><a href="#">Indicadores</a></li>
          <li><a href="#">Faixas de atenção</a></li>
          <li><a href="#">Configurações de alertas de indicadores</a></li>
          <li><a href="#" class="link-more">Ver mais</a></li>
        </ul>
      </div>
    </div>
  </div>
`;

const dropdownProjetosEDemandas = `
  <div class="navbar-dropdown">
    <!-- Coluna 1: links diretos -->
    <div class="navbar-dropdown-col">
      <a class="navbar-direct-link" href="#"><i class="fa fa-list-alt"></i> Projetos</a>
      <a class="navbar-direct-link" href="#"><i class="fa fa-refresh"></i> Operações</a>
      <a class="navbar-direct-link" href="#"><i class="fa fa-file-text"></i> Contratos</a>
      <a class="navbar-direct-link" href="#"><i class="fa fa-folder-open-o"></i> Documentos compartilhados</a>
      <a class="navbar-direct-link" href="#"><i class="fa fa-share-alt"></i> Lições aprendidas</a>
      <a class="navbar-direct-link" href="#"><i class="fa fa-pencil"></i> Painel de apontamentos</a>
    </div>

    <div class="navbar-col-divider"></div>

    <!-- Coluna 2: Relatórios -->
    <div class="navbar-dropdown-col col-wide">
      <div class="navbar-section">
        <div class="navbar-section-title">
          <i class="fa fa-bar-chart"></i> Relatórios
        </div>
        <ul class="navbar-section-items">
          <li><a href="#">Relatórios personalizados</a></li>
          <li><a href="#">Mapa de alocação</a></li>
          <li><a href="#">Acompanhamento da execução de projetos</a></li>
          <li><a href="#">Controle previsto x realizado</a></li>
          <li><a href="#">Desempenho de projetos</a></li>
          <li><a href="#">Problemas de projetos</a></li>
          <li><a href="#">Riscos de projetos</a></li>
          <li><a href="#">Entregas de projetos</a></li>
          <li><a href="#">Resultados financeiros de projetos</a></li>
          <li><a href="#">Consultar Dados Cadastrais de Empresas</a></li>
          <li><a href="#">Fluxo financeiro de projetos</a></li>
          <li><a href="#" class="link-more">Ver mais</a></li>
        </ul>
      </div>
    </div>

    <div class="navbar-col-divider"></div>

    <!-- Coluna 3: Configurações + Carga -->
    <div class="navbar-dropdown-col col-wide">
      <div class="navbar-section">
        <div class="navbar-section-title">
          <i class="fa fa-cog"></i> Configurações
        </div>
        <ul class="navbar-section-items">
          <li><a href="#">Calendários</a></li>
          <li><a href="#">Fluxos de trabalho</a></li>
          <li><a href="#">Formulários padrão</a></li>
          <li><a href="#" class="link-more">Ver mais</a></li>
        </ul>
      </div>
      <div class="navbar-section">
        <div class="navbar-section-title">
          <i class="fa fa-upload"></i> Carga
        </div>
        <ul class="navbar-section-items">
          <li><a href="#">Importação de custos realizados multi projetos</a></li>
        </ul>
      </div>
    </div>
  </div>
`;

const dropdownAdministracao = `
  <div class="navbar-dropdown is-single-col">
    <a class="navbar-admin-item" href="#"><i class="fa fa-user"></i> Usuários</a>
    <a class="navbar-admin-item" href="#"><i class="fa fa-users"></i> Grupos</a>
    <a class="navbar-admin-item" href="#"><i class="fa fa-building"></i> Empresas</a>
    <a class="navbar-admin-item" href="#"><i class="fa fa-sitemap"></i> Estrutura organizacional</a>
    <a class="navbar-admin-item" href="#"><i class="fa fa-search"></i> Trilha de auditoria</a>
    <a class="navbar-admin-item" href="#"><i class="fa fa-envelope-o"></i> Histórico de e-mails enviados</a>
    <a class="navbar-admin-item" href="#"><i class="fa fa-file-o"></i> Histórico de importações de propostas</a>
    <a class="navbar-admin-item" href="#"><i class="fa fa-list"></i> Log Integração Compromisso</a>
    <a class="navbar-admin-item" href="#"><i class="fa fa-cog"></i> Configurações gerais</a>
    <a class="navbar-admin-item" href="#"><i class="fa fa-database"></i> Configurar Fontes de Dados</a>
  </div>
`;

/* ─────────────────────────────────────────────────────────────
   Builder da navbar
   ───────────────────────────────────────────────────────────── */

function buildNavbar(openMenu = null, contextMenu = null) {
  const items = [];

  // Se houver um menu de contexto como Plano Estratégico ativo na tela
  if (contextMenu === 'plano-estrategico') {
    items.push({
      id: 'plano-estrategico',
      iconFa: 'fa-puzzle-piece',
      label: 'Plano estratégico',
      dropdown: dropdownPlanoEstrategico, // Vinculando o dropdown correto agora
      isActiveOverride: true
    });
  }

  // Menus padrão do sistema
  items.push(
    {
      id: 'meu-channel',
      iconSvg: '/assets/img/meu_channel_menul.svg',
      label: 'Meu Channel',
      dropdown: dropdownMeuChannel,
    },
    {
      id: 'estrategia',
      iconSvg: '/assets/img/estrategia_menu.svg',
      label: 'Estratégia',
      dropdown: dropdownEstrategia,
    },
    {
      id: 'desempenho',
      iconSvg: '/assets/img/desempenho_menu.svg',
      label: 'Desempenho',
      dropdown: dropdownDesempenho,
    },
    {
      id: 'projetos-demandas',
      iconSvg: '/assets/img/projetos_demandas_menu.svg',
      label: 'Projetos e demandas',
      dropdown: dropdownProjetosEDemandas,
    },
    {
      id: 'administracao',
      iconSvg: '/assets/img/administracao_meni.svg',
      label: 'Administração',
      dropdown: dropdownAdministracao,
    },
  );

  const itemsHtml = items
    .map(
      (item) => `
    <div class="navbar-item${openMenu === item.id ? ' is-open' : ''}${item.isActiveOverride ? ' is-active-page' : ''}" data-menu="${item.id}">
      <div class="navbar-item-trigger">
        ${item.iconSvg 
          ? `<img src="${item.iconSvg}" alt="${item.label}" class="navbar-module-icon" />` 
          : `<i class="fa ${item.iconFa}" style="color:#F97316;"></i>`}
        ${item.label}
      </div>
      ${item.dropdown}
    </div>
  `
    )
    .join('');

  return `
    <nav class="legacy-navbar" id="legacy-navbar">
      <div class="navbar-home">
        <i class="fa fa-home"></i>
      </div>
      ${itemsHtml}
      <div class="navbar-item-plain" style="margin-left: auto;">
        <span style="font-size:13px; color:#ccc; font-weight:bold;">?</span>
      </div>
      <div class="navbar-item-plain">
        <i class="fa fa-info-circle"></i>
      </div>
    </nav>
  `;
}

/* ─────────────────────────────────────────────────────────────
   Script de interatividade (clique para abrir/fechar)
   ───────────────────────────────────────────────────────────── */

function attachNavbarBehavior() {
  return `
    <script>
      (function () {
        var navbar = document.getElementById('legacy-navbar');
        if (!navbar || navbar._navbarReady) return;
        navbar._navbarReady = true;

        var items = navbar.querySelectorAll('.navbar-item');

        items.forEach(function (item) {
          var trigger = item.querySelector('.navbar-item-trigger');
          if (!trigger) return;

          trigger.addEventListener('click', function (e) {
            e.stopPropagation();
            var isOpen = item.classList.contains('is-open');
            // Fecha todos
            items.forEach(function (i) { i.classList.remove('is-open'); });
            // Abre este se estava fechado
            if (!isOpen) item.classList.add('is-open');
          });
        });

        // Clique fora fecha tudo
        document.addEventListener('click', function () {
          items.forEach(function (i) { i.classList.remove('is-open'); });
        });

        // Evita fechar ao clicar dentro do dropdown
        navbar.querySelectorAll('.navbar-dropdown').forEach(function (dd) {
          dd.addEventListener('click', function (e) { e.stopPropagation(); });
        });
      })();
    </script>
  `;
}

/* ─────────────────────────────────────────────────────────────
   Stories - Navbar Padrão
   ───────────────────────────────────────────────────────────── */

export const Default = {
  name: 'Padrão (fechado)',
  render: () => buildNavbar(),
};

/* ─────────────────────────────────────────────────────────────
   Stories - Navbar com Contexto
   ───────────────────────────────────────────────────────────── */

export const ContextoEstrategicoFechado = {
  name: 'Contexto: Plano estratégico (fechado)',
  render: () => buildNavbar(null, 'plano-estrategico'),
  parameters: {
    docs: {
      description: { story: 'Menu Navbar carregado com o ambiente contextual do plano estratégico sem abrir o menu.' },
    },
  },
};

export const ContextoEstrategicoAberto = {
  name: 'Contexto: Plano estratégico (aberto)',
  render: () => buildNavbar('plano-estrategico', 'plano-estrategico'),
  parameters: {
    docs: {
      description: { story: 'Exibe o menu contextual dinâmico já expandido demonstrando os links e diretrizes.' },
    },
  },
};

export const ContextoEstrategicoInterativo = {
  name: '▶ Contexto: Plano estratégico (Interativo)',
  render: () => buildNavbar(null, 'plano-estrategico') + attachNavbarBehavior(),
  parameters: {
    docs: {
      description: { story: 'Testa a abertura e fechamento das abas do Navbar com módulo contextual carregado.' },
    },
  },
};

/* ─────────────────────────────────────────────────────────────
   Módulos Padrões Abertos
   ───────────────────────────────────────────────────────────── */

/** Meu Channel aberto */
export const MeuChannel = {
  name: 'Meu Channel',
  render: () => buildNavbar('meu-channel'),
  parameters: {
    docs: {
      description: { story: 'Atalhos pessoais do usuário: Operações, Reuniões, Portfólios, Planos de ação, Indicadores e Riscos.' },
    },
  },
};

/** Estratégia aberto */
export const Estrategia = {
  name: 'Estratégia',
  render: () => buildNavbar('estrategia'),
  parameters: {
    docs: {
      description: { story: 'Módulo de planejamento estratégico: links diretos, Relatórios e Configurações.' },
    },
  },
};

/** Desempenho aberto */
export const Desempenho = {
  name: 'Desempenho',
  render: () => buildNavbar('desempenho'),
  parameters: {
    docs: {
      description: { story: 'Indicadores e planos de ação: Planejamento de metas, Medições, Relatórios e Configurações.' },
    },
  },
};

/** Projetos e Demandas aberto */
export const ProjetosEDemandas = {
  name: 'Projetos e demandas',
  render: () => buildNavbar('projetos-demandas'),
  parameters: {
    docs: {
      description: { story: 'Gestão de projetos e demandas: links diretos, Relatórios, Configurações e Carga.' },
    },
  },
};

/** Administração aberto */
export const Administracao = {
  name: 'Administração',
  render: () => buildNavbar('administracao'),
  parameters: {
    docs: {
      description: { story: 'Configurações de sistema e cadastros: lista simples de itens com ícone.' },
    },
  },
};

/** Story interativa — clique para abrir/fechar menus */
export const Interativo = {
  name: '▶ Interativo (clique nos menus)',
  render: () => buildNavbar() + attachNavbarBehavior(),
  parameters: {
    docs: {
      description: {
        story:
          'Simula a navegação real: clique em qualquer item da barra para abrir o submenu. Clique fora ou em outro item para fechar.',
      },
    },
  },
};
