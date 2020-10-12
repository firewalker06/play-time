// Visit The Stimulus Handbook for more details
// https://stimulusjs.org/handbook/introduction
//
// This example controller works with specially annotated HTML like:
//
// <div data-controller="play-card">
//   <h1 data-target="play-card.output"></h1>
// </div>

import { Controller } from "stimulus"
import { Droppable } from "@shopify/draggable";


export default class extends Controller {
  connect() {
    const draggable = new Droppable(this.element, {
      dropzone: ".dropzone"
    })

    draggable.on("drag:stop", (event) => {
      let play_card = event.originalSource.cloneNode(true)
      play_card.classList.remove("draggable--original")
      play_card.removeAttribute("style")

      event.sourceContainer.querySelectorAll(".dropzone").forEach(element => {
        if (element.childNodes.length == 4) {
          element.append(play_card)
        }
      });
    })
  }
}
