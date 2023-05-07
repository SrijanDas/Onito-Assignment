export type FormData = {
  name: string;
  age: number;
  sex: (typeof genderOptions)[number]["value"];
  mobile?: number;
  govtIdType?: (typeof govtIdTypeOptions)[number]["value"];
  govtId?: string;
  guardianRelation?: (typeof guardianRelationOptions)[number]["value"];
  guardianName?: string;
  email?: string;
  emergencyContactNumber?: string;
  occupation?: string;
  religion?: (typeof religionOptions)[number]["value"];
  maritalStatus?: (typeof maritalStatusOptions)[number]["value"];
  bloodGroup?: (typeof bloodGroupOptions)[number]["value"];
  nationality?: string;
};
