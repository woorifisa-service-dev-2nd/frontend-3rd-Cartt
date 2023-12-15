# Cartt
## 최종 코드: YJ8 브랜치 확인

<br/> <br/>

# 😉 팀원

|               [박치원](https://github.com/chich2)               |              [조유정](https://github.com/hellena345)               |             [송원섭](https://github.com/sws6641)              |
| :-------------------------------------------------------------: | :-------------------------------------------------------------: | :-------------------------------------------------------------: |
| ![박치원](https://avatars.githubusercontent.com/u/59588641?s=400&v=4) | ![조유정](https://avatars.githubusercontent.com/u/151507047?v=4) | ![송원섭](https://avatars.githubusercontent.com/u/43631736?v=4) |

<br/> <br/><br/>

# 🌈 활용 기술

## `react`, `HTML`, `JS`
## `MUI`, `React-router-dom`

<br/> <br/><br/>

# 📖 프로젝트 소개
### ⚙️ 제품 구매 쇼핑 페이지 구현 <br/><br/> ⚙️ 구매 정보 데이터를 연동한 장바구니 페이지 구현 <br/><br/> 🔗 제품 구매 페이지에서 장바구니 버튼 클릭 시, 화면 이동되도록 구현

<br/> <br/><br/>

# 🛠 핵심 기능

<br/>

# 1. 슬라이드 방식으로 좌, 우 화살표를 클릭해 "제품 전환" 기능
![111 slide](https://github.com/woorifisa-service-dev-2nd/frontend-3rd-Cartt/assets/59588641/780e3a51-68d3-4386-8c25-1e85c2194ab5)

### - 슬라이드 전환 구현 수업에서 배열로된 이미지를 불러오는 것과는 다르게, <br/>컴포넌트로 구성된 객체의 내용들이 변경되도록 구현해보았습니다.
### 🔍 활용 개념: `Context API` 및 `useReducer`


<br/><br/>

# 2. 해당 제품의 "수량 증가, 감소" 버튼 클릭으로 수량 변경 기능
![change amount](https://github.com/woorifisa-service-dev-2nd/frontend-3rd-Cartt/assets/59588641/0d841076-2d5e-44f7-a2e5-330da6f4b22d)


### - 구매할 상품을 추가/제거 할 수 있습니다. <br/><br/> - 추가 제거 버튼을 누르면, 상품 JSON 파일의 'amout' key값을 가진 데이터의 value값을 <br/> 새로운 값으로 업데이트하고 업데이트된 값을 불러와 렌더링되도록 진행하였습니다. <br/><br/> - (해당되는 데이터 하나의 값만 변경하는 것이 아닌, <br/> 전체 데이터 배열을 수정한 새로운 데이터 배열로 변경하는 방식
### 🔍 활용 개념: `Context API` 및 `useReducer`

<br/><br/>

# 3. 이동 아이콘 클릭하면, "장바구니 페이지"로 넘어가는 기능
![111 change page](https://github.com/woorifisa-service-dev-2nd/frontend-3rd-Cartt/assets/59588641/e5738707-07c1-41c4-8cf1-0475ef78f389)


### - 장바구니 아이콘을 클릭하면, 페이지 이동 처리 기능을 통해 연결된 페이지를 사용자에게 렌더링 해줍니다.
### 🔍 활용 개념: `React Router`

<br/><br/>

# 4. 장바구니 페이지에서, 구매하려 담은 제품들 수량 조절 기능 <br/> 및 합산 금액 출력, 결제 버튼 누르면 결제 표시창 띄워주는 기능
![change at cart](https://github.com/woorifisa-service-dev-2nd/frontend-3rd-Cartt/assets/59588641/e3287af5-5a2c-4cd9-86e3-775a48138572)


### - 장바구니 페이지에서 수량 조절 시, 위와 동일하게, 상품 JSON 파일의 'amout' key값을 가진 데이터의 value값을 새로운 값으로 업데이트하고 불러와 렌더링 하는 방식으로 진행하였습니다.
### 🔍 활용개념 : `Context API` 및 `useReducer`

<br/><br/><br/>

# ⚠️ 비효율적이었거나 아쉬웠던점

## 1. 여러 Context 정의 후 다수의 value 값을 하위 컴포넌트 범위에 적용할 때, <br/> 배열 형태로 넘겨주면 되는 것을 몰라 어려움을 잠시 겪었습니다.
![ProductBody jsx - frontend-3rd-Cartt-wonseop - Visual Studio Code 2023-12-15 오전 11_30_17](https://github.com/woorifisa-service-dev-2nd/frontend-3rd-Cartt/assets/59588641/7b2f7327-f859-4b2f-a421-5374ed0977b0)

<br/>

## 2. 전체 JSON 파일을 넘겨서 ID 값을 활용했는데, <br/> JSON의 다른 값들은 필요가 없었기 때문에 ID만 넘겨주어도 됐었습니다.
![had to send id](https://github.com/woorifisa-service-dev-2nd/frontend-3rd-Cartt/assets/59588641/6b343a7c-3591-4361-bd81-b004115897bf)

<br/>

## 3. 결제버튼 클릭 시 첫 페이지로 다시 시작되게하고, 장바구니가 비어있을 때 비어있다는 것을 안내해줄 수 있게 구현하면 좋았지만 시간이 부족했다.

<br/>

## 4. 판매 상품은 전부 유기농 원료로 만든다는 이야기로 <br> 각 제품들에 탄,단,지 정보를 추가하여, 주문하는 총 영양소 정보를 계산해서 주문할 수 있도록 하고 싶었지만 이 역시 시간이 부족해서 구현하지 못한 점이 아쉬웠다.

<br/>

## 5. 팀원 모두 깃 사용법이 미흡하여, 협업시 어려움을 겪었습니다. <br/>서로 의견을 공유하며 push, merge 등 <br/> GIT 명령어 사용법에 익숙해질 수 있는 시간이었다.

<br/> <br/><br/>

# 🧗 느낀점

## - 박치원
### 수업시간에 강사님 코드를 따라하며 익혔던 개념들을 적용해 새롭게 구현해보는 과정에서 놓쳤던 부분들을 다시 재정비 할 수 있었고, 팀원과 함께 발생되는 문제들을 해결해 나가며 각자의 문제 해결 방식을 배울 수 있는 시간이었습니다. 
## - 조유정 
### 이번이 첫 프로젝트여서 많이 걱정했었는데 좋은 팀원들 덕분에 그래도 잘 마무리 지은 것 같습니다. 깃 사용법을 배웠고, UI 라이브러리중 아이콘이 많은 MUI를 사용하였는데 아이콘 부분을 활용하지 못한 것 같아 아쉽긴하지만 라이브러리를 사용하는 좋은 경험이었던 것 같습니다.
## - 송원섭
### reducer를 사용해보며 동작 원리를 조금이나마 이해하게 되었습니다. 기능 구현만 생각하여 코드를 작성하다 보니 컴포넌트를 재사용하도록 설계를 잘 하지 못한것 같아 아쉬운 마음이 들었고 앞으로 이런 부분을 먼저 고려하여 깔끔한 코드를 작성해야겠다고 생각했습니다.



