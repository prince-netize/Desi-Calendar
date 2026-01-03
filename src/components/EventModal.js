import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import colors from '../styles/colors';
import { ICONS } from '../utils/Events';
import { ENGLISH_MONTHS } from '../utils/months';

export default function EventModal({ visible, event, onClose }) {
  if (!event) return null;

  let dateString = '';
  if (event.date) {
    const d = new Date(event.date);
    if (!isNaN(d)) {
      const day = d.getDate();
      const month = ENGLISH_MONTHS[d.getMonth()];
      const year = d.getFullYear();
      dateString = `${day} ${month} ${year}`;
    }
  }

  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableOpacity
        activeOpacity={1}
        onPress={onClose}
        style={styles.overlay}
      >
        <View style={styles.center}>
          <View style={styles.card}>
            <View style={[styles.iconBox, { backgroundColor: event.color }]}>
              {event.icon && (
                <Image
                  source={event.icon}
                  style={styles.icon}
                  resizeMode="contain"
                />
              )}
            </View>

            <View style={styles.textBox}>
              <Text style={styles.title}>{event.titlePa}</Text>
              {dateString ? (
                <Text style={styles.subtitle}>{dateString}</Text>
              ) : null}
            </View>

            <TouchableOpacity onPress={onClose} style={styles.close}>
              <Text style={styles.closeText}>✕</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '85%',
    backgroundColor: colors.white,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    elevation: 10,
  },
  iconBox: {
    width: 52,
    height: 52,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  icon: {
    width: 28,
    height: 28,
  },
  textBox: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  subtitle: {
    fontSize: 13,
    color: '#999',
    marginTop: 4,
  },
  close: {
    paddingLeft: 8,
  },
  closeText: {
    fontSize: 18,
    color: '#999',
  },
});
