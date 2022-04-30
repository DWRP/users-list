interface UserLoginProps {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

interface UserLocation {
  street: string;
  city: string;
  state: string;
  postcode: string;
  coordinates: {
    latitude: string;
    longitude: string;
  };
  timezone: {
    offset: string;
    description: string;
  };
}

interface UserName {
  title: string;
  first: string;
  last: string;
}

interface UserDataOfBirthOrRegister {
  date: string;
  age: number;
}

interface UserIdentyfierProps {
  name: string;
  value: string;
}

interface UserPictureProps {
  large: string;
  medium: string;
  thumbnail: string;
}

export type User = {
  gender: string;
  name: UserName | string;
  location: UserLocation;
  email: string;
  login: UserLoginProps;
  dob: UserDataOfBirthOrRegister;
  registered: UserDataOfBirthOrRegister;
  phone: string;
  cell: string;
  id: UserIdentyfierProps | string;
  picture: UserPictureProps;
  nat: string
};
