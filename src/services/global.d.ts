import { Settings as ProSettings,MenuDataItem } from '@ant-design/pro-layout';

export interface IUser {
  name: string;
  avatar: string;
  id: string;
  email: string;
  unreadCount: number;
  phone: string;
  permissions: string[];
}

export interface IGlobalProps {
  currentUser?: IUser;
  settings?: ProSettings;
  // menu:MenuDataItem[]
}
