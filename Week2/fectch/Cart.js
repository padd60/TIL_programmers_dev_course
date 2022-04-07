export default function Cart({ $target, initialState, onRemove }) {
  const $cart = document.createElement("div");

  $target.appendChild($cart);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  const caculateTotalPrice = () => {
    const { basePrice, selectedOptions } = this.state;
    return selectedOptions.reduce(
      (acc, option) => acc + (basePrice + option.optionPrice) * option.ea,
      0
    );
  };
  const renderOption = (option, index) => {
    const { productName, basePrice } = this.state;

    return `<li data-index=${index}>${productName} - ${option.optionName} | ${
      basePrice + option.optionPrice
    }, ${option.ea}개 <button class="remove">X</button></li>`;
  };
  this.render = () => {
    const { selectedOptions } = this.state;

    $cart.innerHTML = `
      <ul>
        ${
          Array.isArray(this.state.selectedOptions) &&
          selectedOptions
            .map((option, index) => renderOption(option, index))
            .join("")
        }
      </ul>
      <div>
      ${caculateTotalPrice()} 원
      </div>
    `;

    $cart.querySelectorAll(".remove").forEach(($button) => {
      $button.addEventListener("click", (e) => {
        const $li = e.target.closest("li");
        if ($li) {
          const { index } = $li.dataset;
          onRemove(Number(index));
        }
      });
    });
  };

  this.render();
}
