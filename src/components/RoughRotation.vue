<template>
  <div class="rough-notation">
    <div class="container">
      <div class="row">
        <h1 class="notation highlight" data-color="#ecec42">Rough Notation</h1>
        <p>A small JavaScript library to create and animate 
          <span class="notation box" data-color="red">annotations</span> 
        on a web page</p>
        <p>
          Rough Notation uses <span class="notation underline" data-color="blue">RoughJS</span> to create a hand-drawn look and feel. 
          Elements can be annotated in a number of different styles.
          Animation duration and delay can be configured, or just turned off.
        </p>
        <p>Rough Notation is <span class="notation circle" data-color="red">3.8kb</span>
           in size when gzipped, and the code is available on GitHub.</p>
      </div>
      <div class="row">
        <h1 class="notation strike-through" data-color="green">Strike Through</h1>
        <p>
          Draw a hand-drawn line through an element creating a 
          <span class="notation strike-through" data-color="green">stroke-through</span>
            effect.
        </p>
      </div>
      <div class="row">
        <h1 class="notation crossed-off" data-color="orange">Crossed Off</h1>
        <p>
          To symbolize rejection, use a <span class="notation crossed-off" data-color="orange">crossed-off</span> effect on an element.
        </p>
      </div>
      <div class="row">
        <h1 class="notation bracket" data-color="red" data-position="top">Bracket</h1>
        <p>Create a hand-drawn bracket around a block (like a paragraph of text) on one or multiple sides of the block.</p>
        <p class="notation bracket" data-color="red" data-position="left,right">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan nisi hendrerit augue molestie tempus. Phasellus purus quam, aliquet nec commodo quis, pharetra ut orci. Donec laoreet ligula nisl, placerat molestie mauris luctus id. Fusce dapibus non libero nec lobortis. Nullam iaculis nisl ac eros consequat, sit amet placerat massa vulputate.
        </p>
      </div>
      <div class="row">
        <h1>Multiple Lines</h1>
        <p>Ability to annotate inline content that can span multiple lines</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed accumsan nisi hendrerit augue molestie tempus.
          <span class="notation highlight" data-multiple-line="true" data-color="yellow">Phasellus purus quam, aliquet nec commodo quis, pharetra ut orci.
          Donec laoreet ligula nisl, placerat molestie mauris luctus id.
          Fusce dapibus non libero nec lobortis.
          Nullam iaculis nisl ac eros consequat, sit amet placerat massa vulputate. 
          Maecenas euismod volutpat ultrices.</span>
          Pellentesque felis ex, ullamcorper in felis finibus, feugiat dignissim augue.
          Integer malesuada non eros consectetur interdum. Mauris mollis non urna in porta.
        </p>
      </div>
      <div class="row">
        <h1 class="notation-group" id="e1">Anonation Group</h1>
        <p>
          Rough Notation provides a way to order the animation of annotations by creating an <span id="e2" class="notation-group">annotation-group</span>. 
          Pass the list of annotations to create a group. When <span id="e3" class="notation-group">show</span> is called on the group, the annotations are animated in order.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { annotate, annotationGroup } from 'rough-notation'

export default {
  async mounted() {
    let animate = this.$el.querySelectorAll('.notation')
    let sleep = ms => new Promise(res => setTimeout(res, ms))
    Array.from(animate).map(async (dom,i) => {
      await sleep(200 * i)

      // Type
      let type = {}
      let highlight = dom.classList.contains('highlight') && 'highlight'
      let underline = dom.classList.contains('underline') && 'underline'
      let box = dom.classList.contains('box') && 'box'
      let circle = dom.classList.contains('circle') && 'circle'
      let strikeThrough = dom.classList.contains('strike-through') && 'strike-through'
      let crossedOff = dom.classList.contains('crossed-off') && 'crossed-off'
      let bracket = dom.classList.contains('bracket') && 'bracket'
      type.type = highlight || underline || box || circle || strikeThrough || crossedOff || bracket
      
      // Color. Default CurrentColor
      let color = dom.getAttribute('data-color')
      type.color = color

      // Padding
      type.padding = '10'

      // Brackets
      let position = dom.getAttribute('data-position') || 'right'
      position = position.split`,`
      type.brackets = position

      // Multiple Lines
      let multipleLines = dom.getAttribute('data-multiple-line') == 'true'
      type.multiline = multipleLines

      const annotation = annotate(dom, type)
      annotation.show()
    })

    const a1 = annotate(document.querySelector('#e1'), { type: 'box' , color: 'red'});
    const a2 = annotate(document.querySelector('#e2'), { type: 'highlight', color: 'yellow' });
    const a3 = annotate(document.querySelector('#e3'), { type: 'underline', color: 'red' });
    const ag = annotationGroup([a3, a1, a2]);
    await sleep(3000)
    ag.show();
  }
}
</script>

<style>
.rough-notation {
  padding-top: 50px;
  color: #333;
}
.container {
  width: 800px;
  margin: auto;
}
.row {
  margin-bottom: 50px;
}
h1 {
  margin-bottom: 15px;
  width: max-content;
  max-width: 100%;
}
p {
  line-height: 1.5;
  margin-bottom: 10px;
  width: max-content;
  max-width: 100%;
}
</style>