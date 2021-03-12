<template>
  <div id="typing-speed-test">
    <div class="popup-overlay" v-if="showPopup">
      <div class="popup" :class="{turtle: rank == 'turtle', 't-rex': rank == 't-rex', 'octopus': rank == 'octopus'}">
        <div class="popup-close" @click="reset">X</div>
        <div class="popup-body">
          <div class="avatar">
            <img src="https://i.ibb.co/Ws5Hx2B/rua.png" alt="Turtle" v-if="rank == 'turtle'">
            <img src="https://i.ibb.co/PxbnZKb/t-Rex.png" alt="t-Rex" border="0" v-else-if="rank == 't-rex'">
            <img src="https://i.ibb.co/P6gd8Jx/octopus.png" alt="octopus" border="0" v-else>
          </div>
          <div class="content">
            <h4>You're a {{ nameRank }}.</h4>
            <p>Well. You type with the speed of <span>{{ score }} WPM</span> ({{ chars }} CPM).Yout accuracy was <span>{{ accuracy }}%</span>.It could be better!</p>
          </div>
        </div>
      </div>
    </div>
    <div class="typing-test">
      <div class="title">Typing Speed Test</div>
      <div class="analysis">
        <div class="item">
          <div class="result">{{ score }}</div>
          <div class="description">words/min</div>
        </div>
        <div class="item">
          <div class="result">{{ chars }}</div>
          <div class="description">chars/min</div>
        </div>
        <div class="item">
          <div class="result">{{ accuracy }}</div>
          <div class="description">% accuracy</div>
        </div>
      </div>
      <div class="time item">
        <div class="result">{{ time }}</div>
        <div class="description">sec</div>
      </div>
    </div>
    <div class="app-input" @click="trigger">
      <div class="words-typing">
        <div class="test-input-group">
          <span v-for="(word, idx) in group" :key="idx" 
          :class="{wrong: word !== words[idx]}">{{ word }}</span>
        </div>
        <div :contenteditable="editable" class="test-input" autocomplete="off" autocorrect="off" :class="{wrong: wrong}" ref="edit"></div>
      </div>
      <div class="list-words">
        <span v-for="(word, idx) in getWords" :key="idx">{{ word }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import randomWords from 'random-words';
export default {
  name: 'App',
  data: function() {
    return {
      words: [],
      group: [],
      wrong: false,
      word: '',
      i: 0,
      start: 0,
      chars: 0,
      score: 0,
      accuracy: 0,
      startGame: false,
      time: 60,
      showPopup: false,
      rank: '',
      gameOver: false,
      tmp: '',
      editable: true
    }
  },
  computed: {
    getWords() {
      return this.words.slice(this.start)
    }
  },
  mounted() {
    this.reset()
    var input = this.$refs['edit']
    
    input.addEventListener('keydown', e => {
      if(this.gameOver) return this.editable = false
      if(!this.startGame) this.init()
      this.startGame = true

      if(e.keyCode > 47 && e.keyCode < 58 || e.keyCode > 64 && e.keyCode < 91) {
        let caret = this.showCaretPos()
        this.tmp = this.tmp.slice(0, caret) + e.key + this.tmp.slice(caret)
        this.wrong = !this.word.startsWith(this.tmp)
        this.i += !this.wrong
        this.$set(this.words, this.start, this.word.slice(this.i))
        return
      }

      if(e.keyCode == 46 || e.keyCode === 8) {
        let caret = this.showCaretPos()
        caret = this.tmp.length === caret ? caret - 1 : caret - 2
        this.tmp = this.tmp.split``.filter((_,i) => i !== caret).join``

        let f = (a, b, i) => i > a.length || a[i] !== b[i] ? i : f(a, b, i + 1)

        this.i = f(this.tmp, this.word, 0)
        this.$set(this.words, this.start, this.word.slice(this.i))
        this.wrong = !this.word.startsWith(this.tmp)
        return
      }

      if(e.keyCode == 32 || e.keyCode == 13) {
        if(e.keyCode === 13) e.preventDefault()
        this.group.push(this.tmp)

        this.score += this.tmp === this.word
        this.chars += this.tmp === this.word ? this.tmp.length : 0
        this.accuracy = (this.score / this.group.length * 100).toFixed(0)

        input.innerHTML = this.tmp = ''
        this.i = 0
        this.$set(this.words, this.start, this.word)
        this.words.push(...randomWords(1))
        this.start++
        this.word = this.words[this.start]
        this.wrong = false
      }
    })
  },
  methods: {
    init() {
      var interval = setInterval(() => {
        this.time--
        if(this.time) return
        clearInterval(interval)
        this.notice()
      }, 1000)
    },
    notice() {
      this.showPopup = true
      this.gameOver = true
      if(this.score < 30) this.rank = 'turtle', this.nameRank = 'Turtle'
      else if(this.score < 40) this.rank = 't-rex',  this.nameRank = 'T-Rex'
      else this.rank = 'octopus',  this.nameRank = 'Octopus'
      this.editable = false
    },
    reset() {
      this.showPopup = false
      this.time = 60
      this.accuracy = 0
      this.score = 0
      this.chars = 0
      this.words = randomWords(20)
      this.word = this.words[0]
      this.i = 0
      this.start = 0
      this.startGame = false
      this.group = []
      this.wrong = false
      this.rank = ''
      this.gameOver = false
      this.editable = true
      var input = document.querySelector('.test-input')
      input.innerHTML = this.tmp = ''
    },
    trigger() {
      this.$refs['edit'].focus()
    },
    showCaretPos() {
      let el = this.$refs['edit']
      return this.getCaretCharacterOffsetWithin(el)
    },
    getCaretCharacterOffsetWithin(element) {
      var caretOffset = 0
      var doc = element.ownerDocument || element.document
      var win = doc.defaultView || doc.parentWindow
      var sel
      if (typeof win.getSelection != "undefined") {
        sel = win.getSelection()
        if (sel.rangeCount > 0) {
          var range = win.getSelection().getRangeAt(0)
          var preCaretRange = range.cloneRange()
          preCaretRange.selectNodeContents(element)
          preCaretRange.setEnd(range.endContainer, range.endOffset)
          caretOffset = preCaretRange.toString().length
        }
      } else if ( (sel = doc.selection) && sel.type != "Control") {
        var textRange = sel.createRange()
        var preCaretTextRange = doc.body.createTextRange()
        preCaretTextRange.moveToElementText(element)
        preCaretTextRange.setEndPoint("EndToEnd", textRange)
        caretOffset = preCaretTextRange.text.length
      }
      return caretOffset
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

.typing-test {
  background: linear-gradient(135deg,#705ca8,#4392c7);
  padding: 40px 0;
}

.title {
  text-transform: uppercase;
  font-size: 36px;
  color: #9dd5f4;
  letter-spacing: -.04em;
  padding: .5em 1em;
  text-shadow: 0 0 6px rgba(157,213,244,.5);
  text-align: center;
}

.analysis {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .5em 1em;
}

.analysis .item {
  margin: 0 30px;
}

.item .result {
  color: #fff;
  font-size: 3em;
  line-height: 1.1em;
  font-weight: 100!important;
  letter-spacing: -.04em;
  text-shadow: 0 0 3px rgba(157,213,244,.8);
}

.item .description {
  color: #fff;
  text-transform: uppercase;
  font-weight: 300;
  font-size: 12px;
  text-shadow: 0 0 3px rgba(157,213,244,.7);
  letter-spacing: .04em;
}

.time {
  text-align: center;
  padding: .5em 1em;
}

.app-input {
  padding: 40px 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  font-size: 1.9em;
  font-family: 'Merriweather', serif;
}

.app-input .words-typing {
  min-width: 50%;
  max-height: 140px;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  font-family: 'Merriweather', serif;
  white-space: nowrap;
}

.test-input {
  height: 100%;
  min-width: 10px;
  float: right;
  text-align: right;
  outline: 0;
  color: #6174b4;
  white-space: nowrap;
  font-family: 'Merriweather', serif;
}

.list-words {
  color: rgb(51,51,51);
  display: flex;
  align-items: center;
}

.test-input-group {
  color: #6174b4;
}

.list-words span:first-child,
.test-input-group span:first-child {
  padding: 0 5px 0 0;
}

.list-words span,
.test-input-group span {
  line-height: 1em;
  padding: 0 5px;
  font-weight: 400;
  vertical-align: middle;
  font-family: 'Merriweather', serif;
}

.wrong {
  text-decoration: line-through;
}

.popup {
  position: fixed;
  z-index: 2;
  width: 480px;
  max-height: 300px;
  padding: 30px;
}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #3333339c;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-close {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: hsla(0,0%,100%,.4);
  background: hsla(0,0%,100%,.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.popup-close:hover {
  background: hsla(0,0%,100%,.3);
}

.popup-body {
  display: flex;
  align-items: center;
}

.popup-body .avatar {
  margin-right: 10px;
  min-width: 100px;
  height: 100px;
  background: #fff;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: inset 4px 6px 0 5px rgba(35,35,60,.05), 0 0 40px 0 hsla(0,0%,100%,.3);
}

.popup-body .content h4{
  color: #fff;
  font-weight: 700;
  font-size: 1.7em;
  margin-top: 0;
  margin-bottom: 10px;
}

.popup-body .content p {
  color: #ffffffc7;
  letter-spacing: 0.25px;
  line-height: 1.3em;
}

.popup-body .content p span {
  font-weight: bold;
  color: #fff;
}

.octopus {
  background: linear-gradient(45deg,#15a4d3,#6f5ca8);
}

.turtle {
  background: linear-gradient(45deg,#c85832,#eba447);
}

.t-rex {
  background:  linear-gradient(45deg,#90cbda,#13a89e);
}

iframe {
  display: none;
}
</style>
