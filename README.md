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
