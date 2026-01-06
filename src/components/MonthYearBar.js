/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../styles/colors';
import { MONTHS } from '../utils/months';
import Feather from 'react-native-vector-icons/Feather';

export default function MonthYearBar({
  month,
  year,
  onPrev,
  onNext,
  onMonthSelect,
  onYearSelect,
}) {
  const [showMonthDrop, setShowMonthDrop] = useState(false);
  const [showYearDrop, setShowYearDrop] = useState(false);

  const years = [2023, 2024, 2025, 2026];

  return (
    <View style={styles.container}>
      {/* Left Arrow */}
      <TouchableOpacity onPress={onPrev}>
        <Feather
          name="chevron-left"
          size={20}
          color={colors.white}
          style={{ marginRight: 10 }}
        />
      </TouchableOpacity>

      {/* Month Dropdown */}
      <View>
        <TouchableOpacity
          style={styles.pill}
          onPress={() => {
            setShowMonthDrop(!showMonthDrop);
            setShowYearDrop(false);
          }}
        >
          <Text style={styles.text}>{MONTHS[month]}</Text>
          <Feather
            name="chevron-down"
            size={14}
            color="#000"
            style={{ marginLeft: 6 }}
          />
        </TouchableOpacity>

        {showMonthDrop && (
          <View style={styles.dropdownBox}>
            {MONTHS.map((m, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => {
                  onMonthSelect(i);
                  setShowMonthDrop(false);
                }}
              >
                <Text style={styles.dropItem}>{m}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>

      {/* Year Dropdown */}
      <View>
        <TouchableOpacity
          style={styles.pill}
          onPress={() => {
            setShowYearDrop(!showYearDrop);
            setShowMonthDrop(false);
          }}
        >
          <Text style={styles.text}>{year}</Text>
          <Feather
            name="chevron-down"
            size={14}
            color="#000"
            style={{ marginLeft: 6 }}
          />
        </TouchableOpacity>

        {showYearDrop && (
          <View
            style={[styles.dropdownBox2, { flexDirection: 'column-reverse' }]}
          >
            {years.map(y => (
              <TouchableOpacity
                key={y}
                onPress={() => {
                  onYearSelect(y);
                  setShowYearDrop(false);
                }}
              >
                <Text style={styles.dropItem}>{y}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>

      <TouchableOpacity onPress={onNext}>
        <Feather
          name="chevron-right"
          size={20}
          color={colors.white}
          style={{ marginLeft: 10 }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    zIndex: 10,
  },
  pill: {
    backgroundColor: colors.white,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginHorizontal: 6,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.textDark,
  },
  dropdown: {
    fontSize: 12,
    marginLeft: 6,
    color: colors.textLight,
  },
  dropdownBox: {
    position: 'absolute',
    top: 40,
    width: 110,
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingVertical: 6,
    elevation: 5,
    zIndex: 100,
  },
  dropdownBox2: {
    position: 'absolute',
    top: 40,
    width: 90,
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingVertical: 6,
    elevation: 5,
    zIndex: 100,
  },
  dropItem: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    color: colors.textDark,
    textAlign: 'center',
  },
});
