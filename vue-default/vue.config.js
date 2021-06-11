module.exports = {
    chainWebPack: config => {
        config.plugins.delete('prepatch') // 프리패치(레이지로드)기능 일시 삭제
    }
}

    // request를 두 번 함. 사용자가 about을 클릭하는 순간 about.js를 불러오는 비동기 방식.(레이지 로드)