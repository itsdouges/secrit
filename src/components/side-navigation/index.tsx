import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

interface SideNavigationProps {
  children?: React.ReactNode;
}

const sheet = StyleSheet.create({
  root: {
    color: 'blue',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    paddingLeft: 8,
    paddingRight: 8,
    paddingBottom: 8,
    minWidth: 240,
  },
  header: {
    marginTop: 24,
    marginBottom: 16,
    padding: 8,
  },
  heading: {
    fontWeight: '600',
  },
  footer: {
    padding: 8,
    flexShrink: 0,
  },
  subtitle: {
    color: 'rgb(107, 119, 140)',
    fontSize: 12,
  },
  menuItem: {
    padding: 8,
    minHeight: 40,
  },
  text: {
    color: 'rgb(66, 82, 110)',
  },
  content: {
    flexGrow: 1,
    height: '100%',
    paddingRight: 8,
    paddingLeft: 8,
    marginRight: -8,
  },
});

export const SideNavigation = ({ children }: SideNavigationProps) => {
  return <View style={sheet.root}>{children}</View>;
};

export const Header = (props: { title: string; subtitle: string }) => {
  return (
    <View style={sheet.header}>
      <View>
        <Text style={[sheet.heading, sheet.text]}>{props.title}</Text>
      </View>
      <View>
        <Text style={sheet.subtitle}>{props.subtitle}</Text>
      </View>
    </View>
  );
};

export const Footer = (props: { title: string; subtitle: string }) => {
  return (
    <View style={sheet.footer}>
      <View>
        <Text style={sheet.text}>{props.title}</Text>
      </View>
      <View>
        <Text style={sheet.subtitle}>{props.subtitle}</Text>
      </View>
    </View>
  );
};

export const MenuItem = (props: {
  children: string;
  description?: string;
  onPress?: () => void;
}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={props.onPress}>
      <View style={sheet.menuItem}>
        <Text style={sheet.text}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export const NavigationContent = (props: { children: React.ReactNode }) => {
  return <ScrollView style={sheet.content}>{props.children}</ScrollView>;
};
