export interface SccessLogin {
  message: string
  // user:UserInterface
  token:string
}
export interface  FaildLogin {
  message: string
   statusmsg:string
}

export interface User {
  id: number
  name: string
  email: string
}

// export interface UserInterface {
//   id: string;
//   name: string;
//   email: string;
//   role: string;
//   token: string;
// }
export interface User {
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
    token: string;
  };
}


 