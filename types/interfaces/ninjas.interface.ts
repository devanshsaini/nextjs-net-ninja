export interface INinjas {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: "1-770-736-8031 x56442";
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
