import './Table.css';
import { Button } from '../button/Button.js';

export default {
  title: 'Componentes/Tabela',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Tabelas do sistema Channel. Suportam filtros inline, paginação, seleção por checkbox, accordion e legenda.',
      },
    },
  },
};

// Global helper for story interactions
if (typeof window !== 'undefined') {
  document.addEventListener('click', (e) => {
    // 1. Toggle Table Section (Header level)
    const groupHeader = e.target.closest('.legacy-table-group-header');
    if (groupHeader) {
      const section = groupHeader.closest('.table-section');
      const table = section.querySelector('.legacy-table');
      const icon = groupHeader.querySelector('.fa-caret-down, .fa-caret-right');
      if (table) {
        const isHidden = table.style.display === 'none';
        table.style.display = isHidden ? 'table' : 'none';
        if (icon) {
          icon.classList.toggle('fa-caret-down', isHidden);
          icon.classList.toggle('fa-caret-right', !isHidden);
        }
      }
    }

    // 2. Toggle Accordion Row (Line level)
    const accordionTitle = e.target.closest('.accordion-row-title');
    if (accordionTitle) {
      const detailsRow = accordionTitle.nextElementSibling;
      if (detailsRow && detailsRow.classList.contains('accordion-row-details')) {
        const isOpen = detailsRow.classList.contains('is-open');
        detailsRow.classList.toggle('is-open');
        accordionTitle.classList.toggle('is-active');
        accordionTitle.classList.toggle('is-open');
        const icon = accordionTitle.querySelector('.expander-icon');
        if (icon) {
          icon.classList.toggle('fa-caret-down', !isOpen);
          icon.classList.toggle('fa-caret-right', isOpen);
        }
      }
    }

    // 3. Toggle Action Submenu
    const trigger = e.target.closest('.legacy-action-submenu-wrapper .action-icon');
    document.querySelectorAll('.legacy-action-submenu.is-open').forEach(menu => {
      if (trigger && menu.previousElementSibling === trigger) return;
      menu.classList.remove('is-open');
    });
    if (trigger) {
      const submenu = trigger.nextElementSibling;
      if (submenu && submenu.classList.contains('legacy-action-submenu')) {
        submenu.classList.toggle('is-open');
      }
    }
  });

  // Checkbox interactivity to change row color
  document.addEventListener('change', (e) => {
    if (e.target.type === 'checkbox' && e.target.closest('tbody')) {
      const row = e.target.closest('tr');
      if (row) {
        if (e.target.checked) {
          row.classList.add('row-selected');
        } else {
          row.classList.remove('row-selected');
        }
      }
    }
  });
}

const paginacao = (total) => `
  <div class="legacy-pagination">
    <div class="pagination-pages">
      <span>Página 1 de ${total}</span>
      <div class="pagination-numbers">
        <span style="font-weight:bold; color: var(--chn-color-primary-navbar)">1</span>
        <span>2</span>
        <span>3</span>
        <span>►</span>
      </div>
    </div>
    <div style="display:flex; align-items:center; gap:8px">
      <select class="pagination-select">
        <option>25 itens por página</option>
        <option>50 itens por página</option>
      </select>
    </div>
  </div>
`;

const legenda = `
  <div class="legacy-table-legend">
    <div class="legend-item">
      <div class="legend-color" style="background:#D4EDDA"></div>
      <span>Plano associado diretamente a este objetivo estratégico</span>
    </div>
    <div class="legend-item">
      <img src="assets/img/ico_bola_amarela.gif" style="margin-right:4px"/>
      <span>Plano já associado a este objetivo, via grupo de planos de ações</span>
    </div>
  </div>
`;

const actionIcons = `
  <div style="display:flex; justify-content:center; gap:6px">
     <img src="assets/img/ico-info-mini-novo.png" style="cursor:pointer" title="Info"/>
     <img src="assets/img/ico-lupa.gif" style="cursor:pointer" title="Visualizar"/>
  </div>
`;

