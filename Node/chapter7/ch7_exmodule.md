# chapter7 외부모듈


### 외부모듈이란?
웹 개발시 다른 사람들이 만든 외부 모듈 (컴퓨터 부품개념)
### 알아둘 개념
| 분류 | 개념 | 설명 |
| :-------- | :--------: | --------: |
| 외부 지역 모듈 | ejs 모듈 | 웹페이지를 동적으로 생성 |
| 외부 지역 모듈 | jade 모듈 | 웹페이지를 동적으로 생성 |
| 외부 전역 모듈 | supervisor 모듈 | 파일의 변경 사항을 자동으로 인식하고 종료 후 다시 실행 |
| 외부 전역 모듈 | forever 모듈 | 웹서비스 장애와 같은 예외 상황을 대비하고자 만들어진 모듈 |
|  | npm install 명령 | 외부 모듈을 설치할때 사용 |
|  | npm init 명령 | Node.js 프로젝트를 생성할 때 사용 |
|  | package.json 파일 | Node.js 프로젝트의 환경 설정 정보를 담은 파일  |


### [1] ejs 모듈

#### 1. ejs모듈 설치
$ npm install ejs

* 오류발생시, 설치전 프로젝트 디렉토리 자체를 npm의 패키지로 지정해야함
$ npm init
--> https://youtu.be/MRd0pb2X8FE

* 설치하면 package.json의 dependencies 에 추가됨