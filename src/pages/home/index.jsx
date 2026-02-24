  import React from 'react';
  import './style.css';

  // Componente para estilizar as teclas de atalho do sistema
  const Kbd = ({ children }) => <span className="kbd-tecla">{children}</span>;

  function Home() {
    return (
      <div className="container-guia">
        <header className="header-guia">
          <h1>Guia de Procedimentos - ponto Eletrônico</h1>
        </header>

        <main className="flex-wrapper">

          {/* 1. START DA ESCALA */}
          <section className="card-procedimento">
            <h2>1. START DA ESCALA</h2>
            <p className="instrucao-destaque">
              <strong>Regra Geral:</strong> Sempre considerar o início da movimentação e o dia da semana em que ela inicia. Deve-se considerar somente os dias efetivamente trabalhados no Start da Escala.
            </p>
            <div className="tabela-responsiva">
              <table>
                <thead>
                  <tr>
                    <th>Escala</th>
                    <th>Dia</th>
                    <th>Noite</th>
                    <th>Folga</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>12X36 (Folga)</td>
                    <td>00</td>
                    <td>00</td>
                    <td>01</td>
                  </tr>
                  <tr>
                    <td>12X36 (Plantão)</td>
                    <td>01</td>
                    <td>00</td>
                    <td>01</td>
                  </tr>
                  <tr>
                    <td>5X2 (Início na Quarta)</td>
                    <td>03</td>
                    <td>00</td>
                    <td>02</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 2. LANÇAMENTO-SAT */}
          <section className="card-procedimento">
            <h2>2. LANÇAMENTO-SAT</h2>
            <ol className="lista-passos">
              <li>Abrir Folha de Ponto Individual.</li>
              <li>Pressionar <Kbd>F6</Kbd>.</li>
              <li>Pressionar <Kbd>INSERT</Kbd>.</li>
              <li>Preencher os campos: <strong>Ocorrência e Motivo</strong>.</li>
              <li>Inserir a <strong>Matrícula</strong> do ausente e escrever a <strong>Observação</strong>.</li>
            </ol>
            <div className="alerta-excluir">
              <strong>Para Excluir:</strong> Use o botão no menu lateral direito (ícone de pastinha com sinal de menos <span className="simbolo-minus">[-]</span>).
            </div>
          </section>

          {/* 3. TRANSFERÊNCIA */}
          <section className="card-procedimento">
            <h2>3. TRANSFERÊNCIA DE POSTO / ESCALA / HORÁRIO</h2>
            <ol className="lista-passos">
              <li>Acesse: <code>Recursos Humanos &gt; Funcionários</code>.</li>
              <li>Pressione <Kbd>P</Kbd> para pesquisar e <Kbd>ENTER</Kbd> para abrir a Ficha Cadastral.</li>
              <li>Pressione <Kbd>F9</Kbd> (Transferir Colaborador) e <Kbd>INSERT</Kbd> para nova transferência.</li>
              <li>Inserir Dados: <strong>Data</strong> (Início da movimentação) e <strong>Motivo: 02</strong>.</li>
              <li>Use a <strong>Lupa</strong> para pesquisar Matrícula, Posto, Turno Escala, Horário e Sindicato.</li>
              <li>Informar o <strong>Start de Escala</strong>.</li>
              <li>Pressione <Kbd>F2</Kbd> para salvar e <Kbd>ESC</Kbd> para sair.</li>
            </ol>
          </section>

          {/* 4. CRIAÇÃO DE HORÁRIO */}
          <section className="card-procedimento">
            <h2>4. CRIAÇÃO DE HORÁRIO (PADRONIZADO)</h2>
            <ol className="lista-passos">
              <li>Siga o caminho: <code>RH &gt; Funcionários &gt; F9 &gt; INSERT</code>.</li>
              <li>No campo <strong>Horário</strong>, clique na Lupa e pressione <Kbd>INSERT</Kbd>.</li>
              <li><strong>Configurações:</strong>
                <ul className="sub-lista">
                  <li>Marcar Ponto Eletrônico (opção superior).</li>
                  <li>Marcar "Fixar Escala" (ex: 5x2).</li>
                  <li>Compensação: <strong>S</strong> (Semanal) ou <strong>M</strong> (Mensal).</li>
                  <li>Jornada Máxima: <strong>24hs</strong> | Intervalo Mínimo: Conforme categoria.</li>
                </ul>
              </li>
              <li>Pressione <Kbd>F2</Kbd> para salvar.</li>
            </ol>
          </section>

          {/* 5. FOLHA DE PONTO */}
          <section className="card-procedimento card-total">
            <h2>5. FOLHA DE PONTO (VER / EDITAR / IMPRIMIR)</h2>
            <div className="flex-ponto">
              <div className="coluna-ponto">
                <h3>5.A - Editar ou Ver</h3>
                <p>Acesse <code>RH &gt; Ponto Eletrônico</code> e use <Kbd>P</Kbd> para pesquisar.</p>
                <p><strong>Dica:</strong> Se não aparecer, use <Kbd>F5</Kbd> para recalcular (marcar "Manter Cálculo", "Geral" e "Calcular mesmo sem batida").</p>
                {/* <p>Para salvar edições: <Kbd>F2</Kbd> no dia/horário e <Kbd>F5</Kbd> para recalcular a folha individual.</p> */}
              </div>
              <div className="coluna-ponto">
                <h3>5.B - Imprimir</h3>
                <p>Na tela de folha de ponto, pressione <Kbd>F2</Kbd>.</p>
                <p>Digite o código <strong>002</strong>.</p>
                <p>Verifique o campo "Todos Funcionários" e pressione <Kbd>F2</Kbd> para gerar.</p>
              </div>
            </div>
          </section>

        </main>
      </div>
    );
  }

  export default Home;