import './Modal.css';
import '../table/Table.css';
import { Button } from '../button/Button.js';

export default {
  title: 'Componentes/Modal',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Janelas modais do sistema Channel. Sempre com barra de título escura, corpo de conteúdo e rodapé com ações.',
      },
    },
  },
};

export const Confirmacao = {
  name: 'Confirmação',
  parameters: {
    docs: {
      description: { story: 'Confirmação de ação destrutiva. Botão de confirmação usa variante "danger".' },
    },
  },
  render: () => `
    <div style="width:500px">
      <div class="legacy-modal">
        <div class="legacy-modal-title">
          <span>Desabilitar Objetivo Estratégico</span>
          <span>✖</span>
        </div>
        <div class="legacy-modal-body">
          <div class="legacy-modal-content" style="color:#333;">
            Deseja desabilitar o item <em>'Aumentar a Receita'</em>?
          </div>
        </div>
        <div class="legacy-modal-footer">
          ${Button({ label: 'Não', variant: 'secondary' })}
          ${Button({ label: 'Sim', variant: 'primary' })}
        </div>
        </div>
      </div>
    </div>
  `,
};

export const ComFormulario = {
  name: 'Com Formulário',
  parameters: {
    docs: {
      description: { story: 'Modal com filtros, tabela de seleção e campo de justificativa.' },
    },
  },
  render: () => `
    <div style="width:650px">
      <div class="legacy-modal">
        <div class="legacy-modal-title">
          <span>Associar Plano de Ação</span>
          <span>✕</span>
        </div>
        <div class="legacy-modal-body">
          <div class="legacy-modal-subtitle">
            Campos marcados com * são obrigatórios
          </div>

          <table style="width:100%; margin-bottom: var(--chn-margin-sm);">
            <tbody>
              <tr>
                <td style="width:25%; padding-right: var(--chn-padding-xs);">
                  <label style="font-size: var(--chn-font-size-base); font-weight: bold; display: block; margin-bottom: 4px;">Nome</label>
                  <input type="text" style="width:100%; border:1px solid var(--chn-color-gray-400); height:20px; padding:0 4px; background:#F5F5F5;">
                </td>
                <td style="width:25%; padding-right: var(--chn-padding-xs);">
                  <label style="font-size: var(--chn-font-size-base); font-weight: bold; display: block; margin-bottom: 4px;">Status</label>
                  <select style="width:100%; border:1px solid var(--chn-color-gray-400); height:20px; font-size: 11px; background:#F5F5F5;">
                    <option>Rascunho</option>
                    <option>Em andamento</option>
                  </select>
                </td>
                <td style="width:25%; padding-right: var(--chn-padding-xs);">
                  <label style="font-size: var(--chn-font-size-base); font-weight: bold; display: block; margin-bottom: 4px;">Área</label>
                  <select style="width:100%; border:1px solid var(--chn-color-gray-400); height:20px; font-size: 11px; background:#F5F5F5;">
                    <option>Selecione</option>
                  </select>
                </td>
                <td style="width:25%">
                  <label style="font-size: var(--chn-font-size-base); font-weight: bold; display: block; margin-bottom: 4px;">Responsável</label>
                  <select style="width:100%; border:1px solid var(--chn-color-gray-400); height:20px; font-size: 11px; background:#F5F5F5;">
                    <option>Selecione</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>

          <div style="margin-bottom: var(--chn-margin-sm);">
            <table class="legacy-table">
              <thead>
                <tr>
                  <th style="width:32px; text-align:center"></th>
                  <th>Nome do Plano</th>
                  <th style="width:96px">Status</th>
                  <th style="width:128px">Responsável</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="text-align:center"><input type="checkbox" style="width:12px;height:12px"></td>
                  <td>Plano Alpha</td>
                  <td>Em andamento</td>
                  <td>João Silva</td>
                </tr>
              </tbody>
            </table>
            <div class="legacy-pagination">
              <span>Página 1 de 1</span>
            </div>
          </div>

          <div style="margin-bottom: var(--chn-margin-sm);">
            <label style="font-size: var(--chn-font-size-base); font-weight: bold; display: block; margin-bottom: 4px;">Justificativa *</label>
            <textarea style="width:100%; border:1px solid var(--chn-color-gray-400); padding:4px; background:#F5F5F5; font-size: 11px;" rows="3"></textarea>
            <div style="font-size: 10px; color:#8B7355; margin-top:2px;">(máximo 500 caracteres)</div>
          </div>
        </div>
        <div class="legacy-modal-footer">
          ${Button({ label: 'Cancelar', variant: 'secondary' })}
          ${Button({ label: 'Salvar', variant: 'primary' })}
        </div>
      </div>
    </div>
  `,
};

