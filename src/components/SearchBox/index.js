import React from "react"


function searchBox() {
return (
<div class="row">
<form class="col s12">
  <div class="row">
    <div class="input-field col s12">
      <textarea id="textarea1" class="materialize-textarea"></textarea>
      <label for="textarea1">Search for a farmer</label>
    </div>
  </div>
</form>
</div>
)
}

export default searchBox;