export const PadraoCompleta = {
  render: () => `
    <div style="width:100%; display:flex; flex-direction:column; gap:20px">
      <div class="table-section">
        <div class="legacy-table-group-header" style="cursor:pointer">
          <div class="legacy-table-group-title">
            <span class="fa fa-caret-down"></span>
            <span>Planos de Ação (134 itens) (2 associados)</span>
          </div>
          <div class="legacy-table-group-actions">
           <div class="legacy-table-action-tool">
              <input type="checkbox" checked style="width:11px; height:11px">
              <span>Mostrar somente associados</span>
            </div>
          </div>
        </div>
        <table class="legacy-table">
          <thead>
            <tr style="background:#E5E5E5">
              <th style="width:30px; text-align:center">Associar</th>
              <th style="width:80px">Código</th>
              <th>Nome</th>
              <th style="width:150px">Gestor</th>
              <th style="width:100px">Status</th>
              <th style="width:100px">Data Limite</th>
              <th style="width:80px; text-align:center">Ações</th>
            </tr>
            <tr style="background:#F5F5F5">
              <td style="text-align:center"><input type="checkbox"/></td>
              <td><input type="text" style="width:100%"/></td>
              <td><input type="text" style="width:100%"/></td>
              <td><select style="width:100%"><option>Todos</option></select></td>
              <td><select style="width:100%"><option>Selecione</option></select></td>
              <td><input type="text" style="width:100%"/></td>
              <td style="text-align:center">
                ${Button({ label: 'Filtrar', variant: 'primary', extra: 'style="padding:0 4px; font-size:10px"' })}
              </td>
            </tr>
          </thead>
          <tbody>
            <tr class="row-selected">
              <td style="text-align:center"><input type="checkbox" checked/></td>
              <td>1</td>
              <td>Plano de Estratégia Comercial</td>
              <td>Marcos Souza</td>
              <td>Em andamento</td>
              <td>12/12/2026</td>
              <td>${actionIcons}</td>
            </tr>
            <tr class="row-associated-group">
              <td style="text-align:center"><input type="checkbox"/></td>
              <td>PH-01</td>
              <td><img src="assets/img/ico_bola_amarela.gif"/> Projeto de Expansão Norte</td>
              <td>Ana Paula</td>
              <td>Aguardando</td>
              <td>20/11/2026</td>
              <td>${actionIcons}</td>
            </tr>
            <tr>
              <td style="text-align:center"><input type="checkbox"/></td>
              <td>99</td>
              <td>Migração de Infraestrutura Cloud</td>
              <td>Carlos Lima</td>
              <td>Não iniciado</td>
              <td>05/01/2027</td>
              <td>${actionIcons}</td>
            </tr>
          </tbody>
        </table>
        ${paginacao(6)}
        ${legenda}
      </div>
    </div>
  `,
};

export const SimplesSemFiltro = {
  render: () => `
    <table class="legacy-table">
      <thead>
        <tr style="background:#E5E5E5">
          <th style="width:30px"></th>
          <th>Módulo</th>
          <th>Responsável</th>
          <th style="text-align:center">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><input type="checkbox"/></td>
          <td>Módulo Financeiro</td>
          <td>Setor Fiscal</td>
          <td style="text-align:center">Ativo</td>
        </tr>
        <tr>
          <td><input type="checkbox"/></td>
          <td>Módulo RH</td>
          <td>Recursos Humanos</td>
          <td style="text-align:center">Ativo</td>
        </tr>
      </tbody>
    </table>
  `,
};

export const AcordeonConfigurado = {
  render: () => `
    <div style="width:100%">
      <div class="legacy-table-group-header" style="cursor:pointer">
        <div class="legacy-table-group-title">
          <span class="fa fa-caret-down"></span>
          <span>Grupos de Planos de Ações (2 itens)</span>
        </div>
      </div>
      <table class="legacy-table">
        <thead>
          <tr style="background:#E5E5E5">
             <th style="width:30px"></th>
             <th>Nome do Grupo</th>
             <th>Responsável</th>
             <th style="width:100px; text-align:center">Planos</th>
             <th style="width:80px; text-align:center">Ações</th>
          </tr>
        </thead>
        <tbody>
           <tr class="accordion-row-title is-active is-open">
              <td style="text-align:center" onclick="event.stopPropagation()"><input type="checkbox" checked/></td>
              <td style="display:flex; align-items:center; gap:8px; border:none; height:32px">
                <span class="expander-icon fa fa-caret-down"></span>
                <span>Grupo Logística</span>
              </td>
              <td>Ricardo Mendes</td>
              <td style="text-align:center">5</td>
              <td style="text-align:center">${actionIcons}</td>
           </tr>
           <tr class="accordion-row-details is-open">
             <td colspan="5">
                <div class="nested-table-container">
                  <div class="nested-table-title">Planos do Grupo:</div>
                  <table class="nested-table">
                    <thead>
                      <tr><th>Código</th><th>Nome do Plano</th><th>Status</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>L-01</td><td>Frota Própria</td><td>Finalizado</td></tr>
                    </tbody>
                  </table>
                </div>
             </td>
           </tr>
        </tbody>
      </table>
    </div>
  `,
};

