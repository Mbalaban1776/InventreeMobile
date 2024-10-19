declare module 'react-native-vector-icons/MaterialIcons' {
    import { Component } from 'react';
    import { TextStyle, ViewStyle, ImageStyle } from 'react-native';
  
    type IconProps = {
      name: string;
      size?: number;
      color?: string;
      style?: TextStyle | ViewStyle | ImageStyle;
    };
  
    export default class MaterialIcons extends Component<IconProps> {}
  }
  