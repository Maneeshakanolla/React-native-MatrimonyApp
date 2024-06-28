import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProgressBar = ({ progress }) => {
  return (
    <View style={styles.progressBar}>
      <View style={[styles.progress, { width: `${progress}%` }]}>
        <Text style={styles.progressText}>{progress}%</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    height: 20,
    width: '90%',
    backgroundColor: '#e0e0e0', // background color of progress bar container
    borderRadius: 10, // border radius to round the corners
    overflow: 'hidden', // clip child elements that overflow
  },
  progress: {
    height: '100%',
    backgroundColor: '#4caf50', // color of the progress
    borderRadius: 10, // border radius to match the container
    justifyContent: 'center', // center align the text
    alignItems: 'center', // center align the text
    position: 'relative', // for absolute positioning of text
  },
  progressText: {
    color: '#fff', // color of the progress text
    fontSize: 14,
    fontWeight: 'bold',
    position: 'absolute', // absolute positioning inside progress bar
    zIndex: 1, // ensure text is above the progress bar
  },
});

export default ProgressBar;