export const ComSubmenuAcoes = {
  name: 'Com Submenu de Ações',
  parameters: {
    docs: {
      description: {
        story: 'Padrão herdado de sistemas Channel onde muitos ícones numa mesma célula de ação são suprimidos por um ícone gatilho (geralmente opções ou engrenagem) que abre um submenu estendido (hover escuro). O exemplo abaixo engloba todo o header visual, ordenadores fixos, tooltips e krs badges.',
      },
    },
  },
  render: () => `
<div class="table-responsive" style="overflow: visible; width: 100%;">
        <table class="legacy-table" id="table-objetivos">
          <thead>
            <!-- Cabeçalho de colunas -->
            <tr style="background:#E5E5E5;">
              <th style="width:90px; text-align:center;">Ordem <span class="fa fa-sort"
                  style="font-size:9px;color:#999;"></span></th>
              <th>Nome</th>
              <th style="width:200px;">Perspectiva</th>
              <th style="width:160px;">Responsável</th>
              <th style="width:70px; text-align:center;">Peso</th>
              <th class="col-acoes">Ações</th>
            </tr>
            <!-- Linha de filtros -->
            <tr style="background:#F5F5F5;">
              <td style="text-align:center;"><input type="text" class="filter-input" style="width:56px;" /></td>
              <td><input type="text" class="filter-input" /></td>
              <td>
                <select class="filter-select">
                  <option>Todos</option>
                  <option>Aprendizado e Crescimento</option>
                  <option>Financeira</option>
                  <option>Clientes</option>
                  <option>Processos Internos</option>
                </select>
              </td>
              <td><input type="text" class="filter-input" /></td>
              <td><input type="text" class="filter-input" style="width:50px;" /></td>
              <td style="text-align:center;">
                <button class="btn-section" style="font-size:10px;padding:1px 6px;">Limpar</button>
                <button class="btn-section btn-primary-action" style="font-size:10px;padding:1px 6px;">Filtrar</button>
              </td>
            </tr>
          </thead>
          <tbody>
            <!-- Linha 1 — Aumentar a Receita -->
            <tr>
              <td class="col-order" style="text-align:center;">
                <select class="order-select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </td>
              <td>Aumentar a Receita</td>
              <td>Aprendizado e Crescimento</td>
              <td>Elkar Almeida</td>
              <td style="text-align:center;">1,00</td>
              <td class="col-acoes">
                <div class="action-icons">
                  <!-- 1: Mais opções (submenu DS) -->
                  <div class="legacy-action-submenu-wrapper">
                    <span class="action-icon" style="cursor:pointer" title="Mais opções">
                      <img src="assets/img/ico_menuContexto.gif" alt="Mais opções" />
                    </span>
                    <div class="legacy-action-submenu">
                      <a class="legacy-action-submenu-item" onclick="alert('Indicadores'); closeAllMenus();">
                        <img src="assets/img/ico_indicador_tendencia.gif" style="width:14px; margin-right:4px; vertical-align:middle;" />
                        Indicadores
                      </a>
                      <a class="legacy-action-submenu-item" onclick="alert('Causa e Efeito'); closeAllMenus();">
                        <img src="assets/img/ico_causaEfeito.gif" style="width:14px; margin-right:4px; vertical-align:middle;" />
                        Causa e Efeito
                      </a>
                      <a class="legacy-action-submenu-item" onclick="alert('Associar atividades'); closeAllMenus();">
                        <img src="assets/img/ico-componentes.gif" style="width:14px; margin-right:4px; vertical-align:middle;" />
                        Associar atividades
                      </a>
                      <div class="legacy-action-submenu-separator"></div>
                      <a class="legacy-action-submenu-item"
                        onclick="openDrawer('Aumentar a Receita', 1); closeAllMenus();">
                        <i class="fa fa-key" style="margin-right:4px;font-size:12px;width:14px;text-align:center;"></i>
                        Gerenciar KRs
                        <span class="badge-new" style="margin-left:4px;">novo</span>
                      </a>
                    </div>
                  </div>
                  <!-- 2: Habilitar/Desabilitar -->
                  <span class="action-icon" title="Habilitar / Desabilitar Objetivo" onclick="openModalConfirmacao()"
                    style="cursor:pointer;">
                    <img src="assets/img/ico_ligado.gif" alt="Habilitar/Desabilitar" />
                  </span>
                  <!-- 3: Gerenciar KRs -->
                  <button class="icon-kr" title="Gerenciar Key Results (KRs)"
                    onclick="openDrawer('Aumentar a Receita', 1)">KR</button>
                  <!-- 4: Editar -->
                  <span class="action-icon" title="Editar objetivo" onclick="openModalEditarObjetivo()"
                    style="cursor:pointer;">
                    <img src="assets/img/ico-lupa.gif" alt="Editar" />
                  </span>
                  <!-- 5: Remover -->
                  <span class="action-icon" title="Remover objetivo" onclick="openModalRemover()"
                    style="cursor:pointer;">
                    <img src="assets/img/ico-remover-novo.gif" alt="Remover" />
                  </span>
                </div>
              </td>
            </tr>

            <!-- Linha 2 — Melhorar Retenção de Clientes -->
            <tr>
              <td class="col-order" style="text-align:center;">
                <select class="order-select">
                  <option>1</option>
                  <option selected>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </td>
              <td>Melhorar Retenção de Clientes</td>
              <td>Clientes</td>
              <td>Ana Paula Ferreira</td>
              <td style="text-align:center;">1,00</td>
              <td class="col-acoes">
                <div class="action-icons">
                  <div class="legacy-action-submenu-wrapper">
                    <span class="action-icon" style="cursor:pointer" title="Mais opções">
                      <img src="assets/img/ico_menuContexto.gif" alt="Mais opções" />
                    </span>
                    <div class="legacy-action-submenu">
                      <a class="legacy-action-submenu-item" onclick="alert('Indicadores'); closeAllMenus();">
                        <img src="assets/img/ico_indicador_tendencia.gif" style="width:14px; margin-right:4px; vertical-align:middle;" />
                        Indicadores
                      </a>
                      <a class="legacy-action-submenu-item" onclick="alert('Causa e Efeito'); closeAllMenus();">
                        <img src="assets/img/ico_causaEfeito.gif" style="width:14px; margin-right:4px; vertical-align:middle;" />
                        Causa e Efeito
                      </a>
                      <a class="legacy-action-submenu-item" onclick="alert('Associar atividades'); closeAllMenus();">
                        <img src="assets/img/ico-componentes.gif" style="width:14px; margin-right:4px; vertical-align:middle;" />
                        Associar atividades
                      </a>
                      <div class="legacy-action-submenu-separator"></div>
                      <a class="legacy-action-submenu-item"
                        onclick="openDrawer('Melhorar Retenção de Clientes', 2); closeAllMenus();">
                        <i class="fa fa-key" style="margin-right:4px;font-size:12px;width:14px;text-align:center;"></i>
                        Gerenciar KRs
                        <span class="badge-new" style="margin-left:4px;">novo</span>
                      </a>
                    </div>
                  </div>
                  <span class="action-icon" title="Habilitar / Desabilitar Objetivo" style="cursor:pointer;">
                    <img src="assets/img/ico_ligado.gif" alt="Habilitar/Desabilitar" />
                  </span>
                  <button class="icon-kr" title="Gerenciar Key Results (KRs)"
                    onclick="openDrawer('Melhorar Retenção de Clientes', 2)">KR</button>
                  <span class="action-icon" title="Editar objetivo" style="cursor:pointer;">
                    <img src="assets/img/ico-lupa.gif" alt="Editar" />
                  </span>
                  <span class="action-icon" title="Remover objetivo" style="cursor:pointer;">
                    <img src="assets/img/ico-remover-novo.gif" alt="Remover" />
                  </span>
                </div>
              </td>
            </tr>

            <!-- Linha 3 — Reduzir Custos Operacionais -->
            <tr>
              <td class="col-order" style="text-align:center;">
                <select class="order-select">
                  <option>1</option>
                  <option>2</option>
                  <option selected>3</option>
                  <option>4</option>
                </select>
              </td>
              <td>Reduzir Custos Operacionais</td>
              <td>Processos Internos</td>
              <td>Carlos Lima</td>
              <td style="text-align:center;">1,50</td>
              <td class="col-acoes">
                <div class="action-icons">
                  <div class="legacy-action-submenu-wrapper">
                    <span class="action-icon" style="cursor:pointer" title="Mais opções">
                      <img src="assets/img/ico_menuContexto.gif" alt="Mais opções" />
                    </span>
                    <div class="legacy-action-submenu">
                      <a class="legacy-action-submenu-item" onclick="alert('Indicadores'); closeAllMenus();">
                        <img src="assets/img/ico_indicador_tendencia.gif" style="width:14px; margin-right:4px; vertical-align:middle;" />
                        Indicadores
                      </a>
                      <a class="legacy-action-submenu-item" onclick="alert('Causa e Efeito'); closeAllMenus();">
                        <img src="assets/img/ico_causaEfeito.gif" style="width:14px; margin-right:4px; vertical-align:middle;" />
                        Causa e Efeito
                      </a>
                      <a class="legacy-action-submenu-item" onclick="alert('Associar atividades'); closeAllMenus();">
                        <img src="assets/img/ico-componentes.gif" style="width:14px; margin-right:4px; vertical-align:middle;" />
                        Associar atividades
                      </a>
                      <div class="legacy-action-submenu-separator"></div>
                      <a class="legacy-action-submenu-item"
                        onclick="openDrawer('Reduzir Custos Operacionais', 3); closeAllMenus();">
                        <i class="fa fa-key" style="margin-right:4px;font-size:12px;width:14px;text-align:center;"></i>
                        Gerenciar KRs
                        <span class="badge-new" style="margin-left:4px;">novo</span>
                      </a>
                    </div>
                  </div>
                  <span class="action-icon" title="Habilitar / Desabilitar Objetivo" style="cursor:pointer;">
                    <img src="assets/img/ico_ligado.gif" alt="Habilitar/Desabilitar" />
                  </span>
                  <button class="icon-kr" title="Gerenciar Key Results (KRs)"
                    onclick="openDrawer('Reduzir Custos Operacionais', 3)">KR</button>
                  <span class="action-icon" title="Editar objetivo" style="cursor:pointer;">
                    <img src="assets/img/ico-lupa.gif" alt="Editar" />
                  </span>
                  <span class="action-icon" title="Remover objetivo" style="cursor:pointer;">
                    <img src="assets/img/ico-remover-novo.gif" alt="Remover" />
                  </span>
                </div>
              </td>
            </tr>

            <!-- Linha 4 — Expandir Presença Digital (empty state) -->
            <tr style="background:#FFFDF5;">
              <td class="col-order" style="text-align:center;">
                <select class="order-select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option selected>4</option>
                </select>
              </td>
              <td>Expandir Presença Digital</td>
              <td>Clientes</td>
              <td>João Mendes</td>
              <td style="text-align:center;">1,00</td>
              <td class="col-acoes">
                <div class="action-icons">
                  <div class="legacy-action-submenu-wrapper">
                    <span class="action-icon" style="cursor:pointer" title="Mais opções">
                      <img src="assets/img/ico_menuContexto.gif" alt="Mais opções" />
                    </span>
                    <div class="legacy-action-submenu">
                      <a class="legacy-action-submenu-item" onclick="alert('Indicadores'); closeAllMenus();">
                        <img src="assets/img/ico_indicador_tendencia.gif" style="width:14px; margin-right:4px; vertical-align:middle;" />
                        Indicadores
                      </a>
                      <a class="legacy-action-submenu-item" onclick="alert('Causa e Efeito'); closeAllMenus();">
                        <img src="assets/img/ico_causaEfeito.gif" style="width:14px; margin-right:4px; vertical-align:middle;" />
                        Causa e Efeito
                      </a>
                      <a class="legacy-action-submenu-item" onclick="alert('Associar atividades'); closeAllMenus();">
                        <img src="assets/img/ico-componentes.gif" style="width:14px; margin-right:4px; vertical-align:middle;" />
                        Associar atividades
                      </a>
                      <div class="legacy-action-submenu-separator"></div>
                      <a class="legacy-action-submenu-item"
                        onclick="openDrawer('Expandir Presença Digital', 4); closeAllMenus();">
                        <i class="fa fa-key" style="margin-right:4px;font-size:12px;width:14px;text-align:center;"></i>
                        Gerenciar KRs
                        <span class="badge-new" style="margin-left:4px;">novo</span>
                      </a>
                    </div>
                  </div>
                  <span class="action-icon" title="Habilitar / Desabilitar Objetivo" style="cursor:pointer;">
                    <img src="assets/img/ico_ligado.gif" alt="Habilitar/Desabilitar" />
                  </span>
                  <button class="icon-kr" title="Gerenciar Key Results (KRs) — sem KRs cadastrados"
                    onclick="openDrawer('Expandir Presença Digital', 4)">KR</button>
                  <span class="action-icon" title="Editar objetivo" style="cursor:pointer;">
                    <img src="assets/img/ico-lupa.gif" alt="Editar" />
                  </span>
                  <span class="action-icon" title="Remover objetivo" style="cursor:pointer;">
                    <img src="assets/img/ico-remover-novo.gif" alt="Remover" />
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
`,
};