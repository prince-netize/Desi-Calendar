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
import { PUNJABI_MONTHS_NAMES } from '../utils/months';

export default function EventModal({ visible, events = [], onClose }) {
  if (!visible || !events.length) return null;

  const getDateString = date => {
    if (!date) return '';
    const d = new Date(date);
    if (isNaN(d)) return '';
    const day = d.getDate();
    const month = PUNJABI_MONTHS_NAMES[d.getMonth()];
    const year = d.getFullYear();
    return `${day} ${month} ${year}`;
  };

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
            {events.map(event => (
              <View key={event.id} style={styles.eventRow}>
                <View
                  style={[styles.iconBox, { backgroundColor: event.color }]}
                >
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
                  <Text style={styles.subtitle}>
                    {getDateString(event.date)}
                  </Text>
                </View>
              </View>
            ))}

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
    padding: 16,
    elevation: 10,
    position: 'relative',
  },
  eventRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
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
    position: 'absolute',
    top: 8,
    right: 8,
    padding: 8,
  },

  closeText: {
    fontSize: 18,
    color: '#999',
  },
});
