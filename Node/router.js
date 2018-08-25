/* 



********************
*** 매핑 - 라우팅 ***
********************

https://github.com/kim0lil/J20180730/blob/master/linker/Step02.js

- 공유기에서 하는일
1. 최적화된 경로 설정       = 네비게이션 초기 설정
2. 최적화된 경로의 흐름 설정 = 네비게이션 중간 흐름 확인

- if/else if 문은 의존성이 높기때문에(런타임 도중 추가 불가)
- addRoute 매개변수로 분리하면 (런타임 도중 추가 가능)

- 모듈의 결합도와 응집도는 반비례
결합도 = 서로다른 모듈끼리 얼마나 의존성이 높은지.
응집도 = 모듈의 속성과 메서드가 얼마나 자기들끼리 잘 묶여있나.

--> 결합도가 높을때 
장점 : 또 다른 외부모듈과의 연계가 쉬워진다.
단점 : 하나의 모듈만 빠져도 실행불가(안정성이 떨어진다.)

--> 응집도가 높을때
장점 : 외부모듈과 통신이 없기때문에 안정성이 좋음
단점 : 외부묘듈과 연결했을때, 외부모듈도 메서드를 따로갖고있어야함 





*****************************************
*** 커플링의 5가지 방법 (결합도의 종류) ***
*****************************************
https://github.com/kim0lil/JavaStudy/blob/master/src/chap0/session01/package-info.java


서로 뭘 덜질지 / 뭘 받을지 잘 알고있다는것 = 결합도가 높다
add 메서드만 있는 데이터결합 --> 결합도가 낮다
add/minus 메서드가 있는 데이터 컨트롤 --> 결합도가 높다

[1] 데이터 결합(Data)
두 객체 간의 결합을 '값' 으로 결합 한다.
https://github.com/kim0lil/JavaStudy/tree/master/src/chap0/session01/section01
결합도 : 최하 (각 객체에 아무런 영향이 없기때문에)

[2] 데이터 결합(Stamp : switch/flag manager)
두 객체 간의 결합을 수정 가능한 주소값으로 결합 한다
https://github.com/kim0lil/JavaStudy/blob/master/src/chap0/session01/section01/Content02_Stamp.java
결합도 : 조금높음 (makeContent 가 ArrayList 를 알고있어야함)

[3] 데이터 결합(Control)
두 객체 간의 결합에서 인자값으로 제어를 사용하여 밀접하게 결합한다.
https://github.com/kim0lil/JavaStudy/blob/master/src/chap0/session01/section01/Content03_Control.java

[4] 데이터 결합(Common)
두 객체 간의 결합에서 전역 값을 참조하여 결합한다.
https://github.com/kim0lil/JavaStudy/blob/master/src/chap0/session01/section01/Content05_Common.java
common() 객체로 넘어간 순간, 모든것을 위임
Content05 가 없으면 CommonLib()가 있을 수 없다.

[5] 데이터 결합(Content)
두 객체 간의 결합에서 객체의 값을 직접 사용한다.
https://github.com/kim0lil/JavaStudy/blob/master/src/chap0/session01/section01/Content06_Contents.java




*****************************************
************** 응집도의 종류 *************
*****************************************

[1] 우연적 응집도 (Coincidental)
    -> 아무런 관련 없는 기능 끼리 응집 된 모듈
    
[2] 논리적 응집도 (Logical)
	-> 기능적인 요소가 관련 있는 것들 끼리 응집 된 모듈

[3] 시간적 응집도 (Temporal)
    -> 기능별 요소의 순서가 상관없는 것들 끼리 응집 된 모듈
    
[4] 절차적 응집도  (Procedural)
    -> 기능적 요소의 순서가 정해전 것들 끼리 응집 된 모듈 
    
[5] 통신적 응집도 (Communication)
    -> 서로 다른 기능 끼리 한 요소를 사용 함으로써 응집 된 모듈
    
[6] 순차적 응집도 (Sequential)
    -> 일련의 활동이 다른 활동의 입력으로 사용 되는 것들 끼리 응집 된 모듈    

[7] 기능적 응집도 (Functional)
    -> 모든 명령이 한가지 문제 해결을 위하여 작업을 수행하도록 응집 된 모듈



*/