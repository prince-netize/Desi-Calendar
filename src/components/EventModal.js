import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../styles/colors';

export default function EventModal({ visible, event, onClose }) {
  if (!event) return null;

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.card}>
          {/* Icon / Image */}
          <View style={styles.iconBox}>
            <Text style={styles.icon}>{event.icon || '🌕'}</Text>
          </View>

          {/* Text */}
          <View style={styles.textBox}>
            <Text style={styles.title}>{event.title}</Text>
            <Text style={styles.subtitle}>{event.date}</Text>
          </View>

          {/* Close */}
          <TouchableOpacity onPress={onClose} style={styles.close}>
            <Text style={styles.closeText}>✕</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '85%',
    backgroundColor: colors.white,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    elevation: 8,
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#FFF4E8',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  icon: {
    fontSize: 26,
  },
  textBox: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textDark,
  },
  subtitle: {
    fontSize: 13,
    color: colors.textLight,
    marginTop: 4,
  },
  close: {
    paddingLeft: 8,
  },
  closeText: {
    fontSize: 18,
    color: colors.textLight,
  },
});
