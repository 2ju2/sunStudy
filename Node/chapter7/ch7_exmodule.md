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
특정한 형식인 파일로부터 HTML 페이지를 생성하는 모듈(템플릿 엔진 모듈)

#### 1. ejs모듈 설치
$ npm install ejs

* 오류발생시, 설치전 프로젝트 디렉토리 자체를 npm의 패키지로 지정해야함
$ npm init
--> https://youtu.be/MRd0pb2X8FE

* 설치하면 package.json의 dependencies 에 추가됨


#### 1. ejs모듈 사용
1. 작업폴더에 ejs.basic.js 와 ejsPage.ejs 생성
2. 터미널에 node ejs.basic.js 작성하여 서버실행
3. 소스 업데이트시 터미널에 Ctrl + C 하여 서버종료 후 다시 2번 입력

#### 2.ejs기본 형식

##### 메서드
| 메서드 | 설명 | 
| :-------- | :--------: | 
| render(srt, data, option) | ejs 문자열을 HTML 문자열로 변경합니다. | 
** '문자열을 리턴하는 메서드'

##### 태그 
| 태그 | 설명 | 
| :-------- | :--------: | 
| <% Code %> | 자바스크립트 코드 입력 | 
| <%=Value %> | 데이터를 출력 | 

* 만약 ejs / js 파일의 변수명이 동일한 경우 ejs의 데이터로 사용됨.
 * 따라서, js 파일에 test 값을 넣어놓고, ejs파일에 실제 데이터 입력으로 활용


### [2] jade 모듈
특정한 형식인 파일로부터 HTML 페이지를 생성하는 모듈(템플릿 엔진 모듈)
EJS 모듈과 마찬가지로 Jade 페이지를 HTML 페이지로 바꾸어 제공하는 서버를 만들수 있도록 함

#### 1. jade모듈 설치
$ npm install jade
$ npm install jade (2016년도 상반기에 jade모듈명이 pug로 변경)

#### 1. jade모듈 사용
1. 작업폴더에 jade.basic.js 와 JadePage.jade 생성
2. 터미널에 node jade.basic.js 작성하여 서버실행
3. 소스 업데이트시 터미널에 Ctrl + C 하여 서버종료 후 다시 2번 입력

#### 2.jade기본 형식

##### 메서드
| 메서드 | 설명 | 
| :-------- | :--------: | 
| compile(string, option) | jade 문자열을 HTML 문자열로 바꿀 수 있는 함수를 생성 | 
** '함수를 리턴하는 메서드'

##### 태그 
| 태그 | 설명 | 
| :-------- | :--------: | 
| 글자 | 들여쓰기 | 
| 속성 | 괄호 | 
| multi 속성 | 쉼표 | 

##### 특수태그 
| 태그 | 설명 | 
| :-------- | :--------: | 
| - Code | 자바스크립트 코드를 입력합니다. | 
| #{Value} | 데이터를 출력합니다. | 
| = Value | 데이터를 출력합니다. | 



### [3] 서버 실행 모듈
ejs/jade 모듈처럼 require() 함수로 추출하지않고, 
터미널에서 곧바로 사용할 수 있는 모듈
* css/scss - koala 프로그램과 비슷한 역할

#### [3-1] supervisor 모듈
파일의 변경 사항을 자동으로 인식하고 실행을 종료시킨 후 다시 실행
(터미널에 $ node test.js / Ctrl + C 를 반복입력하지 않게 해줌)
** 매우 편함
##### 1. supervisor모듈 설치
$ npm install -g supervisor

##### 2. supervisor모듈 명령어 확인
* $ supervisor supervisor.test.js (서버실행)

##### 3. supervisor모듈 주의사항
$ 서버 프로그램을 실행할 때만 사용 

#### [3-2] forever 모듈
웹서비스의 예외 상황을 대비하고자 만들어진 모듈이 forever 모듈
-> forever 모듈을 사용하면 웹 서버를 안정적으로 유지

##### 1. forever모듈 설치
$ npm install -g forever

##### 2. forever모듈 명령어 확인
| 명령어 | 설명 | 
| :-------- | :--------: | 
| $ forever start forever.test.js | 서버실행 | 
| $ forever list | 현재 실행되고 있는 웹 서버 확인 | 
| $ forever stop 0 | 프로세스 종료 | 

    ** http://127.0.0.1:52273/error --> 서버 죽음
    ** http://127.0.0.1:52273       --> 서버 실행

