import { cardapio } from "./cardapio.js";
class CaixaDaLanchonete {
  calcularValorDaCompra(metodoDePagamento, itens) {
    if (itens.length == 0) {
      return "Não há itens no carrinho de compra!";
    }

    return "";
  }
}

export { CaixaDaLanchonete };
