import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface SideNavigationProps {
  children?: React.ReactNode;
}

const sheet = StyleSheet.create({
  root: {
    minWidth: 240,
    paddingLeft: 8,
    paddingRight: 8,
  },
  header: {
    marginTop: 24,
    marginBottom: 16,
    padding: 8,
  },
  heading: {
    fontWeight: '600',
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
