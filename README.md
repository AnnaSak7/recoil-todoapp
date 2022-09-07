|                                                          |                                                   |
| -------------------------------------------------------- | ------------------------------------------------- |
| npm create-vite                                          |                                                   |
| npm i                                                    |                                                   |
| npm i recoil @types/recoil                               |                                                   |
| mkdir states                                             |                                                   |
| touch inputTitleState.ts                                 | src/states/                                       |
| touch addTitleState.ts                                   | add addTitleState with atom and set key & default |
| wrap components with ##<RecoilRoot>##                    | App.tsx                                           |
| use useRecoilValue & useSetRecoilState or useRecoilState | to set input values                               |
| touch addTitleState.ts                                   | src/states/                                       |
| add addTitleState with atom                              | to have an array of memos/titles to show todos    |
| mkdir types                                              | src/                                              |
| touch Task.ts                                            | src/types/                                        |
| create Task type (use it in addTitleState)               | Task.ts                                           |
| add addTitleStateLength with selector                    | addTitleState.ts                                  |

- atom
- selector (use selector when adding some kind of operation in the asynchronous process or taking the length of an array)

- useRecoilValue
- useSetRecoilState
- useRecoilState
