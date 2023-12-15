# Cartt

## 팀원

|               [박치원](https://github.com/chich2)               |              [조유정](https://github.com/hellena345)               |             [송원섭](https://github.com/sws6641)              |
| :-------------------------------------------------------------: | :-------------------------------------------------------------: | :-------------------------------------------------------------: |
| ![박치원](https://avatars.githubusercontent.com/u/59588641?s=400&v=4) | ![조유정](https://avatars.githubusercontent.com/u/151507047?v=4) | ![송원섭](https://avatars.githubusercontent.com/u/43631736?v=4) |


## 프로젝트 소개

- 슬라이드 방식 쇼핑 페이지와,
  구매 정보 데이터를 연동한 장바구니 페이지


## 핵심 기능
<br/>

## 1. 슬라이드 방식으로 좌, 우 화살표를 클릭해 "제품 전환" 기능
![slide](https://github.com/woorifisa-service-dev-2nd/frontend-2nd-feeling/assets/59588641/38629336-c3df-4af1-9b15-88562de47dbb)

#### 슬라이드 전환 구현 수업에서 배열로된 이미지를 불러오는 것과는 다르게, 컴포넌트로 구성된 객체의 내용들이 변경되도록 구현해보았습니다.
### => 활용 개념: Context API 및 useReducer

<br/><br/>

## 2. 해당 제품의 "수량 증가, 감소" 버튼 클릭으로 수량 변경 기능
![inc dec](https://github.com/woorifisa-service-dev-2nd/frontend-2nd-feeling/assets/59588641/448af1e6-83ba-48d9-80b4-bfb041d89da7)

#### 구매할 상품을 추가/제거 할 수 있습니다. <br/> 추가 제거 버튼을 누르면, 상품 JSON 파일의 'amout' key값을 가진 데이터의 value값을 새로운 값으로 업데이트하고 불러와 렌더링 하는 방식으로 진행하였습니다. <br/> (해당되는 데이터 하나의 값만 변경하는 것이 아닌, 전체 데이터 배열을 수정한 새로운 데이터 배열로 변경하는 방식)
### => 활용 개념: Context API 및 useReducer

<br/><br/>

## 3. 이동 아이콘 클릭하면, "장바구니 페이지"로 넘어가는 기능
![cart action](https://github.com/woorifisa-service-dev-2nd/frontend-2nd-feeling/assets/59588641/715760d5-6b78-47b8-b03d-cd1eadf4518f)

#### 장바구니 아이콘을 클릭하면, 페이지 이동 처리 기능을 통해 연결된 페이지를 사용자에게 렌더링 해줍니다.
### 활용 개념: React Router

<br/><br/>

## 4. 장바구니 페이지에서, 구매하려 담은 제품들 수량 조절 기능 및 결제 버튼 누르면 결제 표시창 띄워주는 기능



- 구매를 위해 선택한 제품들을 장바구니에서 확인 및 수량 변경 가능
- 장바구니 페이지에서, 전체 금액 합산 출력


## 도메인 용어 정의


## 비효율적이었거나 어려웠던점
- 여러 Context 정의 후 다수의 value 값을 하위 컴포넌트 범위에 적용할 때, 배열 형태로 넘겨주면 되는 것을 몰라 어려움을 잠시 겪었습니다.
- id값만 넘겨주어 활용하면 간단하게 


## 느낀점

- 박치원 : 오
- 조유정 : 서
- 송원섭 : 서
