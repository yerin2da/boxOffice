// TypeScript.tsx
import React, {JSX} from 'react';

function TypeScript(): JSX.Element {
    const runTest = () => {
        // 1. 변수 타입 선언
        let name1: string = "절대자";
        let age: number = 32;
        let isKing: boolean = false;
        let scores: number[] = [10, 20, 30];
        let hero: [string, number] = ["절대자", 1];
        let user: { id: number; name: string } = { id: 1, name: "절대자" };

        console.log("===== 타입스크립트 테스트 시작 =====");
        console.log(name1);
        console.log(age);
        console.log(isKing);
        console.log(scores);
        console.log(hero);
        console.log(user);
        console.log("===================================");

    //     2. 함수 타입 선언
        function greet(name:string):string {
            return name;
        }

        function add(a:number, b:number): number {
            return a + b;
        }

        function isAlive(alive:boolean): string {
            return alive ? "살아계심" : "돌아가심"
        }

        console.log(greet("절대자"));
        console.log(add(10,20));
        console.log(isAlive(false));

    //     3. 실습

        // interface 정의
        interface Product {
            id:number;
            name:string;
            price:number;
            isStock:boolean;
        }

        //객체 생성
        const apple: Product = {
            id: 1000,
            name:"사과",
            price:1200,
            isStock: true
        }

        const banana: Product = {
            id:500,
            name:"바나나",
            price:800,
            isStock: false
        }

        //출력
        console.log("상품목록 :");
        console.log(apple);
        console.log(banana);

    //    ==========고급 인터페이지 기능 4종=================
        // 1. optional 속성 - 있어도 되고 없어도 됨
        interface User{
            id:number;
            name: string;
            email?:string;//있어도 되고 없어도 됨
        }

        const u1: User = {
            id: 1000,
            name:"절대자"
        };
        const u2: User = {
            id: 2000,
            name:"이방인",
            email:"u2@gmail.com",
        }
        console.log(u1, u2);


        //2. readonly 속성 - 읽기 전용(한번 값이 정해지면 수정불가)
        interface Settings {
            readonly appName: string;//값이 정해짐
            version: number;
        }

        const config: Settings = {
            appName: "타입앱",
            version: 1
        };

        config.version = 2;       // ✅ 가능 (readonly 아님)
        //config.appName = "다른앱"; // ❌ 오류! appName은 readonly


        // 3. extends - 인터페이스 확장(상속 느낌)
        interface Parent {
            id:number;
            name:string;
        }

        interface Child extends Parent {
            discountRate:number;
        }

        const saleItem : Child = {
            id : 99,
            name:"프리미엄 배",
            discountRate:0.2,
        }

        console.log(saleItem);

        //4. 인터페이스를 함수 매개변수 타입으로 사용
        interface Customer {
            id:number;
            name: string;
        }

        function welcome(customer1: Customer): string {
            return `환영합니다 ${customer1.id} ${customer1.name}님!`
        }

        console.log(welcome({id:77, name:"절대자"}));


//   ==================================================================

        //1. 유니언 타입(Union Types)- 하나의 변수에 여러타입 허용 가능
        let value: string | number = "절대자";
        value = 9;
        console.log("유니언 타입", value);


        //2. 타입 좁히기(Type Narrowing)-유니언일때 실제 타입 구체적으로 알아내기
        function printInfo(info: string | number) {
            if (typeof info === "string") {
                console.log("문자열길이", info.length);
            }else {
                console.log("숫자 제곱", info * info);
            }
        }


        //3. 배열 타입과 반복처리
        let names: string[] = ["절대자", "이방인", "전사"];
        let score: number[] = [100, 95, 89];

        // forEach 사용
        names.forEach((n) => console.log("이름 : ", n));
        score.forEach((s) => console.log("점수 :", s));

        // map 사용
        names.map((n) => console.log("이름 :", n));
        score.map((s) => console.log("점수 :", s));

        //배열에 유니언 타입 적용가능
        let mixed: (string | number)[] = ["절대자", 1, "용사", 2];


        //4. 타입 별칭 (Type Alias)- 자주 쓰는 복잡한 타입구조에 이름 붙임
        type UserID = string | number;
//인터페이스=주로 객체 정의, type은 다양한 타입(객체, 우니언, 기본형)에 이름붙이기
        let id1: UserID = "admin";
        let id2: UserID = 1234;


        //5. 리터럴 타입 + 유니언 - 변수의 타입을 특정 값으로 고정 가능
        type Direction = "up" | "Down" | "left" | "right";
        function move(dir: Direction) {
            console.log("방향", dir);
        }
        move("up");     // ✅
        // move("bottom"); // ❌ 오류!

        //5-1. 제네릭 함수-어떤 타입이든 그대로 돌려주는 wrapper 함수
        function wrap<T>(value: T): {value: T} {
            return {value};
        }

        const numWrapped = wrap(123);
        const textWrapped = wrap("절대자");
        console.log(numWrapped, textWrapped);

        //5-2. 제네릭 제약
        //길이를 가지는 값만 허용하는 제네릭
        // interface HasLength { length : number}
        //


    };

    return (
        <div>
            <h1>TypeScript 연습 컴포넌트입니다!</h1>
            <button onClick={runTest}>테스트 콘솔 실행</button>
        </div>
    );
}

export default TypeScript;
