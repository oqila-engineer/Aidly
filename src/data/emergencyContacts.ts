export interface EmergencyContactInfo {
  number: string;
  nameKey: 'emergency112Title' | 'emergency103Title' | 'emergency101Title' | 'emergency102Title' | 'emergency104Title' | 'emergency1050Title';
  descKey: 'emergency112Desc' | 'emergency103Desc' | 'emergency101Desc' | 'emergency102Desc' | 'emergency104Desc' | 'emergency1050Desc';
  color: string;
  isPrimary?: boolean;
}

export const UZBEKISTAN_EMERGENCY_CONTACTS: EmergencyContactInfo[] = [
  {
    number: '112',
    nameKey: 'emergency112Title',
    descKey: 'emergency112Desc',
    color: 'bg-rose-600 text-white hover:bg-rose-700',
    isPrimary: true
  },
  {
    number: '103',
    nameKey: 'emergency103Title',
    descKey: 'emergency103Desc',
    color: 'bg-amber-600 text-white hover:bg-amber-700',
    isPrimary: true
  },
  {
    number: '101',
    nameKey: 'emergency101Title',
    descKey: 'emergency101Desc',
    color: 'bg-orange-600 text-white hover:bg-orange-700'
  },
  {
    number: '102',
    nameKey: 'emergency102Title',
    descKey: 'emergency102Desc',
    color: 'bg-blue-600 text-white hover:bg-blue-700'
  },
  {
    number: '104',
    nameKey: 'emergency104Title',
    descKey: 'emergency104Desc',
    color: 'bg-amber-700 text-white hover:bg-amber-800'
  },
  {
    number: '1050',
    nameKey: 'emergency1050Title',
    descKey: 'emergency1050Desc',
    color: 'bg-emerald-700 text-white hover:bg-emerald-800'
  }
];
