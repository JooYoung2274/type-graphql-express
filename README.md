# type-graphql-express

## 기술스택

-   express
-   mongoose -> Typegoose
-   graphql
-   apollo
-   type-graphql
-   typedi

## 🚀

### 2022-09-01

-   mongoose schema선언과 graphql typeDef선언이 중복됨.
-   type-graphql 사용해서 중복 문제 해결하려했는데 mongoose의 schema 타입문제로 불가능.

-> 일단 Typegoose 사용해서 해결해보려함.

### 2022-09-06

-   Typegoose로 entity 작성.
-   entity를 typeDef로 중복 사용 가능.
-   input Dto 작성 시 @InputType()에 대한 명시 필요

-> 결론적으로 type-graphql, Typegoose 사용해서 graphql에 필요한 typeDef와 DB_schema를 하나의 class에서 관리하게 됨.
-> Nest 처럼 도메인별로 폴더나눠서 작성.
-> 목표로 한 세팅은 완료.

[링크](https://jooyoung2274.github.io//Express-+-Graphql-%EC%A2%80-%EB%8D%94-%EA%B5%AC%EC%A1%B0%EC%A0%81%EC%9C%BC%EB%A1%9C-%EC%A7%9C%EA%B8%B0-(+-Type-graphql,-Typegoose,-Typedi)/)
