import { TextStyle, ViewStyle } from 'react-native';

export type StylesTypes = {
  container: ViewStyle;
  header: TextStyle;
  input: ViewStyle;
  keyboardAvoiding: ViewStyle;
  label: TextStyle;
  passwordContainer: ViewStyle;
  passwordInput: TextStyle;
};

export type RootProps = {
  color: string;
  header: string;
  height: string;
  label: string;
  onChange(...args: any[]): void;
  onPress(): void;
  value: string;
  width: string;
};
