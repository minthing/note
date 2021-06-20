### vue 기초공부

* nodebird를 수강하면서 부족한 기초를 채우기 위해 듣기로 함 (시작일 : 210605)

참고 강의 : [개발자의품격](https://www.inflearn.com/course/vue-%EC%A0%9C%EB%8C%80%EB%A1%9C-%EB%B0%B0%EC%9B%8C%EB%B3%B4%EA%B8%B0/dashboard)

***

##### 210606(일)
* `public` : webpack으로 관리되지 않는 정적 리소스가 들어가는 장소
* `App.vue` : 가장 최상위 컴포넌트
* `main.js` : 가장 먼저 실행되는 자바스크립트 파일, Vue 인스턴스를 생성하는 역할을 한다.
* `createApp(App).mount('#app')` : index.html의 id="app"인 곳에 연결(mount)시켜라
* 우리에게 보이는 파일은 `app.vue`임 -> 그 안에 `import HelloWorld from './components/HelloWorld.vue'` 되어있다.
* babel : 하위 버전에서도 돌아가도록 해줌
* router : vue-roter를 위한 기능
* vuex : 상태관리
* Css pre-processor : sass 같은 거

##### 210616(수)
* 공식문서 참조 : https://kr.vuejs.org/v2/guide/forms.html#%EA%B0%92-%EB%B0%94%EC%9D%B8%EB%94%A9%ED%95%98%EA%B8%B0
* 라디오, 체크박스 및 셀렉트 옵션의 경우, v-model 바인딩 값은 보통 정적인 문자열(또는 체크 박스의 boolean).
* 값을 vue 인스턴스 속성에 매칭하고 싶으면 `v-bind`를 사용. 셀렉트 박스와 체크박스를 value 값과 바인딩 하기 위해선 `v-bind:value`를 사용해야 함.
* 한국어는 `v-model`대신 Input 이벤트 사용해야 함.
```html
<select v-model="selected">
  <option v-for="option in options" v-bind:value="option.value">
    {{ option.text }}
  </option>
</select>
<span>Selected: {{ selected }}</span>
```
```javascript
new Vue({
  el: '...',
  data: {
    selected: 'A',
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ]
  }
})

```

##### 210619(토)
* `v-bind:key` :  Vue에서 개별 DOM 노드들을 추적하고 기존 엘리먼트를 재사용, 재정렬하기 위해서 v-for의 각 항목들에 고유한 key 속성을 제공해야 합니다.
* 인스턴스 속성에 반드시 `v-bind` 붙는거 기억하기..!
* nuxt 할 때는 왜 `:key`였냐 -> 거기서 주는 값 사용해서 (https://nuxtjs.org/blog/going-dark-with-nuxtjs-color-mode#creating-a-color-mode-switcher)

##### 210620(일)
* 참고 : https://kr.vuejs.org/v2/guide/conditional.html
* `v-if`의 경우 조건을 만족하는 순간 html 블록을 생성함(아예 안 그려짐)
* `v-show`는 일단 랜더링 되고 DOM에 남아있음. (`display:none` 처리한거임)