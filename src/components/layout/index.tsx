import React from 'react';
import { SafeAreaView, View, ScrollView, StyleSheet } from 'react-native';

interface PageLayoutProps {
  children?: React.ReactNode;
}

const sheet = StyleSheet.create({
  root: {
    backgroundColor: '#fff',
    height: '100%',
    width: '100%',
    flexDirection: 'row',
  },
  leftSidebar: {
    borderRightWidth: 1,
    borderRightColor: 'rgb(223, 225, 230)',
    backgroundColor: 'rgb(250, 251, 252)',
    flexGrow: 0,
    flexShrink: 0,
    position: 'relative',
    width: 240,
  },
  content: {
    flexBasis: '100%',
    padding: 16,
    paddingTop: 32,
  },
});

export const Layout = ({ children }: PageLayoutProps) => {
  return <SafeAreaView style={sheet.root}>{children}</SafeAreaView>;
};

export const LeftSidebar = ({ children }: PageLayoutProps) => {
  return <View style={sheet.leftSidebar}>{children}</View>;
};

export const Content = ({ children }: PageLayoutProps) => {
  return (
    <ScrollView style={sheet.content}>
      <View style={sheet.content}>{children}</View>
    </ScrollView>
  );
};