export const EditarObjetivo = {
  name: 'Editar Objetivo Estratégico',
  parameters: {
    docs: {
      description: { story: 'Modal complexo com formulário completo e editor rich-text falso (WYSIWYG).' },
    },
  },
  render: () => `
    <div style="width:450px">
      <div class="legacy-modal">
        <div class="legacy-modal-title">
          <span>Editar Objetivo Estratégico</span>
          <span>✖</span>
        </div>
        <div class="legacy-modal-body">
          <div class="legacy-modal-subtitle">
            Campos marcados com * são obrigatórios
          </div>

          <div style="margin-bottom: var(--chn-margin-sm);">
            <label style="font-size: 11px; font-weight: bold; display: block; margin-bottom: 4px;">Nome *</label>
            <input type="text" value="Aumentar a Receita" style="width:100%; border:1px solid var(--chn-color-black); border-radius: 2px; height:20px; padding:0 4px; background:var(--chn-color-white); font-size:11px;">
            <div style="font-size: 10px; color:#666; margin-top: 2px;">(máximo 512 caracteres)</div>
          </div>

          <div style="margin-bottom: var(--chn-margin-sm);">
            <label style="font-size: 11px; font-weight: bold; display: block; margin-bottom: 4px;">Responsável:</label>
            <div style="position:relative;">
              <input type="search" value="Elkar Almeida" style="width:100%; border:1px solid var(--chn-color-gray-500); border-radius: 2px; height:20px; padding:0 24px 0 4px; background:var(--chn-color-white); font-size:11px;">
              <i class="fa fa-search" style="position:absolute; right:6px; top:4px; color:var(--chn-color-gray-600); font-size:12px;"></i>
            </div>
            <div style="font-size: 10px; color:#666; margin-top: 2px;">(Aperte seta para baixo ou digite 3 caracteres para iniciar pesquisa)</div>
          </div>

          <div style="margin-bottom: var(--chn-margin-sm);">
            <label style="font-size: 11px; font-weight: bold; display: block; margin-bottom: 4px;">Peso:</label>
            <input type="text" value="1,00" style="width:80px; border:1px solid var(--chn-color-gray-500); border-radius: 2px; height:20px; padding:0 4px; background:var(--chn-color-white); font-size:11px;">
          </div>

          <div style="margin-bottom: var(--chn-margin-sm);">
            <label style="font-size: 11px; font-weight: bold; display: block; margin-bottom: 4px;">Perspectiva:</label>
            <select style="width:100%; border:1px solid var(--chn-color-gray-500); border-radius: 2px; height:20px; background:var(--chn-color-white); font-size:11px;">
              <option>Aprendizado e Crescimento</option>
            </select>
          </div>

          <div style="margin-bottom: var(--chn-margin-sm);">
            <label style="font-size: 11px; font-weight: bold; display: block; margin-bottom: 4px;">Descrição:</label>
            <div style="border:1px solid var(--chn-color-gray-300); background:var(--chn-color-white); border-radius:2px;">
              <div style="background:#F1F1F1; border-bottom:1px solid var(--chn-color-gray-300); padding: 6px; display:flex; gap:12px; color:#333; align-items:center;">
                <span style="display:flex; gap:8px;">
                  <i class="fa fa-bold" style="cursor:pointer; font-weight:900; color:#000;"></i> 
                  <i class="fa fa-italic" style="cursor:pointer;"></i> 
                  <i class="fa fa-underline" style="cursor:pointer;"></i>
                </span>
                <span style="border-left:1px solid #D5D5D5; padding-left:12px; display:flex; gap:8px;">
                  <i class="fa fa-align-left" style="cursor:pointer;"></i> 
                  <i class="fa fa-align-center" style="cursor:pointer;"></i> 
                  <i class="fa fa-align-right" style="cursor:pointer;"></i> 
                  <i class="fa fa-align-justify" style="cursor:pointer;"></i>
                </span>
                <span style="border-left:1px solid #D5D5D5; padding-left:12px; display:flex; gap:8px;">
                  <i class="fa fa-list-ul" style="cursor:pointer;"></i> 
                  <i class="fa fa-list-ol" style="cursor:pointer;"></i>
                </span>
                <span style="border-left:1px solid #D5D5D5; padding-left:12px; display:flex; gap:8px; color:#CCC;">
                  <i class="fa fa-link" style="cursor:pointer;"></i> 
                  <i class="fa fa-chain-broken" style="cursor:pointer;"></i>
                </span>
              </div>
              <div style="padding: 8px; font-family: var(--chn-font-family); min-height: 80px; font-size:13px;">
                teste
              </div>
            </div>
          </div>

        </div>
        <div class="legacy-modal-footer">
          ${Button({ label: 'Cancelar', variant: 'secondary' })}
          ${Button({ label: 'Salvar', variant: 'primary' })}
        </div>
      </div>
    </div>
  `,
};
