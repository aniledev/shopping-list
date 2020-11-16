$(function addItem() {
  $("#js-shopping-list-form").submit((e) => {
    // stops the default form submission behavior
    e.preventDefault();
    // get the value of the input - the name of the todo item
    const add = $(event.currentTarget)
      .find('input[id="shopping-list-entry"]')
      .val();
    // store the value of the input into a new array
    const newToDo = [];
    // push the value of input into the new array
    newToDo.push(
      `<li>
      <span class="shopping-item">${add}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label-check">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label-delete">delete</span>
        </button>
      </div>
    </li>`
    );
    // apend the results array to the ul class shopping list
    $(".shopping-list").append(newToDo);
  });
});

// check
// when you press the check button add the shopping check class to the html
$(function check() {
  $("ul").on("click", ".shopping-item-toggle", function (event) {
    $(event.currentTarget)
      .closest("li")
      .find(".shopping-item")
      .toggleClass("shopping-item__checked");
  });
});

// uncheck

//   when button is clicked it should remove the entire li within the ul in html
$(function deleteItem() {
  $(".shopping-list").on("click", ".shopping-item-delete", function (event) {
    event.preventDefault();
    // should remove the entire li within the ul in html
    $(event.currentTarget).closest("li").remove();
  });
});
