## 5. Diagrama de Classes

![Diagrama de Classes](https://i.ibb.co/wCzQvPp/imagem-2023-11-28-231659596.png)

Link: [Diagrama de Classes](https://lucid.app/lucidchart/cddddec4-714e-4a94-9e53-45e370845014/edit?viewport_loc=-175%2C-341%2C2530%2C1915%2CHWEp-vi-RSFO&invitationId=inv_a10d9bc1-12c9-4748-ab41-4d787a7f8e28)

+------------------+

| I Wood |

+------------------+

Classes:

1. Cliente

- Atributos:

- nome: String

- endereco: String

- telefone: String

- email: String

- Métodos:

- fazerPedido(PedidoDeServico)

- visualizarHistoricoPedidos()

- Relacionamentos:

- Possui vários PedidosDeServico (1..\*)

- Avalia vários ProfissionaisDeManutencao (0..\*)

2. ProfissionalDeManutencao

- Atributos:

- nome: String

- endereco: String

- telefone: String

- especializacao: String

- taxaHora: double

- Métodos:

- aceitarPedido(PedidoDeServico)

- concluirPedido(PedidoDeServico)

- visualizarPedidosPendentes()

- Relacionamentos:

- Aceita vários PedidosDeServico (0..\*)

- Recebe várias Avaliacoes (0..\*)

3. PedidoDeServico

- Atributos:

- cliente: Cliente

- dataHora: DataHora

- endereco: String

- descricaoProblema: String

- estado: Enum (Pendente, EmAndamento, Concluído)

- valorTotal: double

- Métodos:

- calcularValorTotal()

- atualizarEstado(estado: Enum)

- Relacionamentos:

- Pertence a um Cliente (1)

- É atribuído a um ProfissionalDeManutencao (0..1)

- Possui várias Avaliacoes (0..\*)

4. Avaliacao

- Atributos:

- cliente: Cliente

- profissional: ProfissionalDeManutencao

- classificacao: int (1 a 5 estrelas)

- comentario: String

- Relacionamentos:

- É feita por um Cliente (1)

- É feita para um ProfissionalDeManutencao (1)

5. SistemaDeAutenticacao

- Métodos:

- login(username: String, senha: String)

- registrarCliente(dadosCliente: DadosCliente)

- registrarProfissional(dadosProfissional: DadosProfissional)

- recuperarSenha(email: String)

6. SistemaDePagamento

- Métodos:

- processarPagamento(pedido: PedidoDeServico)

- calcularTotal(pedido: PedidoDeServico)

7. SistemaDeNotificacoes

- Métodos:

- enviarNotificacao(destinatario: Usuario, mensagem: String)

- receberNotificacao()

8. SistemaDeGeolocalizacao

- Métodos:

- rastrearLocalizacao(usuario: Usuario)

- calcularDistancia(origem: Coordenadas, destino: Coordenadas)

9. SistemaDeBuscaEFiltros

- Métodos:

- pesquisarProfissionais(filtros: FiltrosDeBusca)

- filtrarPorEspecializacao(especializacao: String)

- filtrarPorAvaliacao(minClassificacao: int)

- filtrarPorPreco(maxPrecoHora: double)

10. SistemaDeRelatorios

- Métodos:

- gerarRelatorioAtividades()

- gerarEstatisticasAvaliacoes()

11. SistemaDeAdministracao

- Métodos:

- gerenciarContasProfissionais()

- gerenciarReclamacoes()

- gerenciarPedidos()

- gerenciarAvaliacoes()
