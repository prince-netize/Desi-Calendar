/* eslint-disable react-native/no-inline-styles */
import React from 'react';
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
  openDropdown,
  setOpenDropdown,
}) {
  const years = [2023, 2024, 2025, 2026];

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPrev}>
        <Feather name="chevron-left" size={20} color={colors.white} />
      </TouchableOpacity>

      {/* MONTH */}
      <View>
        <TouchableOpacity
          style={styles.pill}
          onPress={() =>
            setOpenDropdown(openDropdown === 'month' ? null : 'month')
          }
        >
          <Text style={styles.text}>{MONTHS[month]}</Text>
          <Feather name="chevron-down" size={14} color="#000" />
        </TouchableOpacity>

        {openDropdown === 'month' && (
          <View style={styles.dropdownBox}>
            {MONTHS.map((m, i) => {
              const selected = i === month;
              return (
                <TouchableOpacity
                  key={i}
                  style={selected && styles.selectedItem}
                  onPress={() => {
                    onMonthSelect(i);
                    setOpenDropdown(null);
                  }}
                >
                  <Text
                    style={[styles.dropItem, selected && styles.selectedText]}
                  >
                    {m}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
      </View>

      {/* YEAR */}
      <View>
        <TouchableOpacity
          style={styles.pill}
          onPress={() =>
            setOpenDropdown(openDropdown === 'year' ? null : 'year')
          }
        >
          <Text style={styles.text}>{year}</Text>
          <Feather name="chevron-down" size={14} color="#000" />
        </TouchableOpacity>

        {openDropdown === 'year' && (
          <View style={styles.dropdownBox2}>
            {years.map(y => {
              const selected = y === year;
              return (
                <TouchableOpacity
                  key={y}
                  style={selected && styles.selectedItem}
                  onPress={() => {
                    onYearSelect(y);
                    setOpenDropdown(null);
                  }}
                >
                  <Text
                    style={[styles.dropItem, selected && styles.selectedText]}
                  >
                    {y}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
      </View>

      <TouchableOpacity onPress={onNext}>
        <Feather name="chevron-right" size={20} color={colors.white} />
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
    zIndex: 20,
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
  dropdownBox: {
    position: 'absolute',
    top: 40,
    width: 110,
    backgroundColor: colors.white,
    borderRadius: 12,
    paddingVertical: 6,
    elevation: 6,
    zIndex: 50,
  },
  dropdownBox2: {
    position: 'absolute',
    top: 40,
    width: 90,
    backgroundColor: colors.white,
    borderRadius: 12,
    paddingVertical: 6,
    elevation: 6,
    zIndex: 50,
  },
  dropItem: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    color: colors.textDark,
    textAlign: 'center',
  },
  selectedItem: {
    backgroundColor: colors.primary,
    borderRadius: 10,
  },
  selectedText: {
    color: colors.white,
    fontWeight: '700',
  },
});
